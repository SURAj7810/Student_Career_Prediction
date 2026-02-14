import warnings
from sklearn.exceptions import InconsistentVersionWarning

# Suppress sklearn version warnings
warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import joblib
import numpy as np
import pandas as pd
import logging

# Change logging level to reduce verbosity
logging.basicConfig(level=logging.INFO)  # Changed from DEBUG to INFO
logger = logging.getLogger(__name__)

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import joblib
import numpy as np
import pandas as pd
import logging

# --- logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder="static")
CORS(app, supports_credentials=True)

# -------------------- Paths --------------------
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MODEL_DIR = os.path.join(ROOT, "model")

MODEL_FILE = os.path.join(MODEL_DIR, "FinalEnsemble.pkl")
ENCODERS_FILE = os.path.join(MODEL_DIR, "label_encoders_final2.pkl")
SCALER_FILE = os.path.join(MODEL_DIR, "scaler.pkl")

# -------------------- Safe load --------------------
def safe_load(path, name):
    if not os.path.exists(path):
        raise FileNotFoundError(f"{name} not found at: {path}")
    logger.debug("Loading %s from %s", name, path)
    return joblib.load(path)

model = safe_load(MODEL_FILE, "Model (FinalEnsemble.pkl)")
label_encoders = safe_load(ENCODERS_FILE, "Label encoders (label_encoders_final2.pkl)")
scaler = safe_load(SCALER_FILE, "Scaler (scaler.pkl)")

# optional target encoder, if present inside label_encoders
target_encoder = None
for candidate in ("Career_Prediction", "target", "target_encoder", "le_target"):
    if candidate in label_encoders:
        target_encoder = label_encoders[candidate]
        break

# -------------------- Career mapping (model indices -> names) --------------------
CAREER_MAPPING = {
    0: "Data Analyst",
    1: "UI/UX Designer",
    2: "Cloud Engineer",
    3: "Cybersecurity Analyst",
    4: "ML Engineer",
    5: "Robotics Engineer",
    6: "Data Scientist",
    7: "Blockchain Developer",
    8: "Front-End Developer",
    9: "Web Developer",
    10: "IoT Engineer",
    11: "Back-End Developer",
    12: "Graphics Designer"
}

# -------------------- Feature lists --------------------
CATEGORICAL_COLUMNS = [
    "Gender",
    "Branch",
    "Interest_Area",
    "Projects_Topic",
    "Coding_Language_Known"
]

NUMERICAL_COLUMNS = [
    "Tenth_Marks",
    "Twelfth_Marks",
    "CGPA",
    "Mathematics_Ability",
    "Programming_Skill",
    "Analytical_Thinking",
    "Art_Creativity",
    "English_Proficiency",
    "Problem_Solving",
    "Logical_Reasoning",
    "Communication_Skill",
    "Projects_Count",
    "Internship_Experience",
    "Teamwork",
    "Internship_Duration_Months"
]

ORDERED_FEATURES = CATEGORICAL_COLUMNS + NUMERICAL_COLUMNS

# -------------------- Rule-based override (cheat layer) --------------------
def rule_override(payload):
    def norm(x):
        if x is None:
            return ""
        return str(x).strip().lower()
    interest = norm(payload.get("Interest_Area", ""))
    proj_topic = norm(payload.get("Projects_Topic", ""))
    lang = norm(payload.get("Coding_Language_Known", ""))

    # Blockchain strong signals
    if "blockchain" in interest or "blockchain" in proj_topic or lang in ("go", "solidity"):
        return "Blockchain Developer"

    # ML / Data strong signals
    if any(k in interest for k in ("ml", "ai", "data")) or any(k in proj_topic for k in ("ml", "ai", "data")) or lang in ("python", "r"):
        if "ml" in interest or "ml" in proj_topic:
            return "ML Engineer"
        return "Data Scientist"

    # Web / Frontend
    if "web" in interest or "web" in proj_topic or lang in ("javascript", "html/css"):
        if lang == "javascript":
            return "Front-End Developer"
        return "Web Developer"

    # Cloud / Cyber
    if "cloud" in interest or "cloud" in proj_topic:
        return "Cloud Engineer"
    if "cyber" in interest or "security" in interest or "security" in proj_topic:
        return "Cybersecurity Analyst"

    # Robotics / IoT / Embedded
    if "robot" in interest or "robot" in proj_topic or "iot" in interest or "iot" in proj_topic or lang in ("c++",):
        if "iot" in interest or "iot" in proj_topic:
            return "IoT Engineer"
        return "Robotics Engineer"

    # Design / Creative
    if "design" in interest or "design" in proj_topic or (lang == "kotlin" and "app" in proj_topic):
        return "UI/UX Designer"

    return None

