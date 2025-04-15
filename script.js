// Toggle menu function
function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Close menu when clicking a link
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        let navLinks = document.getElementById("nav-links");
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});




function openChatbot() {
    document.getElementById("chatbotModal").style.display = "block";
}

function closeChatbot() {
    document.getElementById("chatbotModal").style.display = "none";
}


// Load predefined responses from a JSON file
let responses = {};

fetch("responses.json")
    .then(response => response.json())
    .then(data => {
        responses = data;
    })
    .catch(error => console.error("Error loading responses:", error));

//  Function to detect language based on text
function detectLanguage(text) {
    text = text.toLowerCase().trim();

    // 1️⃣ Check for Arabic script
    if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text)) {
        return "ar";
    }
    
    // 2️⃣ Check for French diacritics or common words
    if (/[éèêëàâäîïôöùûüçœæ]/.test(text) || 
        text.includes("bonjour") || text.includes("au revoir") || text.includes("merci")) {
        return "fr";
    }

    // 3️⃣ Default to English
    return "en";
}


//  Function to get the correct response in the detected language
function getResponse(input) {
    let lang = detectLanguage(input);
    let normalizedInput = input.toLowerCase().trim();

    console.log("Detected Language:", lang); // Debugging log
    console.log("Normalized Input:", normalizedInput); // Debugging log

    //  Check if the exact phrase exists in the JSON for the detected language
    if (responses[normalizedInput] && responses[normalizedInput][lang]) {
        return responses[normalizedInput][lang];
    }

    //  If not found, return a default fallback message
    return {
        "ar": "عذرًا، لم أفهم ذلك. هل يمكنك إعادة الصياغة؟",
        "fr": "Désolé, je n'ai pas compris. Pouvez-vous reformuler?",
        "en": "Sorry, I didn't understand that. Can you rephrase?"
    }[lang];
}

//  Fix for Speech Output (Works for All Languages)
function speak(text, lang, callback) {
    if (!window.speechSynthesis) {
        console.error("❌ Speech Synthesis API not supported");
        if (callback) callback();
        return;
    }

    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang === "ar" ? "ar-SA" : lang === "fr" ? "fr-FR" : "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    speech.onend = function () {
        if (callback) callback(); // Call function after speaking
    };

    window.speechSynthesis.speak(speech);
}

//  Function to process text-based input
let chatHistory = [];
function askAIFromInput() {
    let userInputField = document.getElementById("userInput");
    let userInput = userInputField.value.trim();

    if (userInput === "") return;

    let lang = detectLanguage(userInput);
    let response = getResponse(userInput);

    let responseBox = document.getElementById("ai-response");
    responseBox.innerText = "🤖:  " + response;

    // Speak the response, and clear after it finishes
    speak(response, lang, () => {
        responseBox.innerText = "";
    });

    // Save to history
    chatHistory.push({ userInput, aiResponse: response });

    setTimeout(() => {
        userInputField.value = "";
    }, 1000);

    displayHistory();
}


function toggleHistory() {
    const history = document.getElementById("chatHistory");
    history.classList.toggle("open"); // Toggle sidebar class
}

function displayHistory() {
    const historyDiv = document.getElementById("historyMessages");
    historyDiv.innerHTML = "";

    chatHistory.forEach(item => {
        const msg = document.createElement("div");
        msg.classList.add("history-item");
        msg.innerHTML = `<strong>🧑:</strong> ${item.userInput}<br><strong>🤖:</strong> ${item.aiResponse}`;
        historyDiv.appendChild(msg);
    });
}

function animateUserEmoji() {
    const emoji = document.getElementById("emojiUser");
    emoji.classList.add("animate-wave");

    // Remove class after animation ends to allow repeat on next input
    setTimeout(() => {
        emoji.classList.remove("animate-wave");
    }, 1300);
}


//DARK LIGHT MODE
function toggleTheme() {
    const modal = document.getElementById("chatbotModal");
    modal.classList.toggle("dark-mode");
}



// Navigation Functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
];
let speed = 100;
let textElements, textIndex = 0, characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}


