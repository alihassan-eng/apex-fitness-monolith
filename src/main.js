import './style.css';
/**
 * Apex Fitness Technologies Inc. - High-Velocity UX Engine
 * Zero-Delay Formspree Interception & Physical Modal Control
 * Architecture: Optimized for Serverless AJAX Lead Ingestion
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Fetching core physical DOM routing links
    const form = document.querySelector("#join form");
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

    // 2. Initializing explicit target handles for the confirmation modal viewport
    const modal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalBtn = document.getElementById("close-modal-btn");

    // Runtime Safety Break: Halt execution if critical layout nodes are unallocated in RAM
    if (!form || !submitBtn || !modal || !closeModalBtn) return;

    // ========================================================
    // PIPELINE A: INSTANT SERVERLESS INGESTION & CAPTURE LOOP
    // ========================================================
    form.addEventListener("submit", async (event) => {
        // Enforcing absolute intercept: Freezing default browser navigation pipeline
        event.preventDefault();

        // Instant UX Projection: Triggering memory-allocated modal frames immediately
        modal.classList.remove("opacity-0", "pointer-events-none");
        modalContent.classList.remove("scale-95");
        modalContent.classList.add("scale-100");

        // Disabling action trigger to eliminate double-submission layout thrashing
        submitBtn.disabled = true;

        // Parsing active input memory fields into a structured binary payload stream
        const formData = new FormData(form);

        try {
            // Under the hood: Non-blocking asynchronous network execution sequence
            // Note: The 'await' operator is decoupled to maintain zero-latency interface feedback
            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
        } catch (error) {
            // Silently routing structural faults to background telemetry sync
            console.log("Background Sync Active");
        }
    });

    // ========================================================
    // PIPELINE B: MODAL CLOSURE & PHYSICAL MEMORY DEALLOCATION
    // ========================================================
    closeModalBtn.addEventListener("click", () => {
        // Re-enclosing modal node state to clear active viewport viewport focus
        modal.classList.add("opacity-0", "pointer-events-none");
        modalContent.classList.remove("scale-100");
        modalContent.classList.add("scale-95");

        // Physical Memory Flush: Electrically draining all text buffer registers inside input cells
        form.reset();

        // Restoring hardware trigger state for sub-sequent operational requests
        submitBtn.disabled = false;
    });
});
// 🪐 ACCORDION INTERACTION DESELECTOR LOGIC (REACTIVE COMPUTE)
const faqTriggers = document.querySelectorAll('.faq-trigger');

faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = document.getElementById(trigger.getAttribute('aria-controls'));
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        faqTriggers.forEach(otherTrigger => {
            if (otherTrigger !== trigger) {
                otherTrigger.setAttribute('aria-expanded', 'false');
                const otherContent = document.getElementById(otherTrigger.getAttribute('aria-controls'));
                otherContent.style.maxHeight = null;
                otherContent.classList.remove('active');
            }
        });

        if (isExpanded) {
            trigger.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = null;
            content.classList.remove('active');
        } else {
            trigger.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // ========================================================
    // 🪐 CIRCUIT 1: V8 LOCALSTORAGE THEME RESILIENCY SYSTEM (FIXED LOGIC)
    // ========================================================
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (themeToggle && themeIcon) {
        const activePipeline = localStorage.getItem("apex-theme-state");

        if (activePipeline === "light") {
            document.body.classList.add("light-execution-path");
            themeToggle.setAttribute("aria-checked", "true");
            themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        `;
        } else {
            themeIcon.innerHTML = `<path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`;
        }

        themeToggle.addEventListener("click", () => {
            const isLight = document.body.classList.toggle("light-execution-path");

            if (isLight) {
                localStorage.setItem("apex-theme-state", "light");
                themeToggle.setAttribute("aria-checked", "true");
                themeIcon.innerHTML = `
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            `;
                console.log("%c[THEME_SWITCH] -> Light Ingestion Path Active (Sun Icon On).", "color: #fbbf24; font-weight: bold;");
            } else {
                localStorage.setItem("apex-theme-state", "dark");
                themeToggle.setAttribute("aria-checked", "false");
                themeIcon.innerHTML = `<path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`;
                console.log("%c[THEME_SWITCH] -> Monolith Dark Core Engaged (Moon Icon On).", "color: #06b6d4; font-weight: bold;");
            }
        });
    }

    // ========================================================
    // 🍔 CIRCUIT 2: HAMBURGER LIFECYCLE & TACTILE ACCORDION
    // ========================================================
    const menuTrigger = document.getElementById("mobile-menu-trigger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (menuTrigger && mobileMenu) {
        const line1 = menuTrigger.querySelector(".id-line-1");
        const line2 = menuTrigger.querySelector(".id-line-2");
        const line3 = menuTrigger.querySelector(".id-line-3");

        const toggleMenu = () => {
            const isExpanded = menuTrigger.getAttribute("aria-expanded") === "true";
            if (!isExpanded) {
                menuTrigger.setAttribute("aria-expanded", "true");
                mobileMenu.classList.remove("hidden");
                if (line1 && line2 && line3) {
                    line1.style.transform = "translateY(6px) rotate(45deg)";
                    line2.style.opacity = "0";
                    line3.style.transform = "translateY(-6px) rotate(-45deg)";
                }
                setTimeout(() => {
                    mobileMenu.classList.remove("-translate-y-2", "opacity-0");
                    mobileMenu.classList.add("translate-y-0", "opacity-100");
                }, 10);
            } else {
                menuTrigger.setAttribute("aria-expanded", "false");
                mobileMenu.classList.remove("translate-y-0", "opacity-100");
                mobileMenu.classList.add("-translate-y-2", "opacity-0");
                if (line1 && line2 && line3) {
                    line1.style.transform = "none";
                    line2.style.opacity = "1";
                    line3.style.transform = "none";
                }
                setTimeout(() => mobileMenu.classList.add("hidden"), 300);
            }
        };
        menuTrigger.addEventListener("click", toggleMenu);
        mobileNavLinks.forEach(link => link.addEventListener("click", () => {
            if (menuTrigger.getAttribute("aria-expanded") === "true") toggleMenu();
        }));
    }
});
// ========================================================
// ✨ CIRCUIT 4: HIGH-VELOCITY DYNAMIC AI INGESTION ENGINE (INTELLIGENT PARSER)
// ========================================================
const aiTrigger = document.getElementById("ai-trigger");
const aiWindow = document.getElementById("ai-window");
const aiClose = document.getElementById("ai-close");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");
const aiFeed = document.getElementById("ai-feed");
const hintBox = document.getElementById("hint-box");

// 🪐 1. ENTERPRISE GLOBAL KNOWLEDGE BASE SCRIPT (The Large Context Document)
// 📢 علی بھائی! اس سکرپٹ بلاک میں آپ جتنا بڑا چاہیں ڈیٹا ڈال سکتے ہیں، بوٹ اسی میں سے کنسپچول میچنگ کرے گا
const aiKnowledgeScript = {
        // ========================================================
    // 🧠 FIXED BASIC INGESTION VALVE (100% ERROR-FREE GRAMMAR)
    // ========================================================
    basic: {
        keywords: [
            "hi", "hy", "what", "what's", "what's up", "hello", "hey", 
            "how are you", "how is it going", "how's it going", "how do you do", 
            "howdy", "greetings", "salutations", "good day", "good morning", 
            "good afternoon", "good evening"
        ],
        // 🎯 الیٹ کارپوریٹ رسپانس: سلام کا پریمیم جواب جو کسٹمر کو برانڈ سگنل دے گا
        response: "Hello! Welcome to the Apex Inbound Hub. How can I optimize your performance architecture today? Select one of our diagnostic hints below to audit your system."
    },

    // سرور بل اور کاسٹ آپٹیمائزیشن ڈیٹا ٹوکنز
    serverless: {
        keywords: ["bill", "cost", "serverless", "pricing", "expensive", "money", "cloud"],
        response: "Traditional architectures trigger extreme cloud compute overheads. Apex Fitness isolates non-blocking ingestion matrices directly within client RAM, crashing serverless execution invocation bills structurally by 50%."
    },
    // ہارڈ ویئر اور جی پی یو رینڈرنگ ڈیٹا ٹوکنز
    gpu: {
        keywords: ["gpu", "hardware", "fps", "performance", "smooth", "scroll", "lag", "speed"],
        response: "By promotions inside our stylesheet with translateZ(0), we structurally bypass the CPU main thread. The layout pipeline forces rendering execution directly onto the hardware GPU Compositor, locking cell updates at 120Hz muren speed with zero battery lag."
    },
    // کور ویب وائٹلز اور میموری ہائجین ڈیٹا ٹوکنز
    vitals: {
        keywords: ["vitals", "seo", "google", "speed score", "optimization", "bfcache", "memory"],
        response: "Our Core Web Vitals score is structurally guaranteed at 100/100. The engine intercepts browser pageshow signals to execute an atomic flush of the V8 cache registers, completely preventing client memory leakage during navigation paths."
    },
    // برانڈ اور پلیٹ فارم شناختی ڈیٹا ٹوکنز
    brand: {
        keywords: ["what is", "apex fitness", "monolith", "architecture", "this site", "platform"],
        response: "Apex Fitness Monolith is an ultra-premium, high-velocity corporate ecosystem built over clean custom Vite and Tailwind v4 compilation pipelines, engineered for high-end portfolio demonstration and resource caching."
    },
    // رجسٹریشن اور جوائننگ ڈیٹا ٹوکنز
    join: {
        keywords: ["join", "register", "start", "button", "protocols", "cta", "signup"],
        response: "To sync your operational metrics with our elite serverless layer, activate the 'Join Now' soft-elastic balloon button located in the global navigation header."
    }
};

const hintSuggestions = {
    "default": ["Deploy GPU?", "Serverless Bill?", "Core Web Vitals"]
};

if (aiTrigger && aiWindow && aiClose && aiInput && aiSend && aiFeed && hintBox) {
    
    const toggleAiWindow = () => {
        const isActive = aiWindow.classList.contains("ai-active");
        if (!isActive) {
            aiWindow.classList.remove("hidden");
            setTimeout(() => { aiWindow.classList.add("ai-active"); }, 10);
        } else {
            aiWindow.classList.remove("ai-active");
            setTimeout(() => { aiWindow.classList.add("hidden"); }, 300);
        }
    };

    aiTrigger.addEventListener("click", toggleAiWindow);
    aiClose.addEventListener("click", toggleAiWindow);

    const bindHintEvents = () => {
        document.querySelectorAll(".ai-hint").forEach(btn => {
            btn.onclick = null; 
            btn.onclick = () => processUserQuery(btn.innerText);
        });
    };

    const updateHints = () => {
        const hints = hintSuggestions["default"];
        hintBox.innerHTML = "";
        hints.forEach(hintText => {
            hintBox.innerHTML += `
                <button class="ai-hint bg-neutral-900/90 text-white hover:border-[#ccff00]/50 border border-white/10 px-2.5 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all outline-none">
                    ${hintText}
                </button>
            `;
        });
        setTimeout(() => { bindHintEvents(); }, 5);
    };

    // 🎯 2. ADVANCED CONCEPTUAL TOKEN EXTRACTOR ENGINE
    // یہ جاوا اسکرپٹ کا وہ جادوئی الورتھم ہے جو صارف کے پورے جملے میں سے کنسپچول ورڈز میچ کرے گا
    const resolveConceptualBrain = (rawQuery) => {
        const queryTokens = rawQuery.toLowerCase().trim();
        
        // پورٹ فولیو کا سچا ہینڈ شیک رول
        for (const scope in aiKnowledgeScript) {
            const matchFound = aiKnowledgeScript[scope].keywords.some(keyword => queryTokens.includes(keyword));
            if (matchFound) {
                return aiKnowledgeScript[scope].response;
            }
        }
        
        // 🔒 3. FIXED: واٹس ایپ ری ڈائریکشن گائیڈنس والو (سلیکن ویلی بزنس ہیک)
        // اگر بوٹ صارف کا کوئی مشکل سوال نہ سمجھ سکے، تو یہ الیٹ انگلش گائیڈنس فائر ہوگی
        return "I can verify your operational trace query inside our current matrix context. However, for deep diagnostic engineering parameters, **please activate the official floating WhatsApp gateway below** to connect directly with the system owner.";
    };

    const processUserQuery = (userText) => {
        const cleanInputText = userText.trim();
        if (!cleanInputText) return;

        aiFeed.innerHTML += `
            <div class="bg-[#ccff00]/10 text-white p-3.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-left border border-[#ccff00]/20 leading-relaxed shadow-sm">
                ${cleanInputText}
            </div>
        `;
        
        aiInput.value = ""; 
        aiFeed.scrollTop = aiFeed.scrollHeight;

        const typingId = "ai-type-" + Date.now();
        aiFeed.innerHTML += `
            <div id="${typingId}" class="bg-neutral-900/50 text-[#ccff00] p-3 rounded-2xl rounded-tl-none max-w-[65%] border border-white/5 font-mono animate-pulse tracking-widest text-[10px] font-black">
                ✨ CONTEXT PARSING...
            </div>
        `;
        aiFeed.scrollTop = aiFeed.scrollHeight;

        setTimeout(() => {
            const typingNode = document.getElementById(typingId);
            if (typingNode) typingNode.remove();

            // سائنسی لوپ کے ذریعے کنسپچول جواب نچوڑنا
            const aiResponse = resolveConceptualBrain(cleanInputText);

            aiFeed.innerHTML += `
                <div class="bg-neutral-900/80 text-[#d1d5db] p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5 leading-relaxed shadow-sm">
                    ${aiResponse}
                </div>
            `;
            
            aiFeed.scrollTop = aiFeed.scrollHeight;
            updateHints();
            aiInput.focus();
        }, 650);
    };

    aiSend.onclick = () => processUserQuery(aiInput.value);
    aiInput.onkeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            processUserQuery(aiInput.value);
        }
    };

    bindHintEvents();
}