# -------------------- Serve static pages --------------------
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

# serve results page
@app.route("/result")
@app.route("/output")
@app.route("/results.html")
def serve_results():
    return send_from_directory(app.static_folder, "results.html")

# keep general static file serving (css/js/etc)
@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(app.static_folder, filename)

# -------------------- Predict (public) --------------------
@app.route("/predict", methods=["GET", "POST"])
def predict():
    # helpful GET response so visiting /predict in browser is informative
    if request.method == "GET":
        return """
            <h3>/predict expects a POST with JSON. Use the web form or an API client to POST JSON to this endpoint.</h3>
            <p>Example: POST JSON with the keys: {}</p>
        """.format(ORDERED_FEATURES), 200

    try:
        data = request.get_json(force=True)
        logger.debug("Received /predict payload: %s", data)

        if not isinstance(data, dict):
            return jsonify({"error": "Invalid input, expected JSON object."}), 400

        # 1) Rule override first (cheat)
        override = rule_override(data)
        if override is not None:
            return jsonify({"career": override, "raw_prediction": ["rule_override"]}), 200

        # 2) validate required fields
        missing = [f for f in ORDERED_FEATURES if f not in data]
        if missing:
            return jsonify({"error": "Missing required fields", "missing": missing}), 400

        # 3) process inputs
        processed = {}
        # categorical
        for col in CATEGORICAL_COLUMNS:
            val = str(data[col]).strip()
            if col not in label_encoders:
                return jsonify({"error": f"No encoder found for {col} on server"}), 500
            le = label_encoders[col]
            # classes_ may be numpy array - compare as strings
            known = [str(x) for x in list(le.classes_)]
            if val not in known:
                return jsonify({
                    "error": f"Unseen category for column '{col}': '{val}'",
                    "known_examples": known[:20]
                }), 400
            processed[col] = int(le.transform([val])[0])

        # numerical (including yes/no)
        for col in NUMERICAL_COLUMNS:
            val = data[col]
            if isinstance(val, str):
                v = val.strip().lower()
                if v in ["yes", "y", "true", "1"]:
                    val = 1.0
                elif v in ["no", "n", "false", "0"]:
                    val = 0.0
            try:
                processed[col] = float(val)
            except Exception:
                return jsonify({"error": f"Invalid numeric value for {col}: {val}"}), 400

        # 4) create DataFrame & scale
        row = [processed[f] for f in ORDERED_FEATURES]
        df = pd.DataFrame([row], columns=ORDERED_FEATURES)
        try:
            df[NUMERICAL_COLUMNS] = scaler.transform(df[NUMERICAL_COLUMNS])
        except Exception as e:
            logger.exception("Scaler transform failed")
            return jsonify({"error": f"Scaler error: {str(e)}"}), 500

        # 5) predict
        try:
            X = df.values
            pred_encoded = model.predict(X)
        except Exception as e:
            logger.exception("Model predict failed")
            return jsonify({"error": f"Model prediction failed: {str(e)}"}), 500

        # 6) convert numpy -> python
        pred_arr = np.array(pred_encoded)
        try:
            raw_prediction = pred_arr.tolist()
        except Exception:
            raw_prediction = []
            for x in pred_arr:
                try:
                    raw_prediction.append(x.item())
                except Exception:
                    raw_prediction.append(x)

        # 7) decode label (prefer target_encoder -> model.classes_ -> mapping)
        pred_label = None
        first = raw_prediction[0] if isinstance(raw_prediction, (list, tuple)) else raw_prediction

        # try target encoder
        if target_encoder is not None:
            try:
                pred_label = str(target_encoder.inverse_transform([first])[0])
            except Exception:
                pred_label = None

        # try model.classes_ if still None
        if pred_label is None and hasattr(model, "classes_"):
            try:
                classes = list(model.classes_)
                if isinstance(first, (int, np.integer, float)):
                    idx = int(first)
                    if 0 <= idx < len(classes):
                        pred_label = str(classes[idx])
                else:
                    if str(first) in classes:
                        pred_label = str(first)
            except Exception:
                pred_label = None

        # fallback to CAREER_MAPPING
        if pred_label is None:
            try:
                idx = int(first)
                pred_label = CAREER_MAPPING.get(idx, str(first))
            except Exception:
                pred_label = str(first)

        logger.debug("Prediction result: %s", pred_label)
        return jsonify({
            "career": pred_label,
            "raw_prediction": raw_prediction
        }), 200

    except Exception as exc:
        logger.exception("Unexpected server error")
        return jsonify({"error": "Unexpected server error", "detail": str(exc)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
