/* built by siddharth • Personal use only */

// CONTACT EMAIL — this is the single place to change the contact email.
const CONTACT_EMAIL = "pattnaiksiddharth1@gmail.com";

const DIALOGS = {
    work: ["Power BI Dashboards & Case Studies", "Explore my interactive Power BI reporting suites and end-to-end analytical case studies covering Marketing ROI, Retention Cohorts, Smart City Transit Demand, and Retail Pricing Elasticity."],
    about: ["About Siddharth", "I'm Siddharth — a Data & Business Analyst, Vibe Coder, and Full-Stack Builder. I turn raw data into actionable insights, ideas into products, and complex problems into smart, user-focused solutions."],
    process: ["My Process", "I turn business challenges into data-driven solutions. From analyzing data and uncovering actionable insights to identifying opportunities, designing user-focused products, and building full-stack applications, I combine analytical thinking with hands-on development to turn ideas into impactful, real-world solutions."],
    approach: ["What I Do", "I transform data into actionable insights, business challenges into strategic solutions, and ideas into functional digital products. From data analytics and business intelligence to product thinking and full-stack development, I combine analytical skills, creativity, and AI-powered coding to build solutions that deliver real value."]
};

document.querySelectorAll("[data-contact]").forEach(a => { a.href = "mailto:" + CONTACT_EMAIL; });
document.querySelectorAll("[data-email-text]").forEach(a => { a.textContent = CONTACT_EMAIL; });

/* Dialogs */
const dlg = document.getElementById("info");
const dialogProjectsBtn = document.getElementById("dialogProjectsBtn");
let trigger = null;
document.querySelectorAll("[data-dialog]").forEach(btn => {
    btn.addEventListener("click", () => {
        const dialogKey = btn.dataset.dialog;
        const [title, text] = DIALOGS[dialogKey] || ["Info", ""];
        document.getElementById("info-title").textContent = title;
        document.getElementById("info-text").textContent = text;
        if (dialogProjectsBtn) {
            dialogProjectsBtn.style.display = dialogKey === "work" ? "inline-flex" : "none";
        }
        trigger = btn;
        dlg.showModal();
        update();
    });
});
document.getElementById("info-close").addEventListener("click", () => dlg.close());
dlg.addEventListener("close", () => { if (trigger) trigger.focus(); trigger = null; update(); });

/* Keyboard scale: <= 1 and <= container width / 900 */
const wrap = document.getElementById("kbWrap");
function fit() {
    if (!wrap) return;
    const s = Math.min(1, wrap.clientWidth / 900);
    wrap.style.setProperty("--s", s);
    wrap.style.height = Math.ceil(320 * s) + 12 + "px";
}
if (wrap) {
    new ResizeObserver(fit).observe(wrap);
    fit();
}

/* Automatic key sequence */
const kb = document.getElementById("kb");
if (kb) {
    const keys = [...kb.querySelectorAll(".key")]; // DOM order = P O R T F O L I O Enter
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let idx = 0, timer = 0, hold = 0, hovering = false, focused = false;

    function stop() {
        clearTimeout(timer); clearTimeout(hold);
        keys.forEach(k => k.classList.remove("is-auto"));
    }
    function step() {
        const k = keys[idx];
        if (!k) return;
        k.classList.add("is-auto");
        hold = setTimeout(() => k.classList.remove("is-auto"), 220);
        idx = (idx + 1) % keys.length;
        timer = setTimeout(step, idx === 0 ? 1500 : 340);
    }
    function update() {
        stop();
        if (!hovering && !focused && !dlg.open && !document.hidden && !reduce.matches) timer = setTimeout(step, 300);
    }
    kb.addEventListener("pointerenter", () => { hovering = true; update(); });
    kb.addEventListener("pointerleave", () => { hovering = false; update(); });
    kb.addEventListener("focusin", e => { focused = e.target.matches(":focus-visible"); update(); });
    kb.addEventListener("focusout", () => { focused = false; update(); });
    document.addEventListener("visibilitychange", update);
    reduce.addEventListener("change", update);
    update();
}

/* Marquee: two identical groups, animate exactly one group width (-50%) at ~50px/s */
const track = document.getElementById("track");
if (track) {
    function buildMarquee() {
        const [g1, g2] = track.querySelectorAll(".group");
        if (!g1 || !g2) return;
        const proto = g1.firstElementChild;
        if (!proto) return;
        g1.replaceChildren(proto); g2.replaceChildren();
        const w = proto.getBoundingClientRect().width || 1;
        const n = Math.max(1, Math.ceil((window.innerWidth + 1) / w));
        for (let i = 1; i < n; i++) g1.appendChild(proto.cloneNode(true));
        g2.append(...[...g1.children].map(c => c.cloneNode(true)));
        track.style.setProperty("--dur", (g1.getBoundingClientRect().width / 50).toFixed(2) + "s");
    }
    let rt = 0;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(buildMarquee, 150); });
    buildMarquee();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { buildMarquee(); fit(); });
}

