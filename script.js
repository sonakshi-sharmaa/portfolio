/* =========================================================
   SCRIPT.JS
   Everything you will want to edit is in the CONFIG block
   at the top. You do not need to touch the code below it.
   ========================================================= */

const CONFIG = {
  // ---- Brand: change your name once here and it updates everywhere ----
  brand: "Sonakshi Sharma",

  // ---- Links ----
  instagram: "https://www.instagram.com/soohyaps/",

  // REPLACE: your real email address
  email: "sonakshisharmaeditor@gmail.com",

  // OPTIONAL: paste full links to show them in "The Creator Behind the Edits". Leave "" to hide.
  social: {
    YouTube: "",
    LinkedIn: "",
    // TikTok: "https://www.tiktok.com/@yourname",
  },

  // ---- Hero animation (your portrait frames) ----
  // frames: how many images exist (f001.webp ... f192.webp). Set to 0 to show only the still poster.
  hero: { frames: 192, folder: "assets/images/hero-frames/", prefix: "f", ext: ".webp", fps: 24 },

  // ---- 3D video section ----
  video: {
    src: "3d-showreel.mp4",        // REPLACE: your MP4 (see README)
    poster: "assets/images/3d-thumbnail.svg",    // REPLACE: your thumbnail, e.g. assets/images/3d-thumbnail.jpg
    title: "3D Showreel",
    description: "Add a short description of this project here: what it is, the idea behind it, and what you wanted viewers to feel.",
    tools: ["Tool one", "Tool two", "Tool three"] // REPLACE: the software you used
  },

  // ---- Selected Creative Work ----
  // categories must match one of these names exactly so the filter buttons work.
  categories: ["3D Visuals", "Video Editing", "Reels", "Transitions", "Creative Designs"],
  // To add a project: copy one block, change the image path, title, category and description.
  // Images go in assets/images/ (use .jpg or .webp, about 1200px wide, under 400 KB).
  projects: [
    { title: "Project One",   category: "3D Visuals",       image: "assets/images/project-1.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one", "Tool two"] },
    { title: "Project Two",   category: "Video Editing",    image: "assets/images/project-2.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one"] },
    { title: "Project Three", category: "Reels",            image: "assets/images/project-3.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one"] },
    { title: "Project Four",  category: "Transitions",      image: "assets/images/project-4.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one"] },
    { title: "Project Five",  category: "Creative Designs", image: "assets/images/project-5.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one"] },
    { title: "Project Six",   category: "3D Visuals",       image: "assets/images/project-6.svg", description: "Describe this project: the brief, your role and the result.", tools: ["Tool one"] }
  ],

  // ---- Instagram Reels ----
  // To replace a cover: save the image in assets/images/ and change "thumb".
  reels: [
    { title: "Organic Reach Highlight", category: "Performance Highlight", url: "https://www.instagram.com/reel/DeMMEEryii2/", thumb: "assets/images/reel-1-organic-reach.jpg", featured: true, stat: "27.5K", statNote: "Organic reach on this reel" },
    { title: "Smooth Transition Edit",  category: "Transitions & Video Editing", url: "https://www.instagram.com/reel/DeKvVOPtMND/", thumb: "assets/images/reel-2-smooth-transition.svg" },
    { title: "Creative Reel",           category: "Social Media Content",        url: "https://www.instagram.com/reel/DcJaOI3SFes/", thumb: "assets/images/reel-3-creative-reel.svg" },
    { title: "Visual Storytelling",     category: "Video Editing",               url: "https://www.instagram.com/reel/DaxND8VtYpP/", thumb: "assets/images/reel-4-visual-storytelling.svg" }
  ]
};

/* ---------- Skill icons (simple outline icons) ---------- */
const ICON = (d) => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const SKILLS = [
  ["Video Editing", ICON('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 4v16M16 4v16M3 9h5M3 15h5M16 9h5M16 15h5"/>')],
  ["3D Video Content", ICON('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>')],
  ["Smooth Transitions", ICON('<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>')],
  ["Instagram Reels", ICON('<rect x="4" y="3" width="16" height="18" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>')],
  ["Short-Form Content", ICON('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>')],
  ["Visual Storytelling", ICON('<path d="M5 4h10a4 4 0 014 4v12H9a4 4 0 01-4-4z"/><path d="M9 9h6M9 13h4"/>')],
  ["Social Media Content Creation", ICON('<circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.3 10.8l6.4-3.6M8.3 13.2l6.4 3.6"/>')],
  ["Influencer Content", ICON('<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z"/>')],
  ["Creative Direction", ICON('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>')]
];

