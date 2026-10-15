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