/* Optional Legacy Carousel Guard */
(function () {
    "use strict";
    const carImg = document.getElementById("carImg");
    if (!carImg) return; // Exit gracefully if gallery was replaced by Featured Dashboards

    const total = 4;
    let current = 0;
    const carCaption = document.getElementById("carCaption");
    const carCounter = document.getElementById("carCounter");
    const carAnnounce = document.getElementById("carAnnounce");
    const carPrev = document.getElementById("carPrev");
    const carNext = document.getElementById("carNext");
    const thumbBtns = [...document.querySelectorAll(".car-thumb")];
    const carImgBtn = document.getElementById("carImgBtn");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightbox-close");

    function goTo(n) {
        current = ((n % total) + total) % total;
        if (carCounter) carCounter.textContent = (current + 1) + " / " + total;
        thumbBtns.forEach((btn, i) => {
            const active = i === current;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-selected", active ? "true" : "false");
        });
    }

    if (carPrev) carPrev.addEventListener("click", () => goTo(current - 1));
    if (carNext) carNext.addEventListener("click", () => goTo(current + 1));
    thumbBtns.forEach((btn, i) => btn.addEventListener("click", () => goTo(i)));
    if (lightboxClose && lightbox) lightboxClose.addEventListener("click", () => lightbox.close());
})();

/* Featured Dashboards Interactive Navigation & Dynamic Count */
function initFeaturedDashboards() {
    // Dynamic project count on 'View all N projects' CTA button
    const projects = (window.PROJECTS_DATA && Array.isArray(window.PROJECTS_DATA)) ? window.PROJECTS_DATA : null;
    const count = projects ? projects.length : 4;
    const btnCta = document.getElementById("btnViewAllProjects");
    if (btnCta) {
        const span = btnCta.querySelector("span");
        if (span) {
            span.innerHTML = `View all ${count} projects &rarr;`;
        }
    }

    // Direct card navigation to projects page and anchor
    document.querySelectorAll(".preview-card").forEach(card => {
        const targetId = card.dataset.projectTarget || "";

        const navigateToProject = (e) => {
            // Ignore if clicked on the direct PDF link
            if (e.target.closest(".preview-pdf-link-btn") || e.target.classList.contains("preview-pdf-link-btn")) {
                return;
            }
            if (targetId) {
                window.location.href = `projects.html#${targetId}`;
            } else {
                window.location.href = "projects.html";
            }
        };

        card.addEventListener("click", navigateToProject);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigateToProject(e);
            }
        });
    });

    // Ensure PDF buttons open cleanly in a new tab
    document.querySelectorAll(".preview-pdf-link-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFeaturedDashboards);
} else {
    initFeaturedDashboards();
}

/* =========================================================
   OPENING WELCOME SCREEN CONTROLLER
   ========================================================= */
function initWelcomeScreen() {
    const screen = document.getElementById("welcomeScreen");
    if (!screen) return;

    // Check if directly linking to a specific section via hash (e.g. index.html#internship or index.html#contact)
    if (window.location.hash && window.location.hash !== "#" && window.location.hash !== "#main") {
        screen.style.display = "none";
        document.body.classList.remove("welcome-locked");
        return;
    }

    document.body.classList.add("welcome-locked");

    let isClosed = false;
    function closeWelcomeScreen() {
        if (isClosed) return;
        isClosed = true;
        screen.classList.add("is-hidden");
        document.body.classList.remove("welcome-locked");
        setTimeout(() => {
            screen.style.display = "none";
        }, 450);
    }

    // Clicking anywhere on the welcome screen enters the main page
    screen.addEventListener("click", () => {
        closeWelcomeScreen();
    });

    const enterBtn = document.getElementById("welcomeEnterBtn");
    if (enterBtn) {
        enterBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeWelcomeScreen();
        });
    }

    // Keyboard accessibility
    document.addEventListener("keydown", (e) => {
        if (!isClosed && (e.key === "Enter" || e.key === " " || e.key === "Escape")) {
            closeWelcomeScreen();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWelcomeScreen);
} else {
    initWelcomeScreen();
}