const $ = (s, el = document) => el.querySelector(s);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Brand, email, year ---------- */
document.querySelectorAll("[data-brand]").forEach((el) => (el.textContent = CONFIG.brand));
document.title = `${CONFIG.brand} | Video Editor, Reels Creator & Social Media Influencer`;
const emailLink = $("#email-link");
emailLink.href = `mailto:${CONFIG.email}`;
emailLink.textContent = CONFIG.email;
$("#year").textContent = new Date().getFullYear();

/* ---------- Mobile nav ---------- */
const navToggle = $(".nav-toggle");
const navList = $("#nav-links");
function setNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navList.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}
navToggle.addEventListener("click", () => setNav(navToggle.getAttribute("aria-expanded") !== "true"));
navList.addEventListener("click", (e) => { if (e.target.closest("a")) setNav(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });

/* ---------- Hero frame animation ---------- */
(function hero() {
  const h = CONFIG.hero;
  const canvas = $("#hero-canvas");
  const poster = $("#hero-poster");
  const replay = $("#hero-replay");
  const saveData = navigator.connection && navigator.connection.saveData;
  if (!h.frames || reduceMotion || saveData) { canvas.hidden = true; return; }

  const ctx = canvas.getContext("2d");
  const imgs = new Array(h.frames);
  let ready = 0;          // number of frames loaded in a row from the start
  let started = false, startTime = 0, raf = 0;

  const name = (i) => `${h.folder}${h.prefix}${String(i + 1).padStart(3, "0")}${h.ext}`;

  function loadFrom(i) {
    if (i >= h.frames) return;
    const im = new Image();
    im.onload = im.onerror = () => {
      imgs[i] = im;
      while (imgs[ready]) ready++;
      if (i === 0 && im.naturalWidth) { ctx.drawImage(im, 0, 0, canvas.width, canvas.height); }
      if (!started && ready >= 12) start();
      loadFrom(i + 4);      // 4 parallel loaders (i, i+1, i+2, i+3), each stepping by 4
    };
    im.src = name(i);
  }
  for (let k = 0; k < 4; k++) loadFrom(k);

  function start() {
    started = true; startTime = performance.now();
    poster.classList.add("is-hidden");
    raf = requestAnimationFrame(tick);
  }
  function tick(now) {
    const want = Math.floor(((now - startTime) / 1000) * h.fps);
    const idx = Math.min(want, h.frames - 1, ready - 1);
    const im = imgs[idx];
    if (im && im.naturalWidth) ctx.drawImage(im, 0, 0, canvas.width, canvas.height);
    if (idx >= h.frames - 1) { replay.hidden = false; return; } // hold on the last frame
    // if loading is behind, shift the clock so playback does not skip ahead
    if (want > ready - 1 && ready < h.frames) startTime += 16;
    raf = requestAnimationFrame(tick);
  }
  replay.addEventListener("click", () => {
    replay.hidden = true; startTime = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
  });
  // pause when the hero is off screen
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); });
})();

/* ---------- 3D video player ---------- */
(function player() {
  const v = CONFIG.video;
  const video = $("#showreel");
  const src = $("#showreel-src");
  const btn = $("#play-btn");
  const fs = $("#fs-btn");
  const notice = $("#player-notice");
  const frame = $(".player-frame");

  src.src = v.src; video.poster = v.poster;
  $("#video-title").textContent = v.title;
  $("#video-desc").textContent = v.description;
  $("#video-tools").innerHTML = v.tools.map((t) => `<li>${esc(t)}</li>`).join("");
  video.load();

  const showMissing = () => { notice.hidden = false; btn.classList.add("is-hidden"); video.controls = false; };
  src.addEventListener("error", showMissing);
  video.addEventListener("error", showMissing);

  btn.addEventListener("click", () => {
    notice.hidden = true;
    video.controls = true;
    btn.classList.add("is-hidden");
    video.play().catch(() => {});
  });
  video.addEventListener("pause", () => { if (!video.ended && !video.seeking) { /* native controls handle resume */ } });
  video.addEventListener("ended", () => { btn.classList.remove("is-hidden"); video.controls = false; });

  fs.addEventListener("click", () => {
    if (document.fullscreenElement) return document.exitFullscreen();
    if (frame.requestFullscreen) frame.requestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); // iPhone Safari
  });
})();

