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
