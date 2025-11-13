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
    // Project data
    const projectData = {
        project1: {
            title: "TABLE",
            category: "web-3d",
            description: `A 3D table model created in Blender showcasing detailed modeling, UV unwrapping, PBR texturing, and final lighting & rendering. Includes source .blend and a short project report with workflow notes and render settings.`,
            image: "assets/table.png",
            client: "Personal Project",
            date: "2025",
            skills: "Blender, Modeling, Texturing, Lighting, Rendering",
            blenderFile: "assets/table.blend",
            reportFile: "assets/table.pdf"
        },
        project2: {
            title: "Prismatic Light Refraction",
            category: "web-3d",
            description: `
               A 3D Blender project simulating boiling water in a glass container. Created using Principled BSDF, Voronoi textures, and particle systems to animate realistic bubbles, surface movement, and light refraction.         `,
            image: "assets/Boilingwater.png", // Project image
            video: "assets/BoilingWater.mkv",
            client: "Academic Project",
            date: "2025",
            skills: "Blender, Shading, Lighting, Rendering",
            blenderFile: "assets/Boilingwater.blend", // Blender file
            reportFile: "assets/Boilingwater.pdf"       // Report file
        },
        project3: {
            title: "ball",
            category: "web-3d",
            description: `A meticulously crafted 3D ball model created in Blender, featuring intricate modeling, precise UV unwrapping, and realistic PBR texturing. The project showcases final lighting and rendering techniques.`,
            image: "assets/ball.png",
            client: "Personal Project",
            date: "2025",
            skills: "Blender, Modeling, Texturing, Lighting, Rendering",
            blenderFile: "assets/ball.blend",
            reportFile: "assets/ball.pdf"
        },
    };

    // Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal logic
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
    const modalBlenderBtn = document.getElementById('modalBlenderBtn');
    const modalReportBtn = document.getElementById('modalReportBtn');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            const project = projectData[projectId];

            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalCategory.textContent = project.category;
            modalDescription.innerHTML = project.description;
            modalClient.textContent = project.client;
            modalDate.textContent = project.date;
            modalSkills.textContent = project.skills;

            // Assign file links
            modalBlenderBtn.href = project.blenderFile;
            modalReportBtn.href = project.reportFile;

            // Show modal
            projectModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', event => {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
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
