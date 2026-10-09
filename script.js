/* built by siddharth · Personal use only */

// CONTACT EMAIL — this is the single place to change the contact email.
const CONTACT_EMAIL = "pattnaiksiddharth1@gmail.com";

const DIALOGS = {
    work: ["Selected Work", "Selected data, product and web projects."],
    about: ["About", "I'm Siddharth — a Data & Business Analyst, Vibe Coder, and Full-Stack Builder. I turn raw data into actionable insights, ideas into products, and complex problems into smart, user-focused solutions."],
    process: ["My Process", "I turn business challenges into data-driven solutions. From analyzing data and uncovering actionable insights to identifying opportunities, designing user-focused products, and building full-stack applications, I combine analytical thinking with hands-on development to turn ideas into impactful, real-world solutions."],
    approach: ["What I Do", "I transform data into actionable insights, business challenges into strategic solutions, and ideas into functional digital products. From data analytics and business intelligence to product thinking and full-stack development, I combine analytical skills, creativity, and AI-powered coding to build solutions that deliver real value.."]
};

document.querySelectorAll("[data-contact]").forEach(a => { a.href = "mailto:" + CONTACT_EMAIL; });
document.querySelectorAll("[data-email-text]").forEach(a => { a.textContent = CONTACT_EMAIL; });

/* Dialogs */
const dlg = document.getElementById("info");
let trigger = null;
document.querySelectorAll("[data-dialog]").forEach(btn => {
    btn.addEventListener("click", () => {
        const [title, text] = DIALOGS[btn.dataset.dialog];
        document.getElementById("info-title").textContent = title;
        document.getElementById("info-text").textContent = text;
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
    const s = Math.min(1, wrap.clientWidth / 900);
    wrap.style.setProperty("--s", s);
    wrap.style.height = Math.ceil(320 * s) + 12 + "px";
}
new ResizeObserver(fit).observe(wrap);
fit();

/* Automatic key sequence */
const kb = document.getElementById("kb");
const keys = [...kb.querySelectorAll(".key")]; // DOM order = P O R T F O L I O Enter
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
let idx = 0, timer = 0, hold = 0, hovering = false, focused = false;

function stop() {
    clearTimeout(timer); clearTimeout(hold);
    keys.forEach(k => k.classList.remove("is-auto"));
}
function step() {
    const k = keys[idx];
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

/* Marquee: two identical groups, animate exactly one group width (-50%) at ~50px/s */
const track = document.getElementById("track");
function buildMarquee() {
    const [g1, g2] = track.querySelectorAll(".group");
    const proto = g1.firstElementChild;
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

/* ── Gallery Carousel ───────────────────────────────────────────── */
(function () {
    "use strict";

    /* Slide data — update captions/alts here to match your real files */
    const SLIDES = [
        {
            src: "images/dashboard-1.png",
            caption: "Analytics Dashboard",
            alt: "Analytics dashboard showing key business metrics and charts"
        },
        {
            src: "images/dashboard-2.png",
            caption: "Data Insights Dashboard",
            alt: "Data insights dashboard with trend analysis and KPI visualisations"
        },
        {
            src: "images/dashboard-3.png",
            caption: "Business Intelligence Report",
            alt: "Business intelligence report dashboard with tables and bar charts"
        },
        {
            src: "images/frontpage-1.png",
            caption: "Web Front Page",
            alt: "Front-page screenshot of a web application built by Siddharth"
        }
    ];

    const total = SLIDES.length;
    let current = 0;

    /* DOM refs */
    const carImg      = document.getElementById("carImg");
    const carCaption  = document.getElementById("carCaption");
    const carCounter  = document.getElementById("carCounter");
    const carAnnounce = document.getElementById("carAnnounce");
    const carPrev     = document.getElementById("carPrev");
    const carNext     = document.getElementById("carNext");
    const thumbBtns   = [...document.querySelectorAll(".car-thumb")];
    const carImgBtn   = document.getElementById("carImgBtn");

    /* Lightbox refs */
    const lightbox        = document.getElementById("lightbox");
    const lightboxImg     = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose   = document.getElementById("lightbox-close");

    /* Core update function */
    function goTo(n) {
        current = ((n % total) + total) % total; // wrap both directions
        const slide = SLIDES[current];

        carImg.src            = slide.src;
        carImg.alt            = slide.alt;
        carCaption.textContent = slide.caption;
        carCounter.textContent = (current + 1) + " / " + total;

        /* Announce to screen readers */
        carAnnounce.textContent = "";
        requestAnimationFrame(() => {
            carAnnounce.textContent =
                "Screenshot " + (current + 1) + " of " + total + ": " + slide.caption;
        });

        /* Sync thumbnails */
        thumbBtns.forEach((btn, i) => {
            const active = i === current;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-selected", active ? "true" : "false");
        });

        /* Lazy-load the next slide in advance */
        const nextIdx = (current + 1) % total;
        const nextImg = new Image();
        nextImg.src   = SLIDES[nextIdx].src;
    }

    /* Nav buttons */
    carPrev.addEventListener("click", () => goTo(current - 1));
    carNext.addEventListener("click", () => goTo(current + 1));

    /* Thumbnail clicks */
    thumbBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => goTo(i));
    });

    /* Arrow key navigation (carousel must contain focus) */
    document.getElementById("carousel").addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            goTo(current + 1);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            goTo(current - 1);
        }
    });

    /* Touch / swipe */
    let touchStartX = 0;
    const SWIPE_THRESHOLD = 40;
    const carousel = document.getElementById("carousel");
    carousel.addEventListener("touchstart", e => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    carousel.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) >= SWIPE_THRESHOLD) {
            goTo(dx < 0 ? current + 1 : current - 1);
        }
    }, { passive: true });

    /* Lightbox: open */
    carImgBtn.addEventListener("click", () => {
        const slide = SLIDES[current];
        lightboxImg.src             = slide.src;
        lightboxImg.alt             = slide.alt;
        lightboxCaption.textContent = slide.caption;
        lightbox.showModal();
    });

    /* Lightbox: close */
    lightboxClose.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("close", () => carImgBtn.focus());

    /* Initialise */
    goTo(0);
}());