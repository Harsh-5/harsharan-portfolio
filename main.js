/* =========================================================
   main.js — renders PORTFOLIO data into the page.
   You normally won't need to edit this; edit js/data.js.
   ========================================================= */
(function () {
  "use strict";
  const D = window.PORTFOLIO || {};
  const $  = (s, c = document) => c.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ---------- Hero stats already in HTML; wire resume + photo ---------- */
  function profileBits() {
    const p = D.profile || {};
    const r = $("#resumeLink");
    if (r && p.resume) r.href = p.resume;
    // Photo fallback to initials if image missing (handles error that
    // may have already fired before this script ran).
    const img = $("#profilePhoto");
    if (img) {
      const hide = () => { img.style.display = "none"; };
      img.addEventListener("error", hide);
      if (img.complete && img.naturalWidth === 0) hide();
    }
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Strengths ---------- */
  function strengths() {
    const ul = $("#strengthsList"); if (!ul) return;
    (D.strengths || []).forEach((s) => ul.appendChild(el("li", null, esc(s))));
  }

  /* ---------- Experience ---------- */
  function experience() {
    const wrap = $("#timeline"); if (!wrap) return;
    (D.experience || []).forEach((j) => {
      const item = el("div", "tl-item reveal");
      const meta = el("div", "tl-meta");
      meta.appendChild(el("div", "tl-date", esc(j.date)));
      meta.appendChild(el("div", "tl-loc", esc(j.location || "")));
      const body = el("div", "tl-body");
      body.appendChild(el("h3", null, esc(j.role)));
      const orgLine = esc(j.org) + (j.orgNote ? ` <small>· ${esc(j.orgNote)}</small>` : "") +
        (j.team ? ` <small>· ${esc(j.team)}</small>` : "");
      body.appendChild(el("div", "tl-org", orgLine));
      const ul = el("ul", "tl-points");
      (j.points || []).forEach((p) => ul.appendChild(el("li", null, esc(p))));
      body.appendChild(ul);
      if (j.stack && j.stack.length) {
        const st = el("div", "tl-stack");
        j.stack.forEach((s) => st.appendChild(el("span", "chip", esc(s))));
        body.appendChild(st);
      }
      item.appendChild(meta); item.appendChild(body);
      wrap.appendChild(item);
    });
  }

  /* ---------- Projects + filters ---------- */
  function projects() {
    const grid = $("#projectGrid"); const filters = $("#projectFilters");
    if (!grid) return;
    const data = D.projects || [];
    const types = ["all", ...new Set(data.map((p) => p.type))];
    const label = { all: "All", work: "Work", personal: "Personal" };

    types.forEach((t, i) => {
      const b = el("button", "filter-btn" + (i === 0 ? " active" : ""), label[t] || t);
      b.dataset.filter = t;
      b.addEventListener("click", () => {
        filters.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        grid.querySelectorAll(".card").forEach((c) => {
          c.style.display = (t === "all" || c.dataset.type === t) ? "" : "none";
        });
      });
      filters.appendChild(b);
    });

    data.forEach((p) => {
      const card = el("div", "card reveal");
      card.dataset.type = p.type;
      const top = el("div", "card__top");
      top.appendChild(el("span", "card__tag card__tag--" + p.type, p.type === "work" ? "Work" : "Personal"));
      top.appendChild(el("span", "card__icon", p.icon || "•"));
      card.appendChild(top);
      card.appendChild(el("h3", null, esc(p.title)));
      if (p.date) card.appendChild(el("div", "card__date", esc(p.date)));
      card.appendChild(el("p", null, esc(p.blurb)));
      if (p.stack && p.stack.length) {
        const st = el("div", "card__stack");
        p.stack.forEach((s) => st.appendChild(el("span", "chip", esc(s))));
        card.appendChild(st);
      }
      if (p.links && p.links.length) {
        const lk = el("div", "card__links");
        p.links.forEach((l) => {
          const a = el("a", null, esc(l.label) + " ↗");
          a.href = l.url; a.target = "_blank"; a.rel = "noopener";
          lk.appendChild(a);
        });
        card.appendChild(lk);
      }
      grid.appendChild(card);
    });
  }

  /* ---------- Skills + certs ---------- */
  function skills() {
    const grid = $("#skillsGrid");
    if (grid) (D.skills || []).forEach((g) => {
      const box = el("div", "skill-group reveal");
      box.appendChild(el("h3", null, esc(g.group)));
      const tags = el("div", "skill-tags");
      (g.items || []).forEach((i) => tags.appendChild(el("span", null, esc(i))));
      box.appendChild(tags);
      grid.appendChild(box);
    });
    const cl = $("#certList");
    if (cl) (D.certifications || []).forEach((c) => cl.appendChild(el("li", null, esc(c))));
  }

  /* ---------- Beyond work ---------- */
  function beyond() {
    const ig = $("#interestsGrid");
    if (ig) (D.interests || []).forEach((i) => {
      const box = el("div", "interest reveal");
      box.appendChild(el("div", "interest__icon", i.icon || "•"));
      box.appendChild(el("h3", null, esc(i.title)));
      box.appendChild(el("p", null, esc(i.text)));
      ig.appendChild(box);
    });
    const ll = $("#langList");
    if (ll) (D.languages || []).forEach((l) => {
      const li = el("li");
      li.appendChild(el("span", null, `${esc(l.name)} <span style="color:var(--muted);font-size:.8em">· ${esc(l.note)}</span>`));
      const lvl = el("span", "lvl");
      for (let k = 1; k <= 3; k++) lvl.appendChild(el("span", "dot" + (k <= l.level ? " on" : "")));
      li.appendChild(lvl);
      ll.appendChild(li);
    });
    const cm = $("#communityList");
    if (cm) (D.communities || []).forEach((c) => cm.appendChild(el("li", null, esc(c))));
  }

  /* ---------- Contact ---------- */
  function contact() {
    const wrap = $("#contactLinks"); if (!wrap) return;
    const p = D.profile || {};
    const links = [
      { label: "✉  Email me", url: "mailto:" + p.email, primary: true },
      { label: "in  LinkedIn", url: p.linkedin },
      { label: "</>  GitHub", url: p.github },
    ];
    links.forEach((l) => {
      if (!l.url) return;
      const a = el("a", l.primary ? "primary" : null, esc(l.label));
      a.href = l.url;
      if (!l.url.startsWith("mailto")) { a.target = "_blank"; a.rel = "noopener"; }
      wrap.appendChild(a);
    });
  }

  /* ---------- Education ---------- */
  function education() {
    const wrap = $("#eduList"); if (!wrap) return;
    (D.education || []).forEach((e) => {
      const card = el("div", "edu-card reveal");
      const head = el("div", "edu-card__head");
      head.appendChild(el("h3", null, esc(e.degree)));
      if (e.gpa) head.appendChild(el("span", "edu-gpa", esc(e.gpa)));
      card.appendChild(head);
      card.appendChild(el("div", "edu-school", esc(e.school)));
      card.appendChild(el("div", "edu-meta mono", `${esc(e.date)}${e.location ? " · " + esc(e.location) : ""}`));
      if (e.detail) card.appendChild(el("p", "edu-detail", esc(e.detail)));
      wrap.appendChild(card);
    });
  }

  /* ---------- How I built this with AI ---------- */
  function buildWithAI() {
    const b = D.buildWithAI; if (!b) return;
    const intro = $("#aiIntro"); if (intro) intro.textContent = b.intro || "";

    const stats = $("#aiStats");
    if (stats) (b.stats || []).forEach((s) => {
      const card = el("div", "ai-stat reveal");
      card.appendChild(el("div", "ai-stat__val", esc(s.value)));
      card.appendChild(el("div", "ai-stat__label", esc(s.label)));
      stats.appendChild(card);
    });

    const eff = $("#aiEfficiency");
    if (eff) (b.efficiency || []).forEach((t) => eff.appendChild(el("li", null, esc(t))));
    const imp = $("#aiImprovements");
    if (imp) (b.improvements || []).forEach((t) => imp.appendChild(el("li", null, esc(t))));

    const pr = $("#aiPrinciple");
    if (pr && b.principle) pr.textContent = b.principle;
  }

  /* ---------- Nav: scroll state, mobile menu ---------- */
  function nav() {
    const bar = $("#nav"), burger = $("#navToggle"), links = $(".nav__links");
    window.addEventListener("scroll", () => bar.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
    if (burger && links) {
      burger.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        burger.setAttribute("aria-expanded", open);
      });
      links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
        links.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
      }));
    }
  }

  /* ---------- Theme toggle (remembers choice) ---------- */
  function theme() {
    const btn = $("#themeToggle"); if (!btn) return;
    const KEY = "hg-theme";
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const set = (mode) => {
      document.documentElement.setAttribute("data-theme", mode);
      btn.querySelector(".theme-toggle__icon").textContent = mode === "dark" ? "☀" : "◐";
    };
    set(saved || (prefersDark ? "dark" : "light"));
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      set(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---------- Scroll reveal ---------- */
  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    profileBits(); strengths(); experience(); projects(); skills();
    education(); beyond(); buildWithAI(); contact();
    nav(); theme(); reveal();
  });
})();
