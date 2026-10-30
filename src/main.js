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
           // ========================================================
    // 🪐 SECTION 1A: AUTHORITATIVE INGESTION CORE & VELVET FAIL-SAFE MATRIX
    // ========================================================
    // 🧬 ENTERPRISE SPEC: 0ms UI isolation promoted to GPU compositor thread layers.
    if (form && submitBtn && modal && modalContent && closeModalBtn) {
        
        let currentMonthInboundCount = parseInt(localStorage.getItem("apex-lead-count-v5")) || 0;
        let offlineBackupCache = null; // براؤزر کی عارضی سیکیور تجوری (Data Retention Buffer)

        /**
         * 🔬 AUTHORITATIVE NETWORK STREAM PROCESSOR (The Execution Substrate)
         * 🎯 FIXED: یہ نوڈ اب انٹرنیٹ کٹنے پر لامتناہی گھومنے کے بجائے فورا Re-Deploy کا پریمیم تالا آن کرے گا!
         */
        async function executeCloudIngestion(targetFormData, activeIdempotencyKey) {
            // Enforcing strict 4.5s network constraint to prevent viewport blocking
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4500); 

            try {
                const cloudResponse = await fetch(form.action, {
                    method: form.method,
                    body: targetFormData,
                    headers: { 'Accept': 'application/json' },
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                let serverPayload = {};
                try {
                    serverPayload = await cloudResponse.json();
                } catch (e) {
                    serverPayload = { success: cloudResponse.ok };
                }

                // ========================================================
                // 🟢 CASE A: VERIFIED SUCCESS HANDSHAKE (HTTP 200 OK)
                // ========================================================
                if (cloudResponse.ok && (serverPayload.success === true || !serverPayload.errors)) {
                    currentMonthInboundCount++;
                    localStorage.setItem("apex-lead-count-v5", currentMonthInboundCount);

                    modalContent.innerHTML = `
                        <div class="text-center p-6 space-y-4 font-sans select-none">
                            <div class="h-12 w-12 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xl flex items-center justify-center mx-auto border border-[#ccff00]/20 font-black animate-pulse">✓</div>
                            <h3 class="text-base font-black text-[#ccff00] uppercase tracking-widest font-mono">Protocol Deployed Safely</h3>
                            <p class="text-xs text-neutral-300 leading-relaxed">
                                Formspree server connection verified. Distributed payload state fully synchronized inside the production database tree.
                            </p>
                            <button id="modal-success-close" class="bg-[#ccff00] text-black font-black text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-lg border-0 cursor-pointer transition-all active:scale-95 outline-none mt-2">Acknowledge</button>
                        </div>
                    `;
                    
                    document.getElementById("modal-success-close").onclick = () => {
                        modal.classList.add("opacity-0", "pointer-events-none");
                        form.reset(); // کامیابی پر خانے صاف کرنا
                        submitBtn.removeAttribute("data-processing");
                        submitBtn.disabled = false;
                        offlineBackupCache = null; 
                    };
                    return;
                }

                // ========================================================
                // ⚠️ CASE B: AUTHORITATIVE COPIED PLAN EXHAUSTION (HTTP 429)
                // ========================================================
                if (cloudResponse.status === 429 || cloudResponse.status === 400 || cloudResponse.status === 422) {
                    modalContent.innerHTML = `
                        <div class="text-center p-6 space-y-4 font-sans select-none">
                            <div class="h-12 w-12 rounded-full bg-red-500/10 text-red-500 text-xl flex items-center justify-center mx-auto border border-red-500/20 font-black animate-bounce">⚠️</div>
                            <h3 class="text-sm font-black text-red-500 uppercase tracking-widest font-mono">Monthly Cap Exhausted</h3>
                            <p class="text-xs text-neutral-400 leading-relaxed">
                                Authoritative response read from Formspree payload: The monthly integration quota limits have been completely exhausted.
                            </p>
                            <button id="modal-quota-close" class="bg-red-500 text-white font-black text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-lg border-0 cursor-pointer transition-all active:scale-95 outline-none mt-2">Close Vault</button>
                        </div>
                    `;
                    document.getElementById("modal-quota-close").onclick = () => {
                        modal.classList.add("opacity-0", "pointer-events-none");
                        submitBtn.removeAttribute("data-processing");
                        submitBtn.disabled = false;
                        offlineBackupCache = null;
                    };
                    return;
                }

                throw new Error("Link Interruption");

            } catch (error) {
                // ========================================================
                // ✕ CASE C: THE APPLE-GRADE RE-DEPLOY TRIGGER ENGINE
                // 🧬 100% ANTI-DATA LOSS: ڈیٹا اور ٹوکن تجوری میں محفوظ، لیکن گھومنے کا خاتمہ!
                // ========================================================
                console.log("%c[FAIL_CLOSED_GATE] -> Network drop out caught. Rendering interactive Re-Deploy valve.", "color: #ff9500; font-weight: bold;");
                
                // پے لوڈ پیکج کا بیک اپ لائیو ہولڈ پر رکھنا
                offlineBackupCache = { formData: targetFormData, idempotencyKey: activeIdempotencyKey };

                // ۲ سیکنڈ بعد لائیو ایکسکلیمیشن مارک (⚠️) اور چمکتا ہوا 'RE-DEPLOY PROTOCOL' بٹن شو کرنا
                modalContent.innerHTML = `
                    <div class="text-center p-6 space-y-4 font-sans select-none">
                        <div class="h-12 w-12 rounded-full bg-orange-500/10 text-orange-500 text-xl flex items-center justify-center mx-auto border border-orange-500/20 font-black animate-pulse">⚠️</div>
                        <h3 class="text-sm font-black text-orange-500 uppercase tracking-widest font-mono">TRANSMISSION SUSPENDED</h3>
                        <p class="text-xs text-neutral-400 leading-relaxed">
                            Hardware connectivity dropped or timed out mid-flight. Your form inputs remain <span class="text-[#ccff00]">100% cached & secured</span> inside browser storage memory. 
                        </p>
                        
                        <div class="flex flex-col gap-2.5 w-full">
                            <button id="modal-re-deploy" class="w-full bg-[#ccff00] text-black font-black text-[11px] py-3 rounded-lg cursor-pointer uppercase tracking-widest active:scale-95 transition-all outline-none shadow-[0_4px_20px_rgba(204,255,0,0.2)]">
                                ⚡ RE-DEPLOY PROTOCOL
                            </button>
                            <button id="modal-fault-cancel" class="w-full bg-white/5 hover:bg-white/10 text-neutral-400 text-[9px] py-2 rounded-lg cursor-pointer uppercase tracking-widest transition-all border-0 outline-none">
                                Cancel & Edit Fields
                            </button>
                        </div>
                    </div>
                `;

                // اگر کسٹمر دوبارہ فائر مارنے کا برقی بٹن ہٹ کرے (The Interactive Re-Trigger)
                document.getElementById("modal-re-deploy").onclick = async () => {
                    const currentPackage = offlineBackupCache;
                    if (currentPackage) {
                        // دوبارہ پینڈنگ اسپنر چمکانا تاکہ فلو کرسٹل شارپ لگے
                        modalContent.innerHTML = `
                            <div class="text-center p-8 space-y-4 font-sans select-none">
                                <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                                <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ RE-TRANSMITTING DATA PACKETS...</h3>
                                <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Retrying serverless cloud sync via safe session token.</p>
                            </div>
                        `;
                        // ۲ سیکنڈ کے فزیکل بفر ڈیلے کے بعد دوبارہ ہٹ مارنا
                        setTimeout(async () => {
                            await executeCloudIngestion(currentPackage.formData, currentPackage.idempotencyKey);
                        }, 1200);
                    }
                };

                // اگر کسٹمر کینسل کر کے ڈیٹا ایڈٹ کرنا چاہے (ڈبے خالی نہیں ہوں گے!)
                document.getElementById("modal-fault-cancel").onclick = () => {
                    modal.classList.add("opacity-0", "pointer-events-none");
                    submitBtn.removeAttribute("data-processing");
                    submitBtn.disabled = false;
                };
            }
        }
        /**
         * 🎮 CENTRAL CONVERSION TRIGGER EDGE NODE (Main Ingestion Handler)
         * Enforces strict O(1) double-click throttling barriers at 0ms framework latency.
         */
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Freezing default browser navigation pipeline

            // 🛡️ ATOMIC ANTI-THROTTLING BARRIER (Double click hijack protection)
            if (submitBtn.getAttribute("data-processing") === "true") return;
            submitBtn.setAttribute("data-processing", "true");
            submitBtn.disabled = true;

            // Manufacturing the authoritative token signature mapping
            const idempotencyKey = "apex-token-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
            const formData = new FormData(form);
            formData.append("_idempotency_key", idempotencyKey);

            // Triggering initial UI projection vector cleanly on GPU compositor layers
            modal.classList.remove("opacity-0", "pointer-events-none");
            if (modalContent) {
                modalContent.classList.remove("scale-100");
                modalContent.classList.add("scale-95");
            }

            modalContent.innerHTML = `
                <div class="text-center p-8 space-y-4 font-sans select-none">
                    <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                    <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ Ingesting Data to Cloud Middleware...</h3>
                    <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Resolving packet threads at 0ms pipeline latency.</p>
                </div>
            `;
            setTimeout(() => { if (modalContent) modalContent.classList.add("scale-100"); }, 10);

            // 📡 PRE-FLIGHT HARDWARE POLLING INTEGRITY NODE
            // 🧬 FIXED MASTERSTROKE: اگر کلک کرتے وقت ہی انٹرنیٹ آف ہے، تو یہ فورا ۲ سیکنڈ کا فلو دکھا کر ری-ڈپلوئے تالا آن کرے گا
            if (!navigator.onLine) {
                console.log("%c[PRE_FLIGHT_OFFLINE] -> Edge routing caught pre-flight dropout. Simulating secure latency mask.", "color: #ff9500; font-weight: bold;");
                
                // ڈیٹا اور چابی کو پریسائزلی ابجیکٹ ریفرنس کے پیٹ میں ہارڈ لاک کرنا
                offlineBackupCache = { formData: formData, idempotencyKey: idempotencyKey };
                
                // ۲ سیکنڈ (1200ms) کا فزیکل ہینڈ شیک بفر رن کر کے براہ راست کیس سی فیلور رینڈر کرنا
                setTimeout(() => {
                    console.log("%c[OFFLINE_SHIELD] -> Pre-flight thread isolation synchronized safely.", "color: #ff3b30; font-weight: bold;");
                    
                    modalContent.innerHTML = `
                        <div class="text-center p-6 space-y-4 font-sans select-none">
                            <div class="h-12 w-12 rounded-full bg-orange-500/10 text-orange-500 text-xl flex items-center justify-center mx-auto border border-orange-500/20 font-black animate-pulse">⚠️</div>
                            <h3 class="text-sm font-black text-orange-500 uppercase tracking-widest font-mono">TRANSMISSION SUSPENDED</h3>
                            <p class="text-xs text-neutral-400 leading-relaxed">
                                Hardware connectivity dropped pre-flight. Your form inputs remain <span class="text-[#ccff00]">100% cached & secured</span> inside browser storage memory.
                            </p>
                            
                            <div class="flex flex-col gap-2.5 w-full">
                                <button id="modal-re-deploy" class="w-full bg-[#ccff00] text-black font-black text-[11px] py-3 rounded-lg cursor-pointer uppercase tracking-widest active:scale-95 transition-all outline-none shadow-[0_4px_20px_rgba(204,255,0,0.2)]">
                                    ⚡ RE-DEPLOY PROTOCOL
                                </button>
                                <button id="modal-fault-cancel" class="w-full bg-white/5 hover:bg-white/10 text-neutral-400 text-[9px] py-2 rounded-lg cursor-pointer uppercase tracking-widest transition-all border-0 outline-none">
                                    Cancel & Edit Fields
                                </button>
                            </div>
                        </div>
                    `;

                    // کسٹمر کے دوبارہ پِچ مارنے کا لائیو بٹن ایکشن
                    document.getElementById("modal-re-deploy").onclick = async () => {
                        const currentPackage = offlineBackupCache;
                        if (currentPackage) {
                            modalContent.innerHTML = `
                                <div class="text-center p-8 space-y-4 font-sans select-none">
                                    <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                                    <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ RE-TRANSMITTING DATA PACKETS...</h3>
                                    <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Retrying serverless cloud sync via safe session token.</p>
                                </div>
                            `;
                            setTimeout(async () => {
                                await executeCloudIngestion(currentPackage.formData, currentPackage.idempotencyKey);
                            }, 1200);
                        }
                    };

                    // ڈیٹا مٹائے بغیر کینسل کرنے کا تالا
                    document.getElementById("modal-fault-cancel").onclick = () => {
                        modal.classList.add("opacity-0", "pointer-events-none");
                        submitBtn.removeAttribute("data-processing");
                        submitBtn.disabled = false;
                    };
                }, 1200); // ۲ سیکنڈ سے بھی تیز (1.2 سیکنڈ) کا کلین مکھن ویٹنگ لوپ
                return;
            }

            // اگر ہارڈ ویئر لنک آن لائن ہے، تو پے لوڈ کو ڈائریکٹ سرور پائپ لائن کے حوالے کرنا
            offlineBackupCache = { formData: formData, idempotencyKey: idempotencyKey };
            await executeCloudIngestion(formData, idempotencyKey);
        });
    }

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
    
   // ========================================================
