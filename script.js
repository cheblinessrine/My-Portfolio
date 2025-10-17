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
    // wait until DOM ready (script.js already runs at end but guard anyway)
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('chat-toggle');
        const panel = document.getElementById('chat-panel');
        const closeBtn = document.getElementById('chat-close');
        const form = document.getElementById('chat-form');
        const input = document.getElementById('chat-input');
        const messages = document.getElementById('chat-messages');

        if (!toggle || !panel || !form || !input || !messages) return; // nothing to do if markup missing

        function openChat() {
            panel.style.display = 'flex';
            panel.setAttribute('aria-hidden', 'false');
            input.focus();
            // add welcome if empty
            if (!messages.querySelector('.msg')) {
                addBotMessage("Hi 😊");
            }
        }
        function closeChat() {
            panel.style.display = 'none';
            panel.setAttribute('aria-hidden', 'true');
            toggle.focus();
        }

        // toggle open/close when main button clicked
        toggle.addEventListener('click', () => {
            const visible = panel.style.display === 'flex';
            if (visible) closeChat(); else openChat();
        });

        // close button inside panel (if present)
        if (closeBtn) closeBtn.addEventListener('click', closeChat);

        function addMessage(text, cls = 'user') {
            const msg = document.createElement('div');
            msg.className = `msg ${cls}`;
            msg.textContent = text;
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
        }
        function addBotMessage(text) {
            const placeholder = document.createElement('div');
            placeholder.className = 'msg bot typing';
            placeholder.textContent = '...';
            messages.appendChild(placeholder);
            messages.scrollTop = messages.scrollHeight;
            setTimeout(() => {
                placeholder.remove();
                addMessage(text, 'bot');
            }, 600 + Math.min(1200, text.length * 10));
        }

        // simple QA (keeps existing behavior if present elsewhere)
        const kb = {
            name: 'Nessrine',
            role: 'Data and Web Technologies Engineer',
            experience: '5+ years building web applications and data-driven systems',
            skills: ['HTML','CSS','JavaScript','Python','Django','React','AI / Machine Learning','Data Science'],
            services: ['Web Development','UI/UX Design','AI & Data Science'],
            contactEmail: 'cheblinesrine69@gmail.com',
            contactPhone: '+213782307873',
            cvLink: 'cv.pdf'
        };

        function answerQuery(q) {
            q = q.toLowerCase();
            if (/(name|who are you|who is)/.test(q)) return `My name is ${kb.name}. I'm a ${kb.role}.`;
            if (/(experience|years|experienced)/.test(q)) return kb.experience + '.';
            if (/(skill|skills|technologies|tech)/.test(q)) return `Key skills: ${kb.skills.join(', ')}.`;
            if (/(service|services|offer|what do you do)/.test(q)) return `Services: ${kb.services.join(', ')}.`;
            if (/(ai|machine learning|data science)/.test(q)) return 'I build ML models, data pipelines, analytics dashboards, and integrate AI features into web apps.';
            if (/(contact|email|phone)/.test(q)) return `Email: ${kb.contactEmail}. Phone: ${kb.contactPhone}.`;
            if (/(cv|resume|download)/.test(q)) return `You can download the CV here: ${kb.cvLink}`;
            if (/(portfolio|projects|work)/.test(q)) return 'Projects are showcased in the Projects section.';
            return "I can answer questions about Nessrine's skills, services, experience, contact details, and CV. Try: \"What services do you offer?\" or \"What's your experience with Python?\"";
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;
            addMessage(text, 'user');
            input.value = '';
            const reply = answerQuery(text);
            addBotMessage(reply);
        });

        // keyboard shortcut to open chat: Ctrl+/
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === '/') {
                const visible = panel.style.display === 'flex';
                if (visible) closeChat(); else openChat();
            }
        });

        // start closed
        panel.style.display = 'none';
    });
})();