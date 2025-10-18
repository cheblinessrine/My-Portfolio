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
    "DATA ANALYST",
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

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize typewriter effect
    textElements = document.querySelector(".typewriter-text");
    if (textElements) typeWriter();
    
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

// Hire Me button - scroll to contact section (guarded)
const hireBtn = document.querySelector('.content button');
if (hireBtn) {
    hireBtn.addEventListener('click', function() {
        const contact = document.querySelector('#contact') || document.querySelector('footer#contact');
        if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Download CV button - show CV modal (guarded)
document.addEventListener("DOMContentLoaded", function () {
    const cvModal = document.getElementById("cvModal");
    const closeCvModal = document.getElementById("closeCvModal");
    const printCV = document.getElementById("printCV");
    const downloadBtns = document.querySelectorAll(".download-btn"); // Supports multiple download buttons

    // Open CV modal
    if (downloadBtns && downloadBtns.length) {
        downloadBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                if (cvModal) {
                    cvModal.classList.add("show");
                    document.body.style.overflow = "hidden"; // Prevent scrolling
                }
            });
        });
    }

    // Close CV modal
    if (closeCvModal && cvModal) {
        closeCvModal.addEventListener("click", function () {
            cvModal.classList.remove("show");
            document.body.style.overflow = "auto"; // Restore scrolling
        });
    }

    // Close modal when clicking outside (but not inside content)
    window.addEventListener("click", function (event) {
        if (cvModal && event.target === cvModal) {
            cvModal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    // Print CV functionality
    if (printCV) {
        printCV.addEventListener("click", function () {
            if (!cvModal) return;
            cvModal.style.backgroundColor = "white"; // Hide dark background for print
            setTimeout(() => {
                window.print();
                cvModal.style.backgroundColor = ""; // Restore background after print
            }, 100);
        });
    }
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

// Replace fragile portfolio-video link handler with a guard
const portfolioLink = document.querySelector("a[href='#portfolio-video']");
if (portfolioLink) {
    portfolioLink.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.getElementById("portfolio-video");
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
}

/* Chatbot toggle  */
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('chat-toggle');
        const panel = document.getElementById('chat-panel');
        const closeBtn = document.getElementById('chat-close');
        const form = document.getElementById('chat-form');
        const input = document.getElementById('chat-input');
        const messages = document.getElementById('chat-messages');

        if (!toggle || !panel || !form || !input || !messages) return;

        // 🔔 أصوات
        const sendSound = new Audio('sounds/message_send.mp3');
        const replySound = new Audio('sounds/message_send.mp3');

        // 🟢 فتح وغلق
        function openChat() {
            panel.style.display = 'flex';
            panel.setAttribute('aria-hidden', 'false');
            input.focus();
            if (!messages.querySelector('.msg')) {
                addBotMessage("Hi 😊 I'm <b>Nessrine's assistant</b>! How can I help you today?");
                showQuickReplies();
            }
        }
        function closeChat() {
            panel.style.display = 'none';
            panel.setAttribute('aria-hidden', 'true');
            toggle.focus();
        }

        toggle.addEventListener('click', () => {
            const visible = panel.style.display === 'flex';
            if (visible) closeChat(); else openChat();
        });
        if (closeBtn) closeBtn.addEventListener('click', closeChat);

        // 💬 رسائل
        function addMessage(text, cls = 'user') {
            const msg = document.createElement('div');
            msg.className = `msg ${cls}`;
            msg.innerHTML = text;
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
        }

        // ✨ تأثير الكتابة
        function addBotMessage(text) {
            const typing = document.createElement('div');
            typing.className = 'msg bot typing';
            typing.textContent = '...';
            messages.appendChild(typing);
            messages.scrollTop = messages.scrollHeight;

            setTimeout(() => {
                typing.remove();
                typeEffect(text, 'bot');
                replySound.play();
                showQuickReplies();
            }, 700);
        }
        // 🎙️ Speech Recognition (voice to text)
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US"; // يمكنك تغييرها إلى "ar-DZ" للعربية
        recognition.interimResults = false;

        const micBtn = document.createElement("button");
        micBtn.innerHTML = "🎙️";
        micBtn.id = "mic-btn";
        micBtn.style.background = "transparent";
        micBtn.style.border = "none";
        micBtn.style.fontSize = "20px";
        micBtn.style.cursor = "pointer";
        document.querySelector(".chat-form").appendChild(micBtn);

        micBtn.addEventListener("click", () => {
            recognition.start();
            micBtn.textContent = "🎧 Listening...";
        });

        recognition.onresult = (event) => {
            const speechText = event.results[0][0].transcript;
            addMessage(speechText, "user");
            const reply = answerQuery(speechText);
            addBotMessage(reply);
            speak(reply); // تحويل الرد إلى صوت
            micBtn.textContent = "🎙️";
        };

        recognition.onerror = () => {
            micBtn.textContent = "🎙️";
        };

        // 🔊 Text to Speech (bot voice)
        function speak(text) {
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = "en-US"; // يمكنك وضع "ar-DZ" للعربية
            speechSynthesis.speak(utter);
        }

        function typeEffect(text, cls) {
            const msg = document.createElement('div');
            msg.className = `msg ${cls}`;
            messages.appendChild(msg);
            let i = 0;
            function type() {
                if (i < text.length) {
                    msg.innerHTML = text.substring(0, i + 1);
                    messages.scrollTop = messages.scrollHeight;
                    i++;
                    setTimeout(type, 15);
                }
            }
            type();
        }

        // 🧠 قاعدة بيانات
        const kb = {
            name: 'Nessrine',
            role: 'Data & Web Technologies Engineer',
            experience: 'I have strong experience building intelligent, data-driven web platforms.',
            skills: ['Python', 'Django', 'JavaScript', 'React', 'AI', 'Data Science'],
            services: ['Web Development', 'AI Integration', 'Data Analysis'],
            contactEmail: 'cheblinesrine69@gmail.com',
            cvLink: 'cv.pdf',
            socials: {
                linkedin: 'https://www.linkedin.com/in/chebli-nessrine-966a2b383',
                github: 'https://github.com/cheblinessrine',
                facebook: 'https://www.facebook.com/share/1YJRwCnsiz/'
            }
        };

        // 🤖 الردود الذكية
        function answerQuery(q) {
            q = q.toLowerCase();

            if (/(name|who|about)/.test(q))
                return `I'm <b>${kb.name}</b> — ${kb.role} 💻`;

            if (/(experience|years)/.test(q))
                return kb.experience;

            if (/(skill|skills|technologies)/.test(q))
                return `Key skills: ${kb.skills.join(', ')}.`;

            if (/(service|offer|work)/.test(q))
                return `I provide: ${kb.services.join(', ')}.`;

            if (/(cv|resume)/.test(q))
                return `Here’s my CV — feel free to check it out 👉 <a href="${kb.cvLink}" target="_blank">Download CV</a>`;

            if (/(contact|email|social|linkedin|facebook|github)/.test(q))
                return `
                    You can reach me here 📬<br>
                    ✉️ <a href="mailto:${kb.contactEmail}">${kb.contactEmail}</a><br>
                    💼 <a href="${kb.socials.linkedin}" target="_blank">LinkedIn</a><br>
                    💻 <a href="${kb.socials.github}" target="_blank">GitHub</a><br>
                    🌸 <a href="${kb.socials.facebook}" target="_blank">Facebook</a>
                `;

            return "I can share details about my skills, services, or professional experience. How can I assist you?";
        }

        // ⚡ أزرار سريعة
        function showQuickReplies() {
            const old = document.querySelector('.quick-replies');
            if (old) old.remove();

            const wrapper = document.createElement('div');
            wrapper.className = 'quick-replies';

            const options = ['Services', 'Skills', 'About', 'Contact'];
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'quick-btn';
                btn.textContent = opt;
                btn.addEventListener('click', () => {
                    addMessage(opt, 'user');
                    sendSound.play();
                    const reply = answerQuery(opt);
                    addBotMessage(reply);
                });
                wrapper.appendChild(btn);
            });

            messages.appendChild(wrapper);
            messages.scrollTop = messages.scrollHeight;
        }

        // 📨 إرسال الرسائل
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;
            addMessage(text, 'user');
            sendSound.play();
            input.value = '';
            const reply = answerQuery(text);
            addBotMessage(reply);
        });

        // ⌨️ اختصار Ctrl+/
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '/') {
                const visible = panel.style.display === 'flex';
                if (visible) closeChat(); else openChat();
            }
        });

        panel.style.display = 'none';
    });
})();