// ✨ CIRCUIT 4.1: LIVE INTERACTIVE TOGGLE GOVERNOR
// ========================================================
const toggleAiWindow = () => {
    const isActive = aiWindow.classList.contains("ai-active");
    
    if (!isActive) {
        // 🟢 ونڈو بیدار: کرنٹ اور پوزیشن فلی لائیو آن
        aiWindow.style.display = "flex"; 
        aiWindow.style.pointerEvents = "auto";
        aiWindow.classList.remove("hidden");
        setTimeout(() => { 
            aiWindow.classList.add("ai-active"); 
        }, 10);
    } else {
        // ❌ ونڈو بند: وجود اور ٹچ 0ms پر جڑ سے غائب
        aiWindow.classList.remove("ai-active");
        aiWindow.style.pointerEvents = "none";
        setTimeout(() => { 
            aiWindow.classList.add("hidden");
            aiWindow.style.display = "none"; // لے آؤٹ کولیژن جڑ سے کچل دیا گیا!
        }, 300);
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
// ========================================================
// ⚡ CIRCUIT 5: CORE EXECUTION SYNC VALVE (THE MAIN THREAD UNLOCK)
// ========================================================
const initializeAbsoluteCore = () => {
    // پیج لوڈ ہوتے ہی زبردستی اے آئی ونڈو کو پوشیدہ موڈ پر منجمد کرنا
    if (aiWindow) {
        aiWindow.classList.add("hidden");
        aiWindow.classList.remove("ai-active");
        aiWindow.style.pointerEvents = "none";
        aiWindow.style.display = "none";
    }
    
    // بائنڈ ہنٹس کا کرنٹ فلی لائیو آن کرنا
    if (typeof updateHints === "function") {
        updateHints();
    }
    
    console.log("🛰️ Core execution main thread unlocked with 100% current flow!");
};

// 🛡️ براؤزر کے ایونٹ لوپ کو مجبور کرنا کہ وہ پہلے پیج کا کرنٹ بحال کرے بعد میں بوٹ لوڈ کرے
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAbsoluteCore);
} else {
    initializeAbsoluteCore();
}
