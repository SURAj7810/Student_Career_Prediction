// Career Resources Data
const careerResources = {
    "Data Analyst": {
        "youtube": [
            {name: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst"},
            {name: "WsCube Tech - Data Analytics Playlist", url: "https://youtube.com/playlist?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga"},
            {name: "Luke Barousse", url: "https://www.youtube.com/c/lukebarousse"},
            {name: "Top VarSity - Data Analytics Playlist", url: "https://youtube.com/playlist?list=PLOWRNl6YgsT79ezWdEhOjvK4D-cQfr7ys"},
            {name: "Krish Naik Hindi", url: "https://www.youtube.com/channel/UCjWY5hREA6FFYrthD0rZNIw"}
        ],
        "freeCourses": [
            {name: "Google Data Analytics Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics"},
            {name: "Mastering Big Data Analytics - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mastering-big-data-analytics"}
        ],
        "paidCourses": [
            {name: "Complete Data Analyst Bootcamp - Udemy", url: "https://www.udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/"},
            {name: "Data Analytics Training Program - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/data-analytics-training-program-excel-sql-python-powerbi"},
            {name: "Data Analytics with AI - PW Skills", url: "https://pwskills.com/data-science-and-analytics/data-analytics-course"}
        ],
        "ebooks": [
            {name: "Python for Data Analysis - Wes McKinney", url: "https://wesmckinney.com/book/"},
            {name: "DataCamp - Associate Data Analyst in SQL", url: "https://www.datacamp.com/tracks/associate-data-analyst-in-sql"}
        ]
    },
    "UI/UX Designer": {
        "youtube": [
            {name: "Jesse Showalter", url: "https://www.youtube.com/channel/UCvBGFeXbBrq3W9_0oNLJREQ"},
            {name: "DesignCourse", url: "https://www.youtube.com/@designcoursecom"},
            {name: "Ali Hassan UX", url: "https://www.youtube.com/channel/UCOCSgvVXY7Q2PLOPDbxfcuA"},
            {name: "Cutting Edge School - UI/UX Playlist", url: "https://youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur"}
        ],
        "freeCourses": [
            {name: "UI/UX Design - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux"},
            {name: "Google UX Design Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design"}
        ],
        "paidCourses": [
            {name: "UI/UX Design Masterclass - Udemy", url: "https://www.udemy.com/course/complete-uiux-design-course-figma-ai-real-project/"},
            {name: "UI/UX Design Course - PW Skills", url: "https://pwskills.com/web-development/ui-ux-design-course"}
        ],
        "ebooks": [
            {name: "UXPin - Free UX eBooks", url: "https://www.uxpin.com/studio/ebooks/"}
        ]
    },
    "Cloud Engineer": {
        "youtube": [
            {name: "Tech With Soleyman", url: "https://www.youtube.com/@techwithsoleyman"},
            {name: "Google Cloud Tech", url: "https://www.youtube.com/@googlecloudtech"},
            {name: "Technical Guftgu - Cloud Tutorial", url: "https://www.youtube.com/watch?v=NyA9PB6j8bg"}
        ],
        "freeCourses": [
            {name: "Introduction to Cloud - Coursera", url: "https://www.coursera.org/learn/introduction-to-cloud"},
            {name: "Cloud Computing Architecture - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-architecture"}
        ],
        "paidCourses": [
            {name: "Google Cloud Certification - Udemy", url: "https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/"},
            {name: "AWS Cloud Practitioner - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/aws-certified-cloud-practitioner-exam-certification-course"},
            {name: "Cloud Engineering - PW Skills", url: "https://pwskills.com/web-development/devops-and-cloud-computing-course"}
        ],
        "ebooks": [
            {name: "AWS Whitepapers", url: "https://aws.amazon.com/whitepapers/"},
            {name: "Microsoft Learn - Cloud Computing", url: "https://learn.microsoft.com/en-us/training/courses/az-900t00"}
        ]
    },
    "Cybersecurity Analyst": {
        "youtube": [
            {name: "With Sandra", url: "https://www.youtube.com/@WithSandra"},
            {name: "Simply Cyber", url: "https://www.youtube.com/@SimplyCyber"},
            {name: "Cyber World Hindi", url: "https://www.youtube.com/c/CyberWorldHindi"},
            {name: "Cyber Kaksha", url: "https://www.youtube.com/@CyberKaksha"}
        ],
        "freeCourses": [
            {name: "Introduction to Cyber Security - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-cyber-security"},
            {name: "Google Cybersecurity Certificate", url: "https://www.coursera.org/professional-certificates/google-cybersecurity"}
        ],
        "paidCourses": [
            {name: "Complete Cybersecurity Analyst Course - Udemy", url: "https://www.udemy.com/course/the-complete-hands-on-cybersecurity-analyst-course/"},
            {name: "Cybersecurity Professional Program - PW Skills", url: "https://pwskills.com/cybersecurity-courses/certified-payment-security-professional-program"}
        ],
        "ebooks": [
            {name: "IBM Introduction to Cybersecurity eBook", url: "https://www.pluralsight.com/browse/information-cyber-security"}
        ]
    },
    "ML Engineer": {
        "youtube": [
            {name: "StatQuest", url: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw"},
            {name: "Corey Schafer", url: "https://www.youtube.com/c/CoreySchafer"},
            {name: "Krish Naik Hindi", url: "https://www.youtube.com/channel/UCjWY5hREA6FFYrthD0rZNIw"}
        ],
        "freeCourses": [
            {name: "Machine Learning with Python - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/machine-learning-with-python"},
            {name: "Machine Learning with Python - Coursera", url: "https://www.coursera.org/learn/machine-learning-with-python"}
        ],
        "paidCourses": [
            {name: "Machine Learning Specialization - Coursera", url: "https://www.coursera.org/specializations/machine-learning-introduction"},
            {name: "Machine Learning A-Z - Udemy", url: "https://www.udemy.com/course/machinelearning/"},
            {name: "Data Science Classroom Program - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/data-science-classroom-program"}
        ],
        "ebooks": [
            {name: "Hands-On Machine Learning with Scikit-Learn", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/"},
            {name: "Deep Learning - Ian Goodfellow", url: "https://aikosh.indiaai.gov.in/static/Deep+Learning+Ian+Goodfellow.pdf"}
        ]
    },
    "Robotics Engineer": {
        "youtube": [
            {name: "James Bruton", url: "https://www.youtube.com/c/jamesbruton"},
            {name: "Michael Kaufman", url: "https://www.youtube.com/@mjkprojects"}
        ],
        "freeCourses": [
            {name: "Robotics and AI - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/robotics-and-ai"},
            {name: "Introduction to Robotics - Coursera", url: "https://www.coursera.org/specializations/introduction-robotics-webots"}
        ],
        "paidCourses": [
            {name: "ROS2 for Beginners - Udemy", url: "https://www.udemy.com/course/ros2-for-beginners/"},
            {name: "Modern Robotics - Coursera", url: "https://www.coursera.org/learn/modernrobotics-course1"}
        ],
        "ebooks": [
            {name: "Introduction to Robotics - MIT Press", url: "https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/"},
            {name: "Learning ROS for Robotics Programming", url: "https://dl.icdst.org/pdfs/files4/423f6ed13ca073890c5ed2f74ecedf95.pdf"}
        ]
    },
    "Data Scientist": {
        "youtube": [
            {name: "Krish Naik", url: "https://www.youtube.com/@krishnaik06"},
            {name: "Ken Jee", url: "https://www.youtube.com/@KenJee_DS"}
        ],
        "freeCourses": [
            {name: "Python for Applied Data Science - Coursera", url: "https://www.coursera.org/learn/python-for-applied-data-science-ai"},
            {name: "Python for Data Science - Great Learning", url: "https://olympus.mygreatlearning.com/courses/47916"}
        ],
        "paidCourses": [
            {name: "IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science"},
            {name: "Data Science A-Z - Udemy", url: "https://www.udemy.com/topic/data-science/"},
            {name: "Data Science Live - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/data-science-live"},
            {name: "Data Science with Gen AI - PW Skills", url: "https://pwskills.com/data-science-and-analytics/data-science-course"}
        ],
        "ebooks": [
            {name: "Practical Statistics for Data Scientists", url: "https://www.oreilly.com/library/view/practical-statistics-for/9781491952955/"}
        ]
    },
    "Blockchain Developer": {
        "youtube": [
            {name: "Ivan on Tech", url: "https://www.youtube.com/channel/UCrYmtJBtLdtm2ov84ulV-yg"},
            {name: "Patrick Collins", url: "https://www.youtube.com/c/patrickcollins"},
            {name: "Crypto Hindi", url: "https://www.youtube.com/c/CryptoHindi"}
        ],
        "freeCourses": [
            {name: "Blockchain Basics - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/blockchain-basics"},
            {name: "Blockchain Basics - Cyfrin", url: "https://updraft.cyfrin.io/courses/blockchain-basics"}
        ],
        "paidCourses": [
            {name: "Build Your Blockchain A-Z - Udemy", url: "https://www.udemy.com/course/build-your-blockchain-az/"},
            {name: "Blockchain Specialization - Coursera", url: "https://www.coursera.org/learn/blockchain-basics"}
        ],
        "ebooks": [
            {name: "Mastering Ethereum - Andreas Antonopoulos", url: "https://www.oreilly.com/library/view/mastering-ethereum-2nd/9781098168414/"}
        ]
    },
    "Front-End Developer": {
        "youtube": [
            {name: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia"},
            {name: "Kevin Powell", url: "https://www.youtube.com/kepowob"},
            {name: "Level Up Frontend Hindi", url: "https://www.youtube.com/channel/UCPzqyqw2SFjU24g0aN_5CzQxWZQ"},
            {name: "ProCodrr (Hindi)", url: "https://www.youtube.com/%40procodrr"}
        ],
        "freeCourses": [
            {name: "Frontend Web Development Essentials - Great Learning", url: "https://www.mygreatlearning.com/academy/premium/frontend-web-development-essentials"},
            {name: "Introduction to Front-End Development - Coursera", url: "https://www.coursera.org/learn/introduction-to-front-end-development"}
        ],
        "paidCourses": [
            {name: "Ultimate Front-End Web Development - Udemy", url: "https://www.udemy.com/course/ultimate-front-end-web-development-course/"},
            {name: "Front-End Development HTML - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/front-end-development-html"}
        ],
        "ebooks": [
            {name: "You Don't Know JS - Kyle Simpson", url: "https://www.oreilly.com/library/view/you-dont-know/9781491924471/"},
            {name: "HTML & CSS: Design and Build Websites", url: "https://sites.math.duke.edu/courses/math_everywhere/assets/techRefs/HTML%20and%20CSS-%20Design%20and%20Build%20Websites_Jon%20Duckett_2011.pdf"}
        ]
    },
    "Web Developer": {
        "youtube": [
            {name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja"},
            {name: "freeCodeCamp.org", url: "https://www.youtube.com/c/Freecodecamp"},
            {name: "Code With Harry (Hindi)", url: "https://www.youtube.com/c/CodeWithHarry"}
        ],
        "freeCourses": [
            {name: "Become Full Stack Developer - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/become-full-stack-developer"},
            {name: "Full Stack Web3 Development - Cyfrin", url: "https://updraft.cyfrin.io/courses/full-stack-web3-development-crash-course"}
        ],
        "paidCourses": [
            {name: "MERN Stack Bootcamp - Udemy", url: "https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/"},
            {name: "Complete Full Stack Web Development - Udemy", url: "https://www.udemy.com/course/complete-full-stack-web-development-bootcamp/"},
            {name: "Full Stack Node - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/full-stack-node"},
            {name: "Full Stack Web Development - PW Skills", url: "https://pwskills.com/web-development/full-stack-web-development-course"}
        ],
        "ebooks": [
            {name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/"}
        ]
    },
    "IoT Engineer": {
        "youtube": [
            {name: "Raspberry Pi Foundation", url: "https://www.youtube.com/@raspberrypi"},
            {name: "DroneBot Workshop", url: "https://www.youtube.com/@dronebotworkshop"}
        ],
        "freeCourses": [
            {name: "Learn Internet of Things on Cloud - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/learn-internet-of-things-on-cloud"},
            {name: "Industrial IoT - Cisco Networking Academy", url: "https://www.netacad.com/courses/industrial-iot-and-control-systems-in-manufacturing"}
        ],
        "paidCourses": [
            {name: "Internet of Things from Fundamentals to Advanced - Udemy", url: "https://www.udemy.com/course/internet-of-things-from-fundamentals-to-advanced/"},
            {name: "Introduction to Internet of Things - Coursera", url: "https://www.coursera.org/learn/introduction-to-internet-of-things"}
        ],
        "ebooks": [
            {name: "IoT Fundamentals: Networking Technologies", url: "https://www.oreilly.com/library/view/iot-fundamentals-networking/9780134307091/"},
            {name: "Cisco IoT Fundamentals", url: "https://www.krishnagudi.com/wp-content/uploads/2020/04/Cisco-press-iot-Fundamentals.pdf"}
        ]
    },
    "Back-End Developer": {
        "youtube": [
            {name: "Academind", url: "https://www.youtube.com/c/Academind"},
            {name: "Programming with Mosh", url: "https://www.youtube.com/c/programmingwithmosh"}
        ],
        "freeCourses": [
            {name: "Microsoft Back-End Developer - Coursera", url: "https://www.coursera.org/professional-certificates/microsoft-back-end-developer"}
        ],
        "paidCourses": [
            {name: "Complete Back-End Web Development - Udemy", url: "https://www.udemy.com/course/the-complete-back-end-web-development-course/"},
            {name: "Java Backend Live - GeeksforGeeks", url: "https://www.geeksforgeeks.org/courses/Java-backend-live"}
        ],
        "ebooks": [
            {name: "Flask Web Development", url: "https://www.oreilly.com/library/view/flask-web-development/9781491991725/"},
            {name: "Node.js Design Patterns", url: "https://www.oreilly.com/library/view/node-js-design-patterns/9781803238944/"}
        ]
    },
    "Graphics Designer": {
        "youtube": [
            {name: "Satori Graphics", url: "https://www.youtube.com/c/SatoriGraphics"},
            {name: "Tutvid", url: "https://www.youtube.com/c/Tutvid"}
        ],
        "freeCourses": [
            {name: "Intro to Graphic Design with Photoshop - Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/intro-to-graphic-design-with-photoshop"}
        ],
        "paidCourses": [
            {name: "Graphic Design Masterclass - Udemy", url: "https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/"},
            {name: "Adobe Graphic Designer - Coursera", url: "https://www.coursera.org/professional-certificates/adobe-graphic-designer"}
        ],
        "ebooks": [
            {name: "The Non-Designer's Design Book", url: "https://diegopiovesan.wordpress.com/wp-content/uploads/2010/07/livro_-_the_non-designers_desi.pdf"},
            {name: "Graphic Design School", url: "https://download.e-bookshelf.de/download/0000/7362/19/L-G-0000736219-0002339513.pdf"}
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing results page...');
    initializeResultsPage();
    setupEventListeners();
});

function initializeResultsPage() {
    console.log('Initializing results page...');
    
    // Get prediction result from sessionStorage
    let result;
    try {
        const storedResult = sessionStorage.getItem('career_prediction_result');
        console.log('Stored result from sessionStorage:', storedResult);
        
        if (storedResult) {
            result = JSON.parse(storedResult);
            console.log('Parsed result:', result);
            
            const career = result.career;
            const userName = result.userName;

            if (career) {
                displayCareerResult(career, userName, result);
                return;
            }
        }
    } catch (error) {
        console.error('Error parsing sessionStorage data:', error);
    }

    // If no result found, show error
    displayNoResult();
}

function displayCareerResult(career, userName, result) {
    console.log('Displaying career result:', career);
    
    const careerTitle = document.getElementById('careerTitle');
    const predictionMethod = document.getElementById('predictionMethod');
    const userInfo = document.getElementById('userInfo');
    const userNameEl = document.getElementById('userName');
    const resourcesSection = document.getElementById('resourcesSection');
    const noResult = document.getElementById('noResult');
    const actionButtons = document.getElementById('actionButtons');
    const resultContent = document.getElementById('resultContent');
    
    // Set career title
    careerTitle.textContent = career;
    
    // Set prediction method
    if (result.raw_prediction && result.raw_prediction[0] === "rule_override") {
        predictionMethod.textContent = "Rule-based recommendation";
    } else {
        predictionMethod.textContent = "AI Model prediction";
    }
    
    // Show user info if available
    if (userName && userName !== "User") {
        userInfo.style.display = 'block';
        userNameEl.textContent = userName;
    }
    
    // Populate resources
    const resources = careerResources[career];
    if (resources) {
        populateResources(resources);
        resourcesSection.style.display = 'block';
    } else {
        displayNoResources(career);
    }
    
    resultContent.style.display = 'block';
    noResult.style.display = 'none';
    actionButtons.style.display = 'flex';
}

function displayNoResult() {
    console.log('Displaying no result message');
    const resultContent = document.getElementById('resultContent');
    const noResult = document.getElementById('noResult');
    const actionButtons = document.getElementById('actionButtons');
    
    resultContent.style.display = 'none';
    noResult.style.display = 'block';
    actionButtons.style.display = 'none';
}

function displayNoResources(career) {
    console.log('No resources found for career:', career);
    const resourcesSection = document.getElementById('resourcesSection');
    
    resourcesSection.innerHTML = `
        <h2 class="section-title">Learning Resources</h2>
        <div class="fallback">
            <i class="fas fa-info-circle fallback-icon"></i>
            <h2>Resources Coming Soon</h2>
            <p>We're currently curating the best learning resources for "${career}". Check back soon!</p>
        </div>
    `;
    resourcesSection.style.display = 'block';
}

function populateResources(resources) {
    console.log('Populating resources:', resources);
    populateResourceList('youtubeResources', resources.youtube);
    populateResourceList('freeCourses', resources.freeCourses);
    populateResourceList('paidCourses', resources.paidCourses);
    populateResourceList('ebooks', resources.ebooks);
}

function populateResourceList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    container.innerHTML = '';
    
    if (!items || items.length === 0) {
        const li = document.createElement('li');
        li.className = 'resource-item';
        li.textContent = 'No resources available for this category.';
        container.appendChild(li);
        return;
    }
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'resource-item';
        
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'resource-link';
        
        li.appendChild(link);
        container.appendChild(li);
    });
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Save button
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            saveResults();
        });
    }
}

function saveResults() {
    const careerTitle = document.getElementById('careerTitle');
    const userNameEl = document.getElementById('userName');
    
    const career = careerTitle.textContent;
    const userName = userNameEl.textContent;
    
    const content = `
CareerPro - Career Prediction Results
=====================================

Your Recommended Career: ${career}
Assessment Date: ${new Date().toLocaleDateString()}
${userName ? `User: ${userName}` : ''}

Thank you for using CareerPro!

For detailed learning resources, visit our website or check the printed resources.

Powered by AI & Machine Learning | CareerPro © 2023
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `careerpro-result-${career.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}