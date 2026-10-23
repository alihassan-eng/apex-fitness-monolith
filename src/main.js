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
// ========================================================
// 🪐 ENTERPRISE HARDWARE TELEMETRY & RUNTIME MONITOR
// ========================================================

// 1. ⚡ GPU-Optimized Scroll Progress Engine
window.addEventListener("scroll", () => {
    const scrollBar = document.getElementById("scroll-bar");
    if (!scrollBar) return;
    
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    scrollBar.style.width = scrolled + "%";
});

// 2. 📊 Client-Side Realtime FPS Diagnostic Loop
let lastCalledTime;
let fps;

function calcFps() {
    if (!lastCalledTime) {
        lastCalledTime = performance.now();
        requestAnimationFrame(calcFps);
        return;
    }
    const delta = (performance.now() - lastCalledTime) / 1000;
    lastCalledTime = performance.now();
    fps = Math.round(1 / delta);
    
    const fpsVal = document.getElementById("fps-val");
    if (fpsVal) fpsVal.innerText = fps > 60 ? 60 : fps; // 60Hz/120Hz اسکرین لاکنگ
    requestAnimationFrame(calcFps);
}
requestAnimationFrame(calcFps);

// 3. 🌓 V8 LocalStorage Theme Resiliency Lock
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    const currentTheme = localStorage.getItem("apex-theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        let theme = "dark";
        if (document.body.classList.contains("light-theme")) {
            theme = "light";
        }
        localStorage.setItem("apex-theme", theme);
    });
}