/* ---------- Gallery, filters, modal ---------- */
(function gallery() {
  const grid = $("#gallery-grid");
  const filters = $("#filters");
  const modal = $("#modal");

  grid.innerHTML = CONFIG.projects.map((p, i) => `
    <button class="card" type="button" data-i="${i}" data-cat="${esc(p.category)}" aria-label="Open ${esc(p.title)}">
      <img src="${esc(p.image)}" alt="${esc(p.title)} (${esc(p.category)})" loading="lazy">
      <span class="card-info"><strong>${esc(p.title)}</strong><span>${esc(p.category)}</span></span>
    </button>`).join("");

  const cats = ["All", ...CONFIG.categories];
  filters.innerHTML = cats.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    grid.querySelectorAll(".card").forEach((c) => { c.hidden = !(b.dataset.cat === "All" || c.dataset.cat === b.dataset.cat); });
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card"); if (!card) return;
    const p = CONFIG.projects[+card.dataset.i];
    $("#modal-img").src = p.image; $("#modal-img").alt = p.title;
    $("#modal-cat").textContent = p.category;
    $("#modal-title").textContent = p.title;
    $("#modal-desc").textContent = p.description;
    $("#modal-tools").innerHTML = (p.tools || []).map((t) => `<li>${esc(t)}</li>`).join("");
    modal.showModal();
  });
  $("#modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); }); // click backdrop
})();

/* ---------- Reels ---------- */
$("#reels-grid").innerHTML = CONFIG.reels.map((r) => `
  <article class="reel ${r.featured ? "reel-featured" : ""}">
    <div class="reel-thumb">
      ${r.featured ? '<span class="reel-badge">Performance Highlight</span>' : ""}
      <img src="${esc(r.thumb)}" alt="Cover of the reel: ${esc(r.title)}" loading="lazy">
    </div>
    <div class="reel-body">
      ${r.featured ? `<p class="reel-stat">${esc(r.stat)}<small>${esc(r.statNote)}</small></p>` : ""}
      <h3>${esc(r.title)}</h3>
      ${r.featured ? "" : `<p>${esc(r.category)}</p>`}
      <a class="btn ${r.featured ? "btn-primary" : "btn-ghost"}" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Watch on Instagram<span class="sr-only"> (opens in a new tab): ${esc(r.title)}</span></a>
    </div>
  </article>`).join("");

/* ---------- Skills ---------- */
$("#skills-grid").innerHTML = SKILLS.map(([name, icon]) => `<li class="skill">${icon}<h3>${esc(name)}</h3></li>`).join("");

/* ---------- Optional social links ---------- */
$("#socials").innerHTML = Object.entries(CONFIG.social).filter(([, url]) => url)
  .map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a></li>`).join("");

/* ---------- Contact form (opens visitor's email app; no backend needed) ---------- */
$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Collaboration enquiry from ${f.get("name")}`;
  const body = `Name: ${f.get("name")}\nBrand/channel: ${f.get("brand") || "-"}\n\n${f.get("message")}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Scroll reveal ---------- */
(function reveal() {
  const targets = document.querySelectorAll(".section-head, .player, .gallery, .reels, .creator-photo, .creator-copy, .skills, .metrics, .contact-copy, .form");
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
})();

/* ---------- Counters ---------- */
(function counters() {
  const els = document.querySelectorAll("[data-count]");
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target, end = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), suf = el.dataset.suffix || "";
      const t0 = performance.now(), dur = 1400;
      (function step(now) {
        const p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (end * eased).toFixed(dec) + (p === 1 ? suf : "");
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
})();

/* ---------- Hero parallax ---------- */
(function parallax() {
  if (reduceMotion) return;
  const el = $("[data-parallax]");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking || window.scrollY > window.innerHeight * 1.2) return;
    ticking = true;
    requestAnimationFrame(() => { el.style.transform = `translateY(${window.scrollY * +el.dataset.parallax}px)`; ticking = false; });
  }, { passive: true });
})();

/* ---------- Custom cursor (desktop mouse only) ---------- */
(function cursor() {
  if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const c = $(".cursor"), dot = $(".cursor-dot"), ring = $(".cursor-ring");
  let x = 0, y = 0, rx = 0, ry = 0, shown = false;
  window.addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; document.body.classList.add("has-cursor"); rx = x; ry = y; }
    dot.style.transform = `translate(${x}px,${y}px)`;
    c.classList.toggle("is-active", !!e.target.closest("a, button, input, textarea, video"));
  }, { passive: true });
  (function loop() {
    rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
})();