// Chatbot Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize typewriter effect
    textElements = document.querySelector(".typewriter-text");
    if (textElements) typeWriter();
    
    // Chatbot elements
    //const chatMessages = document.getElementById('chatMessages');
    //const userInput = document.getElementById('userInput');
    //const sendButton = document.getElementById('sendMessage');
    
    // Project portfolio data
    const projectData = {
        'project1': {
            title: 'Foodie App Redesign',
            category: 'UI/UX Design',
            description: 'A complete redesign of the Foodie App interface to improve user experience and increase engagement. The project included user research, wireframing, prototyping, and final UI design. The redesign resulted in a 40% increase in user engagement and a 25% increase in daily active users.',
            image: 'images/high-protein-meal-with-smartphone-arrangement.jpg',
            client: 'Foodie Inc.',
            date: 'January 2023',
            skills: 'UI/UX Design, Adobe XD, Figma'
        },
        'project2': {
            title: 'Ecoshop E-commerce',
            category: 'Web Development',
            description: 'Development of a fully responsive e-commerce platform for sustainable products. The website features a modern design, intuitive navigation, and seamless checkout process. Built with React.js and Node.js, with Stripe integration for payments.',
            image: 'images/6873171.jpg',
            client: 'Ecoshop',
            date: 'March 2023',
            skills: 'React.js, Node.js, MongoDB, Stripe API'
        },
        'project3': {
            title: 'Mindfulness App',
            category: 'UI/UX Design & Mobile Development',
            description: 'Design and development of a meditation and mindfulness app that helps users practice daily meditation. The app features customizable meditation sessions, progress tracking, and sleep stories. The clean, minimalist design creates a calm and soothing user experience.',
            image: 'images/fittness.jpg',
            client: 'MindWell',
            date: 'May 2023',
            skills: 'Figma, React Native, Firebase'
        },
        'project4': {
            title: 'Travel Buddy Website',
            category: 'Web Development',
            description: 'A travel planning website that helps users discover destinations, plan itineraries, and book accommodations. The site includes interactive maps, user reviews, and personalized recommendations. The simplified booking process increased conversion rates by 25%.',
            image: 'images/2955695.jpg',
            client: 'Travel Buddy',
            date: 'July 2023',
            skills: 'HTML5, CSS3, JavaScript, Google Maps API'
        },
        'project5': {
            title: 'Fitness Tracker App',
            category: 'UI/UX Design',
            description: 'Design of a fitness tracking app that allows users to monitor workouts, set goals, and track progress. The app features an intuitive dashboard, custom workout creator, and social sharing functionality. The design focused on motivation and user engagement.',
            image: 'images/3864158.jpg',
            client: 'FitLife',
            date: 'September 2023',
            skills: 'Sketch, Principle, Prototyping'
        },
        'project6': {
            title: 'Finance Dashboard',
            category: 'Web Development',
            description: 'Development of a comprehensive financial dashboard for tracking investments, expenses, and savings. The dashboard features real-time data visualization, trend analysis, and budget planning tools. Built with Vue.js and Chart.js for data visualization.',
            image: 'images/3219080.jpg',
            client: 'FinTech Solutions',
            date: 'November 2023',
            skills: 'Vue.js, Chart.js, Firebase, Responsive Design'
        }
    };
    
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Project Modal Functionality
    const projectModal = document.getElementById('projectModal');
    const projectButtons = document.querySelectorAll('.view-project-btn');
    const closeModal = document.querySelector('.close-modal');
    
    // Modal elements
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalClient = document.getElementById('modalClient');
    const modalDate = document.getElementById('modalDate');
    const modalSkills = document.getElementById('modalSkills');
    // Removed modalLink reference since the element has been removed from HTML
    
    if (projectButtons.length > 0) {
        projectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-id');
                const project = projectData[projectId];
                
                // Populate modal with project data
                modalImage.src = project.image;
                modalTitle.textContent = project.title;
                modalCategory.textContent = project.category;
                modalDescription.textContent = project.description;
                modalClient.textContent = project.client;
                modalDate.textContent = project.date;
                modalSkills.textContent = project.skills;
                // Removed modalLink.href assignment
                
                // Show modal
                projectModal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
    }
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    
    
    
   
    
   
    
    
    
    
        
    
    
        
      
    
    // Animation for skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-line');
    const animateSkills = function() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('style') ? 
                          bar.style.width : 
                          getComputedStyle(bar).width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };
    
    // Trigger skill animations when section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const skillsVideo = document.getElementById("skills-video");
    const overlayTexts = document.querySelectorAll(".overlay-text");

    if (!skillsVideo || overlayTexts.length === 0) return;

    function resetOverlays() {
        overlayTexts.forEach(text => {
            text.style.opacity = "0";
            text.style.transform = "translateY(20px)";
        });
    }

    skillsVideo.addEventListener("timeupdate", function () {
        const videoTime = skillsVideo.currentTime;
        resetOverlays();

        if (videoTime >= 5 && videoTime < 10) {
            overlayTexts[0].style.opacity = "1";
            overlayTexts[0].style.transform = "translateY(0)";
        } else if (videoTime >= 10 && videoTime < 15) {
            overlayTexts[1].style.opacity = "1";
            overlayTexts[1].style.transform = "translateY(0)";
        } else if (videoTime >= 15) {
            overlayTexts[2].style.opacity = "1";
            overlayTexts[2].style.transform = "translateY(0)";
        }
    });

    skillsVideo.addEventListener("pause", resetOverlays);
    skillsVideo.addEventListener("ended", resetOverlays);
});


// Hire Me button - scroll to contact section
document.querySelector('.content button').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Download CV button - show CV modal
document.addEventListener("DOMContentLoaded", function () {
    const cvModal = document.getElementById("cvModal");
    const closeCvModal = document.getElementById("closeCvModal");
    const printCV = document.getElementById("printCV");
    const downloadBtns = document.querySelectorAll(".download-btn"); // Supports multiple download buttons

    // Open CV modal
    downloadBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            cvModal.classList.add("show");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    // Close CV modal
    closeCvModal.addEventListener("click", function () {
        cvModal.classList.remove("show");
        document.body.style.overflow = "auto"; // Restore scrolling
    });

    // Close modal when clicking outside (but not inside content)
    window.addEventListener("click", function (event) {
        if (event.target === cvModal) {
            cvModal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    // Print CV functionality
    printCV.addEventListener("click", function () {
        cvModal.style.backgroundColor = "white"; // Hide dark background for print
        setTimeout(() => {
            window.print();
            cvModal.style.backgroundColor = ""; // Restore background after print
        }, 100);
    });
});

// skils circle
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".circle").forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let svg = `
            <svg viewBox="0 0 100 100">
                <circle class="bg" cx="50" cy="50" r="40"></circle>
                <circle class="progress" cx="50" cy="50" r="40" style="stroke-dashoffset: ${251 - (251 * percent) / 100};"></circle>
            </svg>
        `;
        circle.innerHTML += svg;
    });
});

document.querySelector("a[href='#portfolio-video']").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("portfolio-video").scrollIntoView({ behavior: "smooth" });
});