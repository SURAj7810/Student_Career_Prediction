// Front-end JS for CareerPro
(function () {
    const serverStatus = document.getElementById("serverStatus");
    const message = document.getElementById("message");
    const predictBtn = document.getElementById("predictBtn");
    const sampleBtn = document.getElementById("sampleBtn");
    const form = document.getElementById("predictForm");

    function setMessage(text, kind) {
        message.textContent = text;
        message.className = `message ${kind}`;
    }

    function setServerStatus(text, kind) {
        serverStatus.innerHTML = text;
        serverStatus.className = `status-message ${kind}`;
    }

    async function pingServer() {
        try {
            const r = await fetch("/predict", { method: "GET", credentials: "include" });
            if (!r.ok && r.status !== 200) {
                setServerStatus(`<i class="fas fa-exclamation-triangle"></i> Server returned status ${r.status}`, "error");
                return;
            }
            setServerStatus('<i class="fas fa-check-circle"></i> Server is connected and ready', 'connected');
        } catch (err) {
            setServerStatus('<i class="fas fa-exclamation-triangle"></i> Server unreachable. Ensure backend is running.', 'error');
            console.error("Ping failed:", err);
        }
    }

    function buildPayload() {
        return {
            Gender: document.getElementById("gender").value,
            Branch: document.getElementById("branch").value,
            Interest_Area: document.getElementById("interest").value,
            Projects_Topic: document.getElementById("projTopic").value,
            Coding_Language_Known: document.getElementById("lang").value,

            Tenth_Marks: parseFloat(document.getElementById("tenth").value),
            Twelfth_Marks: parseFloat(document.getElementById("twelfth").value),
            CGPA: parseFloat(document.getElementById("cgpa").value),
            Mathematics_Ability: parseFloat(document.getElementById("math").value),
            Programming_Skill: parseFloat(document.getElementById("prog").value),
            Analytical_Thinking: parseFloat(document.getElementById("analytic").value),
            Art_Creativity: parseFloat(document.getElementById("art").value),
            English_Proficiency: parseFloat(document.getElementById("eng").value),
            Problem_Solving: parseFloat(document.getElementById("prob").value),
            Logical_Reasoning: parseFloat(document.getElementById("logic").value),
            Communication_Skill: parseFloat(document.getElementById("comm").value),
            Projects_Count: parseFloat(document.getElementById("projCount").value),
            Internship_Experience: parseFloat(document.getElementById("internExp").value),
            Teamwork: parseFloat(document.getElementById("team").value),
            Internship_Duration_Months: parseFloat(document.getElementById("internDur").value)
        };
    }

    function validatePayload(p) {
        const missing = [];
        for (const [k, v] of Object.entries(p)) {
            if (v === null || v === undefined || v === "" || (typeof v === "number" && Number.isNaN(v))) {
                missing.push(k);
            }
        }
        return missing;
    }

    function validateSkills() {
        const skillInputs = ['math', 'prog', 'analytic', 'art', 'eng', 'prob', 'logic', 'comm', 'team'];
        let valid = true;
        
        skillInputs.forEach(skill => {
            const value = parseFloat(document.getElementById(skill).value);
            if (value < 1 || value > 10) {
                valid = false;
                document.getElementById(skill).style.borderColor = 'var(--danger)';
            } else {
                document.getElementById(skill).style.borderColor = '';
            }
        });
        
        return valid;
    }

    predictBtn.addEventListener("click", async () => {
        setMessage("", "");
        
        // Validate skills first
        if (!validateSkills()) {
            setMessage("Please ensure all skill ratings are between 1 and 10", "error");
            return;
        }
        
        const payload = buildPayload();
        const missing = validatePayload(payload);
        if (missing.length) {
            setMessage("Please fill all required fields: " + missing.join(", "), "error");
            return;
        }

        // Get user's name for personalization
        const userName = document.getElementById("name").value || "User";
        
        predictBtn.disabled = true;
        predictBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        try {
            const resp = await fetch("/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            const text = await resp.text();
            let json;
            try { 
                json = JSON.parse(text); 
                console.log('API Response:', json);
            } catch(e) { 
                console.error('Error parsing response:', e);
                json = null; 
            }

            if (!resp.ok) {
                const serverMsg = (json && (json.error || json.detail)) ? (json.error || json.detail) : text;
                setMessage("Server error: " + serverMsg, "error");
                console.error("Server error payload:", json || text);
                predictBtn.disabled = false;
                predictBtn.innerHTML = '<i class="fas fa-rocket"></i> Predict My Career';
                return;
            }

            // Store result with user's name - USE SESSIONSTORAGE
            const result = {
                career: json.career,
                raw_prediction: json.raw_prediction,
                userName: userName
            };
            
            console.log('Storing result in sessionStorage:', result);
            sessionStorage.setItem("career_prediction_result", JSON.stringify(result));
            
            // Navigate to results page
            window.location.href = "/result";
        } catch (err) {
            console.error("Network error:", err);
            setMessage("Network error: " + err.message, "error");
        } finally {
            predictBtn.disabled = false;
            predictBtn.innerHTML = '<i class="fas fa-rocket"></i> Predict My Career';
        }
    });

    sampleBtn.addEventListener("click", () => {
        // fill sample values quickly
        document.getElementById("name").value = "Alex Johnson";
        document.getElementById("gender").value = "Male";
        document.getElementById("branch").value = "CSE";
        document.getElementById("interest").value = "ML";
        document.getElementById("projTopic").value = "ML";
        document.getElementById("lang").value = "Python";

        document.getElementById("tenth").value = "85.5";
        document.getElementById("twelfth").value = "87.0";
        document.getElementById("cgpa").value = "8.5";
        document.getElementById("math").value = "8";
        document.getElementById("prog").value = "9";
        document.getElementById("analytic").value = "8";
        document.getElementById("art").value = "5";
        document.getElementById("eng").value = "8";
        document.getElementById("prob").value = "8";
        document.getElementById("logic").value = "8";
        document.getElementById("comm").value = "7";
        document.getElementById("projCount").value = "3";
        document.getElementById("internExp").value = "1";
        document.getElementById("team").value = "8";
        document.getElementById("internDur").value = "3";
        
        setMessage("Sample data loaded. Feel free to modify any values before predicting.", "success");
    });

    // Add input validation for skills
    const skillInputs = ['math', 'prog', 'analytic', 'art', 'eng', 'prob', 'logic', 'comm', 'team'];
    skillInputs.forEach(skill => {
        const input = document.getElementById(skill);
        input.addEventListener('change', function() {
            const value = parseFloat(this.value);
            if (value < 1 || value > 10) {
                this.style.borderColor = 'var(--danger)';
            } else {
                this.style.borderColor = '';
            }
        });
    });

    // ping on load
    pingServer();
})();