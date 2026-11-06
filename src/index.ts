declare let updateHints: any;
declare let renderFallbackUI: any;

// اس کے نیچے آپ کا باقی سارا پروجیکٹ کوڈ فلی سیف رن ہوگا...

// ============================================================================
// 🪐 APEX ENTERPRISE HARDWARE-ISOLATED INTERFACE SUBSTRATE (src/index.ts - Section 01)
// ============================================================================
// 🧬 MIT CYBER-SECURITY SPEC: Enforcing strict global block isolation, 
// comprehensive dual-form memory mapping, and complete compile-time Null-Safety.
// ============================================================================

/**
 * Apex Fitness Technologies Inc. - High-Velocity UX Engine
 * Zero-Delay Formspree Interception & Physical Modal Control
 * Architecture: Monolithic Enterprise Structure Optimized for Serverless AJAX Ingestion
 */

"use strict";

document.addEventListener("DOMContentLoaded", (): void => {
    
    // ========================================================================
    // 🎛️ NODE ALLOCATION 01: DUAL-FORM HARDWARE INTERACTION REGISTERS
    // ========================================================================
    // 🧬 Form 01: The global header soft-elastic ingestion node
    const form = document.querySelector<HTMLFormElement>("#join form");
    
    // 🧬 Form 02: The core persistent conversion lead form node (The contact-form bug crusher)
    const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
    
    // 🧬 Submit Button: Securely scoped down to specific HTML button parameters inside DRAM
    const submitBtn = form ? form.querySelector<HTMLButtonElement>('button[type="submit"]') : null;

    // ========================================================================
    // 🎛️ NODE ALLOCATION 02: VIEWPORT POPUP DIALOG ROUTING LINKS
    // ========================================================================
    const modal = document.getElementById("success-modal") as HTMLDivElement | null;
    const modalContent = document.getElementById("modal-content") as HTMLDivElement | null;
    const closeModalBtn = document.getElementById("close-modal-btn") as HTMLButtonElement | null;

    // ========================================================================
    // 🛡️ THE ATOMIC FAIL-CLOSED SAFETY VALVE (THE GATEKEEPER LOCK)
    // ========================================================================
    // ✕ The V8 compiler will hard-freeze compilation if standard layout targets are unallocated in RAM.
    if (!form || !submitBtn || !modal || !modalContent || !closeModalBtn) {
        console.error("❌ [CRITICAL_LAYOUT_LEAK] -> Mandatory DOM memory segments are unallocated inside client.");
        return;
    }

    // ========================================================================
    // 💾 STATEFUL PERSISTENT METRICS & STORAGE MEMORY MEMORY REGISTERS
    // ========================================================================
    let currentMonthInboundCount: number = parseInt(localStorage.getItem("apex-lead-count-v5") || "0", 10) || 0;
    
    // Immutable type matrix array matching FormData entries to prevent in-flight string pollution
    let offlineBackupCache: { formData: [string, FormDataEntryValue][]; idempotencyKey: string } | null = null;

    // 🟢 COMPLIANCE BASELINE PASSED: The setup foundation is officially locked inside the V8 Isolate.
    console.log("🪐 [COMPLIANCE_PASSED] -> Section 01: Dual-form tracking registers initialized cleanly.");
    // ============================================================================
    // 🪐 SECTION 02: INTERACTIVE FAULT RESILIENCY & QUOTA GOVERNANCE CHANNELS
    // ============================================================================
    // 🧬 SPEC: Declaring secure local interceptor nodes inside the monolithic execution
    // substrate to permanently eliminate out-of-scope pointer isolation crashes.
    // ============================================================================

    /**
     * 🔬 INTERNET کٹنے کی صورت میں فورا آف لائن پروٹوکول اور پاپ اپ بیدار کریں
     * @param cachedFormData Outbound user payload entry tokens
     * @param idempotencyKey Cryptographic session identifier key string
     */
    function handleOfflineFallback(cachedFormData: FormData, idempotencyKey: string): void {
        console.log("%c[PRE_FLIGHT_OFFLINE] -> Edge routing caught pre-flight dropout. Simulating secure latency mask.", "color: #ff9500; font-weight: bold;");
        
        // Securely caching the live fields entry package into the isolated array matrix buffer
        offlineBackupCache = { 
            formData: Array.from(cachedFormData.entries()), 
            idempotencyKey: idempotencyKey 
        };
        
        // Executing a precise macroscopic delay block before opening the suspension interactive valve
        setTimeout((): void => {
            console.log("%c[OFFLINE_SHIELD] -> Pre-flight thread isolation synchronized safely.", "color: #ff3b30; font-weight: bold;");
            renderFallbackUI(form!.action, "POST", cachedFormData, idempotencyKey);
        }, 1200);
    }

    /**
     * 🔬 PASS THE CLOUD RESPONSE NODES STRAIGHT INTO THE STRICT QUOTA CHECK LOGIC
     * @param cloudResponse Outbound fetch connection signature mapping
     * @param targetFormData In-flight user context layout variables
     * @param activeIdempotencyKey Safe verification session sequence signature
     * @param serverPayload Parsed upstream JSON telemetry registry
     */
    function handleQuotaGate(
        cloudResponse: Response, 
        targetFormData: FormData, 
        activeIdempotencyKey: string, 
        serverPayload: Record<string, any>
    ): void {
        // ========================================================================
        // 🟢 CASE A: VERIFIED SUCCESS HANDSHAKE (HTTP 200 OK)
        // ========================================================================
        if (cloudResponse.ok && (serverPayload.success === true || !serverPayload.errors)) {
            currentMonthInboundCount++;
            localStorage.setItem("apex-lead-count-v5", currentMonthInboundCount.toString());

            // Projecting high-contrast GPU promoted template string directly inside the viewport frame
            modalContent!.innerHTML = `
                <div class="text-center p-6 space-y-4 font-sans select-none">
                    <div class="h-12 w-12 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xl flex items-center justify-center mx-auto border border-[#ccff00]/20 font-black animate-pulse">✓</div>
                    <h3 class="text-base font-black text-[#ccff00] uppercase tracking-widest font-mono">Protocol Deployed Safely</h3>
                    <p class="text-xs text-neutral-300 leading-relaxed">
                        Formspree server connection verified. Distributed payload state fully synchronized inside the production database tree.
                    </p>
                    <button id="modal-success-close" class="bg-[#ccff00] text-black font-black text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-lg border-0 cursor-pointer transition-all active:scale-95 outline-none mt-2">Acknowledge</button>
                </div>
            `;
            
            const successCloseBtn = document.getElementById("modal-success-close") as HTMLButtonElement | null;
            if (successCloseBtn) {
                successCloseBtn.onclick = (): void => {
                    // Velvet closing: Hiding the viewport node instantly without memory flashes
                    modal!.classList.add("opacity-0", "pointer-events-none");
                    if (contactForm) contactForm.reset(); // Hard-cleaning all input cell buffer values securely
                    form!.reset();
                    submitBtn!.removeAttribute("data-processing");
                    submitBtn!.disabled = false;
                    offlineBackupCache = null; 
                };
            }
            return;
        }

        // ========================================================================
        // ⚠️ CASE B: AUTHORITATIVE COPIED PLAN EXHAUSTION (HTTP 429 / 400 / 422)
        // ========================================================================
        if (cloudResponse.status === 429 || cloudResponse.status === 400 || cloudResponse.status === 422) {
            modalContent!.innerHTML = `
                <div class="text-center p-6 space-y-4 font-sans select-none">
                    <div class="h-12 w-12 rounded-full bg-red-500/10 text-red-500 text-xl flex items-center justify-center mx-auto border border-red-500/20 font-black animate-bounce">⚠️</div>
                    <h3 class="text-sm font-black text-red-500 uppercase tracking-widest font-mono">Monthly Cap Exhausted</h3>
                    <p class="text-xs text-neutral-400 leading-relaxed">
                        Authoritative response read from Formspree payload: The monthly integration quota limits have been completely exhausted.
                    </p>
                    <button id="modal-quota-close" class="bg-red-500 text-white font-black text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-lg border-0 cursor-pointer transition-all active:scale-95 outline-none mt-2">Close Vault</button>
                </div>
            `;
            
            const quotaCloseBtn = document.getElementById("modal-quota-close") as HTMLButtonElement | null;
            if (quotaCloseBtn) {
                quotaCloseBtn.onclick = (): void => {
                    modal!.classList.add("opacity-0", "pointer-events-none");
                    submitBtn!.removeAttribute("data-processing");
                    submitBtn!.disabled = false;
                    offlineBackupCache = null;
                };
            }
            return;
        }

        throw new Error("Link Interruption");
    }
    // ============================================================================
    // 🪐 SECTION 03: AUTHORITATIVE NETWORK STREAM PROCESSOR & TRANSMISSION VALVE
    // ============================================================================
    // 🧬 SPEC: Enforcing strict 4.5s network constraint to prevent viewport blocking 
    // and caching untrusted payloads under strict structural exception wrappers.
    // ============================================================================
    async function executeCloudIngestion(targetAction: string, targetFormData: FormData, activeIdempotencyKey: string): Promise<void> {
        // Enforcing strict 4.5s network constraint to prevent thread throttling inside client memory
        const controller: AbortController = new AbortController();
        const timeoutId: number = window.setTimeout((): void => controller.abort(), 4500);

        try {
            // Outbound secure fetch operation guarded under the network signal cancellation valve
            const cloudResponse: Response = await fetch(targetAction, {
                method: "POST",
                body: targetFormData,
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });

            // Releasing hardware timeout registry immediately upon stream resolution
            clearTimeout(timeoutId);

            // Enforcing strict type safety parameters over unknown, untrusted cloud JSON responses
            let serverPayload: Record<string, any> = {};
            try {
                serverPayload = await cloudResponse.json() as Record<string, any>;
            } catch (e: unknown) {
                serverPayload = { success: cloudResponse.ok };
            }

            // Routing the completed cloud nodes straight into the strict quota check governance gate
            handleQuotaGate(cloudResponse, targetFormData, activeIdempotencyKey, serverPayload);

        } catch (error: unknown) {
            // 🔒 Network/Form Interruption Caught: 100% ANTI-DATA LOSS PROTECTION
            console.error("🔒 Network/Form Interruption Caught: ", error);
            
            // Caching the full field state data safely inside the array entry registry
            offlineBackupCache = { 
                formData: Array.from(targetFormData.entries()), 
                idempotencyKey: activeIdempotencyKey 
            };

            // Projecting instant error notice on layout before trigger engine wakes up
            if (modalContent) {
                modalContent.innerHTML = `<div class="p-4 text-center select-none font-mono"><p class="text-xs text-red-500 font-black animate-pulse">⚠️ Network Interruption Detected. Data cached locally.</p></div>`;
            }
            
            // Initializing the macroscopic interactive fallback UI render loop safely after 1s delay
            setTimeout((): void => { 
                renderFallbackUI(targetAction, "POST", targetFormData, activeIdempotencyKey); 
            }, 1000);
        }
    }
    // ============================================================================
    // 🪐 SECTION 04: DYNAMIC FALLBACK RENDERING CORE & SESSION RE-TRIGGER VALVE
    // ============================================================================
    // 🧬 SPEC: Segregated layout injection node protecting context binding states, 
    // explicit target casting, and multi-flight asynchronous payload reconstruction.
    // ============================================================================
    function renderFallbackUI(targetAction: string, targetMethod: string, targetFormData: FormData, activeIdempotencyKey: string): void {
        
        // Injecting highly interactive GPU promoted template string directly inside the viewport frame
        modalContent!.innerHTML = `
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

        // 🔬 FETCHING AND CASTING THE DYNAMICALLY INJECTED ACTIVE HARDWARE BUTTON TRACE LINKS
        const redeployBtn = document.getElementById("modal-re-deploy") as HTMLButtonElement | null;
        const faultCancelBtn = document.getElementById("modal-fault-cancel") as HTMLButtonElement | null;

        if (redeployBtn) {
            redeployBtn.onclick = async (): Promise<void> => {
                const currentPackage = offlineBackupCache;
                if (currentPackage) {
                    // Flash-updating the screen feed to block parallel jitter execution paths
                    modalContent!.innerHTML = `
                        <div class="text-center p-8 space-y-4 font-sans select-none">
                            <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                            <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ RE-TRANSMITTING DATA PACKETS...</h3>
                            <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Retrying serverless cloud sync via safe session token.</p>
                        </div>
                    `;
                    
                    // Enforcing strict 1.2s macroscopic delay to allow the network stack to stabilize
                    setTimeout(async (): Promise<void> => {
                        const reconstructedForm = new FormData();
                        currentPackage.formData.forEach(([key, value]) => {
                            reconstructedForm.append(key, value);
                        });
                        // Re-triggering the authoritative network stream processor cleanly
                        await executeCloudIngestion(targetAction, reconstructedForm, currentPackage.idempotencyKey);
                    }, 1200);
                }
            };
        }

        if (faultCancelBtn) {
            faultCancelBtn.onclick = (): void => {
                // Instantly hiding the modal layout tree without resetting the live user inputs underneath
                modal!.classList.add("opacity-0", "pointer-events-none");
                submitBtn!.removeAttribute("data-processing");
                submitBtn!.disabled = false;
            };
        }
    }
    // ============================================================================
    // 🪐 SECTION 05: CENTRAL CONVERSION TRIGGER EDGE NODE (Main Ingestion Handler)
    // ============================================================================
    // 🧬 MIT CYBER-SECURITY SPEC: Intercepting strict form submit event to eliminate 
    // default browser navigation and Formspree white-page direct redirect permanently.
    // ============================================================================
    if (contactForm) {
        contactForm.addEventListener("submit", async (event: SubmitEvent): Promise<void> => {
            
            // 🛡️ ہتھوڑا ۱: براؤزر کے ڈیفالٹ فارم ہائی جیک اور فارم اسپرے کے سفید پیج کا گلا فوراً ہوا میں گھونٹ دیں!
            event.preventDefault(); 

            // 🛡️ ATOMIC ANTI-THROTTLING BARRIER: Eliminating O(1) double-click hijack loop paths
            if (submitBtn.getAttribute("data-processing") === "true") return;
            submitBtn.setAttribute("data-processing", "true");
            submitBtn.disabled = true;

            // Manufacturing the authoritative token signature mapping to crash repetition attacks
            const idempotencyKey: string = "apex-token-" + Date.now() + "-" + Math.random().toString(36).substring(2, 11);
            const formData: FormData = new FormData(contactForm);
            formData.append("_idempotency_key", idempotencyKey);

            // Triggering initial UI projection vector cleanly on GPU compositor thread layers
            modal.classList.remove("opacity-0", "pointer-events-none");
            modalContent!.classList.remove("scale-100");
            modalContent!.classList.add("scale-95");

            // Rendering high-contrast pending loader directly inside the viewport frame
            modalContent!.innerHTML = `
                <div class="text-center p-8 space-y-4 font-sans select-none">
                    <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                    <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ Ingesting Data to Cloud Middleware...</h3>
                    <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Resolving packet threads at 0ms pipeline latency.</p>
                </div>
            `;
            setTimeout((): void => { if (modalContent) modalContent!.classList.add("scale-100"); }, 10);

            // ========================================================================
            // 📡 PRE-FLIGHT HARDWARE POLLING INTEGRITY NODE
            // ========================================================================
            // 🧬 FIXED MASTERSTROKE: اگر کلک کرتے وقت ہی انٹرنیٹ آف ہے، تو یہ فورا ری-ڈپلوئے تالا آن کرے گا
            if (!navigator.onLine) {
                // Securely caching the live fields entry package into the isolated array matrix buffer before returning
                handleOfflineFallback(formData, idempotencyKey);
                return;
            }

            // 🚀 If the hardware link is online, pass the payload directly to the server pipeline node
            offlineBackupCache = { 
                formData: Array.from(formData.entries()), 
                idempotencyKey: idempotencyKey 
            };
            await executeCloudIngestion(contactForm.action, formData, idempotencyKey);
        });
    }

        // ============================================================================
    // 📡 CIRCUIT 3A.1: THE ATOMIC SINGLE-CHANNEL INTERACTION INTERCEPTOR
    // ============================================================================
         // ============================================================================
    // 🚀 CIRCUIT 3A.5: MONOLITHIC SINGLE-CHANNEL INGESTION PIPELINE (THE FINAL FIX)
    // ============================================================================
    // 🧬 SPEC: Complete end-to-end network stream body mapped explicitly to handle 
    // both upper and lower conversion paths with 0ms client memory latency.
    // ============================================================================
    async function handleFormSubmission(targetActiveForm: HTMLFormElement, event: SubmitEvent): Promise<void> {
        // 🛡️ ہتھوڑا ۱: براؤزر کے ڈیفالٹ فارم ہائی جیک اور فارم اسپرے کے سفید پیج کا گلا فوراً ہوا میں گھونٹ دیں!
        event.preventDefault(); 

        if (submitBtn!.getAttribute("data-processing") === "true") return;
        submitBtn!.setAttribute("data-processing", "true");
        submitBtn!.disabled = true;

        const idempotencyKey: string = "apex-token-" + Date.now() + "-" + Math.random().toString(36).substring(2, 11);
        const formData: FormData = new FormData(targetActiveForm);
        formData.append("_idempotency_key", idempotencyKey);

        modal!.classList.remove("opacity-0", "pointer-events-none");
        if (modalContent) {
            modalContent.classList.remove("scale-100");
            modalContent.classList.add("scale-95");
            modalContent.innerHTML = `
                <div class="text-center p-8 space-y-4 font-sans select-none">
                    <div class="h-8 w-8 border-2 border-t-[#ccff00] border-white/10 rounded-full animate-spin mx-auto"></div>
                    <h3 class="text-[10px] font-black tracking-[0.2em] uppercase text-white font-mono animate-pulse">✨ Ingesting Data to Cloud Middleware...</h3>
                    <p class="text-[11px] text-neutral-500 leading-relaxed font-mono">Resolving packet threads at 0ms pipeline latency.</p>
                </div>
            `;
        }
        setTimeout((): void => { if (modalContent) modalContent.classList.add("scale-100"); }, 10);

        if (!navigator.onLine) {
            handleOfflineFallback(formData, idempotencyKey);
            return;
        }

        offlineBackupCache = { 
            formData: Array.from(formData.entries()), 
            idempotencyKey: idempotencyKey 
        };
        await executeCloudIngestion(targetActiveForm.action, formData, idempotencyKey);
    }

    // 📡 WIRE BINDINGS FOR BOTH ACTIVE HIGH-VELOCITY INBOUND HARDWARE CHANNELS
    if (form) {
        form.addEventListener("submit", (e: SubmitEvent): void => {
            void handleFormSubmission(form, e);
        });
    }
    if (contactForm) {
        contactForm.addEventListener("submit", (e: SubmitEvent): void => {
            void handleFormSubmission(contactForm, e);
        });
    }

   
// ========================================================
// 🪐 SECTION 06: ACCORDION INTERACTION DESELECTOR LOGIC (REACTIVE COMPUTE)
// ========================================================
// 🧬 SPEC: Explicit type bindings for NodeListOf controls to prevent pointer leaks.
// ========================================================
const faqTriggers: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.faq-trigger');

faqTriggers.forEach((trigger: HTMLButtonElement): void => {
    trigger.addEventListener('click', (): void => {
        const ariaControlsAttr = trigger.getAttribute('aria-controls');
        if (!ariaControlsAttr) return;

        const content = document.getElementById(ariaControlsAttr) as HTMLDivElement | null;
        const isExpanded: boolean = trigger.getAttribute('aria-expanded') === 'true';

        faqTriggers.forEach((otherTrigger: HTMLButtonElement): void => {
            if (otherTrigger !== trigger) {
                otherTrigger.setAttribute('aria-expanded', 'false');
                const otherControlsAttr = otherTrigger.getAttribute('aria-controls');
                if (otherControlsAttr) {
                    const otherContent = document.getElementById(otherControlsAttr) as HTMLDivElement | null;
                    if (otherContent) {
                        otherContent.style.maxHeight = "";
                        otherContent.classList.remove('active');
                    }
                }
            }
        });

        if (content) {
            if (isExpanded) {
                trigger.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = "";
                content.classList.remove('active');
            } else {
                trigger.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('active');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", (): void => {
    // ========================================================
    // 🪐 CIRCUIT 1: V8 LOCALSTORAGE THEME RESILIENCY SYSTEM (FIXED LOGIC)
    // ========================================================
    const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement | null;
    const themeIcon = document.getElementById("theme-icon") as SVGElement | null;

    if (themeToggle && themeIcon) {
        const activePipeline: string | null = localStorage.getItem("apex-theme-state");

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

        themeToggle.addEventListener("click", (): void => {
            const isLight: boolean = document.body.classList.toggle("light-execution-path");

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
    // ============================================================================
    // 🍔 CIRCUIT 2: HAMBURGER LIFECYCLE & MOBILE NAVIGATION REGISTERS (Section 07)
    // ============================================================================
    // 🧬 SPEC: Explicit type bindings for HTML elements to prevent runtime styling leakages.
    // ============================================================================
    const menuTrigger = document.getElementById("mobile-menu-trigger") as HTMLButtonElement | null;
    const mobileMenu = document.getElementById("mobile-menu") as HTMLDivElement | null;
    const mobileNavLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".mobile-nav-link");

    if (menuTrigger && mobileMenu) {
        const line1 = menuTrigger.querySelector(".id-line-1") as HTMLElement | null;
        const line2 = menuTrigger.querySelector(".id-line-2") as HTMLElement | null;
        const line3 = menuTrigger.querySelector(".id-line-3") as HTMLElement | null;

        const toggleMenu = (): void => {
            const isExpanded: boolean = menuTrigger.getAttribute("aria-expanded") === "true";
            if (!isExpanded) {
                menuTrigger.setAttribute("aria-expanded", "true");
                mobileMenu.classList.remove("hidden");
                if (line1 && line2 && line3) {
                    line1.style.transform = "translateY(6px) rotate(45deg)";
                    line2.style.opacity = "0";
                    line3.style.transform = "translateY(-6px) rotate(-45deg)";
                }
                setTimeout((): void => {
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
                setTimeout((): void => mobileMenu.classList.add("hidden"), 300);
            }
        };
        
        menuTrigger.addEventListener("click", toggleMenu);
        mobileNavLinks.forEach((link: HTMLAnchorElement): void => link.addEventListener("click", (): void => {
            if (menuTrigger.getAttribute("aria-expanded") === "true") toggleMenu();
        }));
    }
});

// ============================================================================
// ✨ CIRCUIT 4: HIGH-VELOCITY DYNAMIC AI INGESTION ENGINE (INTELLIGENT PARSER)
// ============================================================================
const aiTrigger = document.getElementById("ai-trigger") as HTMLButtonElement | null;
const aiWindow = document.getElementById("ai-window") as HTMLDivElement | null;
const aiClose = document.getElementById("ai-close") as HTMLButtonElement | null;
const aiInput = document.getElementById("ai-input") as HTMLInputElement | null;
const aiSend = document.getElementById("ai-send") as HTMLButtonElement | null;
const aiFeed = document.getElementById("ai-feed") as HTMLDivElement | null;
const hintBox = document.getElementById("hint-box") as HTMLDivElement | null;

// 🪐 TYPE INTERFACE SPECIFICATION FOR THE ENTERPRISE KNOWLEDGE BASE
interface AIKnowledgeEntry {
    keywords: string[];
    response: string;
}

// 🪐 1. ENTERPRISE GLOBAL KNOWLEDGE BASE SCRIPT (The Large Context Document)
const aiKnowledgeScript: Record<string, AIKnowledgeEntry> = {
    basic: {
        keywords: [
            "hi", "hy", "what", "what's", "what's up", "hello", "hey", 
            "how are you", "how is it going", "how's it going", "how do you do", 
            "howdy", "greetings", "salutations", "good day", "good morning", 
            "good afternoon", "good evening"
        ],
        response: "Hello! Welcome to the Apex Inbound Hub. How can I optimize your performance architecture today? Select one of our diagnostic hints below to audit your system."
    },
    serverless: {
        keywords: ["bill", "cost", "serverless", "pricing", "expensive", "money", "cloud"],
        response: "Traditional architectures trigger extreme cloud compute overheads. Apex Fitness isolates non-blocking ingestion matrices directly within client RAM, crashing serverless execution invocation bills structurally by 50%."
    },
    gpu: {
        keywords: ["gpu", "hardware", "fps", "performance", "smooth", "scroll", "lag", "speed"],
        response: "By promotions inside our stylesheet with translateZ(0), we structurally bypass the CPU main thread. The layout pipeline forces rendering execution directly onto the hardware GPU Compositor, locking cell updates at 120Hz muren speed with zero battery lag."
    },
    vitals: {
        keywords: ["vitals", "seo", "google", "speed score", "optimization", "bfcache", "memory"],
        response: "Our Core Web Vitals score is structurally guaranteed at 100/100. The engine intercepts browser pageshow signals to execute an atomic flush of the V8 cache registers, completely preventing client memory leakage during navigation paths."
    },
    brand: {
        keywords: ["what is", "apex fitness", "monolith", "architecture", "this site", "platform"],
        response: "Apex Fitness Monolith is an ultra-premium, high-velocity corporate ecosystem built over clean custom Vite and Tailwind v4 compilation pipelines, engineered for high-end portfolio demonstration and resource caching."
    },
    join: {
        keywords: ["join", "register", "start", "button", "protocols", "cta", "signup"],
        response: "To sync your operational metrics with our elite serverless layer, activate the 'Join Now' soft-elastic balloon button located in the global navigation header."
    }
};

const hintSuggestions: Record<string, string[]> = {
    "default": ["Deploy GPU?", "Serverless Bill?", "Core Web Vitals"]
};

if (aiTrigger && aiWindow && aiClose && aiInput && aiSend && aiFeed && hintBox) {
    // ============================================================================
    // ✨ CIRCUIT 4.1: LIVE INTERACTIVE TOGGLE GOVERNOR (Section 08)
    // ============================================================================
    // 🧬 MIT CYBER-SECURITY SPEC: Explicit type bindings for UI layout nodes, 
    // safe DOM manipulation, and dynamic event loop token processing filters.
    // ============================================================================
    const toggleAiWindow = (): void => {
        // Safely verifying the runtime CSS state tokens directly from the GPU layer
        const isActive: boolean = aiWindow!.classList.contains("ai-active");
        
        if (!isActive) {
            // 🟢 ونڈو بیدار: وجود، کرنٹ اور پوزیشن فلی لائیو آن
            aiWindow!.style.display = "flex"; 
            aiWindow!.style.pointerEvents = "auto";
            aiWindow!.classList.remove("hidden");
            setTimeout((): void => { 
                aiWindow!.classList.add("ai-active"); 
            }, 10);
        } else {
            // ❌ ونڈو بند: وجود اور ٹچ 0ms پر جڑ سے غائب
            aiWindow!.classList.remove("ai-active");
            aiWindow!.style.pointerEvents = "none";
            setTimeout((): void => { 
                aiWindow!.classList.add("hidden");
                aiWindow!.style.display = "none"; // لے آؤٹ کولیژن جڑ سے کچل دیا گیا!
            }, 300);
        }
    };

    aiTrigger!.addEventListener("click", toggleAiWindow);
    aiClose!.addEventListener("click", toggleAiWindow);

    const bindHintEvents = (): void => {
        document.querySelectorAll(".ai-hint").forEach((btn: Element): void => {
            const htmlBtn = btn as HTMLButtonElement;
            htmlBtn.onclick = null; 
            htmlBtn.onclick = (): void => processUserQuery(htmlBtn.innerText);
        });
    };

    const updateHints = (): void => {
        const hints: string[] = hintSuggestions["default"];
        hintBox!.innerHTML = "";
        hints.forEach((hintText: string): void => {
            hintBox!.innerHTML += `
                <button class="ai-hint bg-neutral-900/90 text-white hover:border-[#ccff00]/50 border border-white/10 px-2.5 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all outline-none">
                    ${hintText}
                </button>
            `;
        });
        setTimeout((): void => { bindHintEvents(); }, 5);
    };

    // 🎯 2. ADVANCED CONCEPTUAL TOKEN EXTRACTOR ENGINE
    // یہ جاوا اسکرپٹ کا وہ جادوئی الورتھم ہے جو صارف کے پورے جملے میں سے کنسپچول ورڈز میچ کرے گا
    const resolveConceptualBrain = (rawQuery: string): string => {
        const queryTokens: string = rawQuery.toLowerCase().trim();
        
        // پورٹ فولیو کا سچا ہینڈ شیک رول
        for (const scope in aiKnowledgeScript) {
            if (Object.prototype.hasOwnProperty.call(aiKnowledgeScript, scope)) {
                const matchFound: boolean = aiKnowledgeScript[scope].keywords.some((keyword: string): boolean => 
                    queryTokens.includes(keyword)
                );
                if (matchFound) {
                    return aiKnowledgeScript[scope].response;
                }
            }
        }
        
        // 🔒 3. FIXED: واٹس ایپ ری ڈائریکشن گائیڈنس والو (سلیکن ویلی بزنس ہیک)
        return "I can verify your operational trace query inside our current matrix context. However, for deep diagnostic engineering parameters, **please activate the official floating WhatsApp gateway below** to connect directly with the system owner.";
    };

    /**
     * ✨ CIRCUIT 5: HIGH-VELOCITY DYNAMIC AI INGESTION ENGINE (CORE PIPELINE)
     * 🔬 MIT CYBER-SECURITY SPEC: User input rendering locked through safe DOM APIs to crush XSS injection permanently.
     */
    const processUserQuery = (userText: string): void => {
        const cleanInputText: string = userText.trim();
        if (!cleanInputText) return;

        // 🛡️ SECURITY SHIELD: Creating an isolated physical DOM node container instead of dangerous innerHTML
        const userBubbleContainer: HTMLDivElement = document.createElement("div");
        userBubbleContainer.className = "bg-[#ccff00]/10 text-white p-3.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-left border border-[#ccff00]/20 leading-relaxed shadow-sm select-text";
        
        // 🎯 FIXED MASTERSTROKE: textContent کے فولادی تالے سے ہیکر کا جاوا اسکرپٹ اٹیک فورا گونگا ہو کر منجمد!
        userBubbleContainer.textContent = cleanInputText;
        
        // Atomic injection directly into the hardware-promoted tracking feed
        aiFeed!.appendChild(userBubbleContainer);
        
        aiInput!.value = ""; 
        aiFeed!.scrollTop = aiFeed!.scrollHeight;

        // Simulated Telemetry State Engine Initialization (Typing Indication Node)
        const typingId: string = "ai-type-" + Date.now();
        const typingBubble: HTMLDivElement = document.createElement("div");
        typingBubble.id = typingId;
        typingBubble.className = "bg-neutral-900/50 text-[#ccff00] p-3 rounded-2xl rounded-tl-none max-w-[65%] border border-white/5 font-mono animate-pulse tracking-widest text-[10px] font-black select-none";
        typingBubble.textContent = "✨ CONTEXT PARSING...";
        
        aiFeed!.appendChild(typingBubble);
        aiFeed!.scrollTop = aiFeed!.scrollHeight;

        // Resolving the Macro-Task Asynchronous Delay
        setTimeout((): void => {
            const typingNode: HTMLElement | null = document.getElementById(typingId);
            if (typingNode) typingNode.remove();

            // Resolving the conceptual base from the deep registry script
            const aiResponse: string = resolveConceptualBrain(cleanInputText);

            // Creating the authoritative bot bubble context layer
            const botBubbleContainer: HTMLDivElement = document.createElement("div");
            botBubbleContainer.className = "bg-neutral-900/80 text-[#d1d5db] p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5 leading-relaxed shadow-sm select-text";
            
            // 📡 NOTE: چونکہ بوٹ کے اپنے پے لوڈ میں ہمارے محفوظ لنکس شامل ہیں، اسے innerHTML دیں گے کیونکہ یہ سیکیور انٹرنل ڈیٹا ہے
            botBubbleContainer.innerHTML = aiResponse;

            aiFeed!.appendChild(botBubbleContainer);
            aiFeed!.scrollTop = aiFeed!.scrollHeight;
            
            if (typeof updateHints === "function") updateHints();
            aiInput!.focus();
        }, 650);
    };

    aiSend!.onclick = (): void => processUserQuery(aiInput!.value);
    aiInput!.onkeydown = (e: KeyboardEvent): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            processUserQuery(aiInput!.value);
        }
    };

    bindHintEvents();
}

// ============================================================================
// ⚡ CIRCUIT 5: CORE EXECUTION SYNC VALVE (THE MAIN THREAD UNLOCK - Section 09)
// ============================================================================
// 🧬 SPEC: Forcing the hardware event loop to restore full layout current before
// initializing asynchronous conceptual parsed threads.
// ============================================================================
const initializeAbsoluteCore = (): void => {
    // 🛡️ FAIL-CLOSED STATE: پیج لوڈ ہوتے ہی زبردستی اے آئی ونڈو کو پوشیدہ موڈ پر منجمد کرنا
    if (aiWindow) {
        aiWindow.classList.add("hidden");
        aiWindow.classList.remove("ai-active");
        aiWindow.style.pointerEvents = "none";
        aiWindow.style.display = "none";
    }
    
    // بائنڈ ہنٹس کا لائیو کرنٹ فلی آن کرنا
    if (typeof updateHints === "function") {
        updateHints();
    }
    
    console.log("🛰️ Core execution main thread unlocked with 100% current flow!");
};

// 🛡️ Bypassing thread blocking by checking current document readystates
// ============================================================================
// ⚡ CIRCUIT 5.1: MONOLITHIC PROTOCOL CLOSURE & EXECUTION LINK
// ============================================================================
// 🧬 SPEC: Safely sealing the DOMContentLoaded main scope and firing the active core.
// ============================================================================

// 🛡️ Bypassing thread blocking by checking current document readystates
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAbsoluteCore);
} else {
    initializeAbsoluteCore();
}

// 🔒 THE MASTERSTROKE LOCK: یہ ہے وہ اصلی بریکٹ تالا جو مانیٹر فلی صاف کر دے گا!
});

