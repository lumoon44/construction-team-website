/* ============================================================
   КОНФИГ
   ============================================================ */
const SITE_CONFIG = {
  company: {
    name: "Контур",
    nameEn: "Kontur",
    tagline: "Строим пространство, в котором хочется жить",
    description: "Строительная бригада из Костромы. Благоустройство, ландшафтное освещение, архитектурная подсветка.",
    founded: "2018",
    city: "Кострома",
  },
  contacts: {
    phone: "+7 (494) 200-00-00",
    phoneHref: "tel:+74942000000",
    email: "info@kontur-kostroma.ru",
    address: "г. Кострома",
    whatsapp: "https://wa.me/74942000000",
    telegram: "https://t.me/kontur_kostroma",
    vk: "https://vk.com/kontur_kostroma",
  },
  colors: {
    accentWarm: "#d97a1e",
    bg: "#110e0b",
    bgCard: "#161210",
    textPrimary: "#ede8e1",
    textMuted: "#6e6760",
  },
};

/* ============================================================
   ДАННЫЕ ПОРТФОЛИО
   ============================================================ */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    src: "assets/portfolio/work-01.jpg",
    title: "Подсветка стены и газона",
    description: "Янтарная грунтовая подсветка газона вдоль каменной стены. Создаёт тёплый акцент в вечернем ландшафте.",
    category: "Ландшафтное освещение",
    location: "Кострома, частный дом",
    caseNum: "CASE 001",
    year: "2023",
  },
  {
    id: 2,
    src: "assets/portfolio/work-02.jpg",
    title: "Зона у бассейна",
    description: "Тёплая подсветка колонн и перголы. Атмосфера средиземноморского вечера в центральной России.",
    category: "Архитектурная подсветка",
    location: "Костромская область",
    caseNum: "CASE 002",
    year: "2024",
  },
  {
    id: 3,
    src: "assets/portfolio/work-03.jpg",
    title: "Архитектурная подсветка деревьев",
    description: "Пурпурная и розовая подсветка деревьев у фасада. Ночной образ объекта, узнаваемый издалека.",
    category: "Архитектурное освещение",
    location: "Кострома, коммерческий объект",
    caseNum: "CASE 003",
    year: "2024",
  },
];

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initPageIntro();      // первым — блокирует скролл и запускает reveal
  injectConfigData();
  initCursor();
  initProgressBar();
  initNavigation();
  initHeaderScroll();
  initSmoothScroll();
  initScrollReveal();
  initParallax();
  initSplitText();      // учитывает intro-задержку через sessionStorage
  initMarquee();
  initCases();          // fullscreen sticky cases (заменяет initPortfolio)
  initPortfolio();      // no-op если #portfolio-track отсутствует
  initLightbox();
  initTestimonialsSlider();
  initContactForm();
  initMagneticButtons();
  initCounters();
});

/* ============================================================
   INJECT CONFIG DATA
   ============================================================ */
function injectConfigData() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const keys = el.dataset.config.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const keys = el.dataset.configHref.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.href = val;
  });
}

/* ============================================================
   КАСТОМНЫЙ КУРСОР
   ============================================================ */
function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let rafId;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = "a, button, .portfolio-card, .service-card, .value-card, .messenger-btn, .case-slide";

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add("is-hover");
      ring.classList.add("is-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove("is-hover");
      ring.classList.remove("is-hover");
    }
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    ring.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    ring.style.opacity = "1";
  });
}

/* ============================================================
   PROGRESS BAR
   ============================================================ */
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */
function initNavigation() {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu?.querySelectorAll(".nav__link");

  burger?.addEventListener("click", () => {
    const open = burger.classList.toggle("is-open");
    navMenu?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
  });

  navLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      burger?.classList.remove("is-open");
      navMenu?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      burger?.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   ХЕДЕР: hide on scroll down / show on scroll up
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  let lastY = 0;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 60);

    if (y > 120) {
      if (y > lastY + 4) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4) {
        header.classList.remove("is-hidden");
      }
    } else {
      header.classList.remove("is-hidden");
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

/* ============================================================
   ПЛАВНЫЙ СКРОЛЛ
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => {
    const delay = el.dataset.revealDelay ?? 0;
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

/* ============================================================
   ПАРАЛЛАКС HERO
   ============================================================ */
function initParallax() {
  const bg = document.querySelector(".hero__bg");
  if (!bg || window.matchMedia("(max-width: 768px)").matches) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY * 0.3;
        bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   SPLIT-TEXT HERO — TreeWalker (safe, preserves HTML tags)
   ============================================================ */
function initSplitText() {
  const title = document.getElementById("hero-title");
  if (!title) return;

  /* Collect only TEXT nodes (skips <br>, <em> etc.) */
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.textContent.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });

  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  /* Wrap each word in a text node, preserve whitespace as text nodes */
  textNodes.forEach((textNode) => {
    const parts = textNode.textContent.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else {
        const outer = document.createElement("span");
        outer.className = "split-word";
        const inner = document.createElement("span");
        inner.className = "split-word-inner";
        inner.textContent = part;
        outer.appendChild(inner);
        frag.appendChild(outer);
      }
    });
    textNode.parentNode.replaceChild(frag, textNode);
  });

  const inners = title.querySelectorAll(".split-word-inner");
  // На первом визите intro занимает ~1.4s — откладываем split-text
  const baseDelay = sessionStorage.getItem("intro-seen") ? 500 : 1650;
  setTimeout(() => {
    inners.forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), i * 90 + baseDelay);
    });
  }, 50);
}

/* ============================================================
   MARQUEE
   ============================================================ */
function initMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  const items = [
    "Благоустройство территорий",
    "Ландшафтное освещение",
    "Архитектурная подсветка",
    "Кострома",
    "Костромская область",
    "Террасы и беседки",
    "Заборы и ограждения",
    "Под ключ · с 2018",
    "Гарантия 3 года",
    "Бесплатный замер",
  ];

  /* Дублируем для бесшовного loop */
  const doubled = [...items, ...items];
  track.innerHTML = doubled
    .map((t) => `<span class="marquee-item">${t}</span>`)
    .join("");
}

/* ============================================================
   ПОРТФОЛИО — СЛАЙДЕР
   ============================================================ */
function initPortfolio() {
  const track = document.getElementById("portfolio-track");
  if (!track) return;

  let current = 0;
  let touchStartX = 0;

  /* Render slides */
  PORTFOLIO_ITEMS.forEach((item, idx) => {
    const slide = document.createElement("div");
    slide.className = "portfolio-slide";
    slide.setAttribute("aria-label", item.title);

    slide.innerHTML = `
      <img
        class="portfolio-slide__img"
        src="${item.src}"
        alt="${item.title} — ${item.category}"
        loading="${idx === 0 ? 'eager' : 'lazy'}"
        onerror="this.style.display='none'"
      />
      <div class="portfolio-slide__overlay">
        <span class="portfolio-slide__case">${item.caseNum}</span>
        <span class="portfolio-slide__cat">${item.category}</span>
        <h3 class="portfolio-slide__title">${item.title}</h3>
        <span class="portfolio-slide__loc">${item.location}</span>
      </div>
    `;

    slide.addEventListener("click", () => openLightbox(idx));
    track.appendChild(slide);
  });

  /* Dots */
  const dotsWrap = document.getElementById("portfolio-dots");
  PORTFOLIO_ITEMS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "portfolio-dot";
    dot.setAttribute("aria-label", `Проект ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  const dots = dotsWrap?.querySelectorAll(".portfolio-dot");
  const counter = document.getElementById("portfolio-counter");

  function goTo(index) {
    current = ((index % PORTFOLIO_ITEMS.length) + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === current));
    if (counter) {
      counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(PORTFOLIO_ITEMS.length).padStart(2, "0")}`;
    }
  }

  document.getElementById("portfolio-prev")?.addEventListener("click", () => goTo(current - 1));
  document.getElementById("portfolio-next")?.addEventListener("click", () => goTo(current + 1));

  /* Touch swipe */
  const sliderEl = document.getElementById("portfolio-slider");
  sliderEl?.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  sliderEl?.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  goTo(0);
}

/* ============================================================
   ЛАЙТБОКС
   ============================================================ */
let lightboxCurrentIndex = 0;

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  document.getElementById("lb-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lb-prev")?.addEventListener("click", () => navigateLightbox(-1));
  document.getElementById("lb-next")?.addEventListener("click", () => navigateLightbox(1));

  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index) {
  lightboxCurrentIndex = index;
  renderLightboxSlide();
  document.getElementById("lightbox")?.classList.add("is-open");
  document.body.classList.add("lb-open");
  document.getElementById("lb-close")?.focus();
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("is-open");
  document.body.classList.remove("lb-open");
}

function navigateLightbox(dir) {
  lightboxCurrentIndex = (lightboxCurrentIndex + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
  renderLightboxSlide();
}

function renderLightboxSlide() {
  const item = PORTFOLIO_ITEMS[lightboxCurrentIndex];
  const img = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const desc = document.getElementById("lb-desc");
  const counter = document.getElementById("lb-counter");

  if (img) {
    img.style.display = "block";
    img.src = item.src;
    img.alt = item.title;
    img.onerror = () => {
      // Фото нет — скрываем тег <img>, показываем тёмный фон-заглушку
      img.style.display = "none";
      const wrap = img.closest(".lightbox__img-wrap");
      if (wrap && !wrap.querySelector(".lb-no-img")) {
        const placeholder = document.createElement("div");
        placeholder.className = "lb-no-img";
        placeholder.innerHTML = `<span>${item.caseNum}</span>`;
        wrap.insertBefore(placeholder, img);
      }
    };
    // Убираем старую заглушку при переключении слайдов
    const oldPlaceholder = img.closest(".lightbox__img-wrap")?.querySelector(".lb-no-img");
    if (oldPlaceholder) oldPlaceholder.remove();
  }
  if (caption) caption.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (counter) counter.textContent = `${lightboxCurrentIndex + 1} / ${PORTFOLIO_ITEMS.length}`;
}

/* ============================================================
   СЛАЙДЕР ОТЗЫВОВ
   ============================================================ */
const TESTIMONIALS = [
  {
    name: "Александр К.",
    role: "Владелец частного дома, Кострома",
    text: "Команда «Контур» полностью преобразила наш участок. Подсветка дорожек и фасада — выше всяких ожиданий. Работали аккуратно, в срок, без лишних вопросов.",
    rating: 5,
  },
  {
    name: "Марина Е.",
    role: "Коттеджный посёлок «Берег»",
    text: "Заказывали благоустройство общей зоны: дорожки, газон, декоративное освещение. Всё сделано качественно, проект согласовали быстро. Жильцы очень довольны.",
    rating: 5,
  },
  {
    name: "Дмитрий П.",
    role: "Ресторан «Горожане»",
    text: "Архитектурная подсветка фасада дала нам совершенно новый образ. Теперь вечером к нам заходят люди, которые просто проходили мимо — увидели свет.",
    rating: 5,
  },
];

function initTestimonialsSlider() {
  const track = document.getElementById("testimonials-track");
  const dotsWrap = document.getElementById("testimonials-dots");
  if (!track) return;

  let current = 0;
  let autoTimer;

  TESTIMONIALS.forEach((t) => {
    const initials = t.name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const slide = document.createElement("div");
    slide.className = "testimonial-slide";
    slide.innerHTML = `
      <div class="testimonial__quote-mark" aria-hidden="true">"</div>
      <p class="testimonial__text">${t.text}</p>
      <div class="testimonial__author">
        <div class="testimonial__avatar" aria-hidden="true">${initials}</div>
        <div class="testimonial__author-info">
          <strong class="testimonial__name">${t.name}</strong>
          <span class="testimonial__role">${t.role}</span>
        </div>
      </div>
    `;
    track.appendChild(slide);
  });

  TESTIMONIALS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "testimonial-dot";
    dot.setAttribute("aria-label", `Отзыв ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  const dots = dotsWrap?.querySelectorAll(".testimonial-dot");

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function next() { goTo((current + 1) % TESTIMONIALS.length); }
  function startAuto() { autoTimer = setInterval(next, 5000); }
  function stopAuto() { clearInterval(autoTimer); }

  document.getElementById("testimonials-prev")?.addEventListener("click", () => {
    stopAuto();
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    startAuto();
  });

  document.getElementById("testimonials-next")?.addEventListener("click", () => {
    stopAuto();
    next();
    startAuto();
  });

  goTo(0);
  startAuto();

  track.parentElement?.addEventListener("mouseenter", stopAuto);
  track.parentElement?.addEventListener("mouseleave", startAuto);
}

/* ============================================================
   КОНТАКТНАЯ ФОРМА
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name:    { el: form.querySelector('[name="name"]'),    min: 2 },
    phone:   { el: form.querySelector('[name="phone"]'),   pattern: /^[\d\s\+\-\(\)]{10,}$/ },
    message: { el: form.querySelector('[name="message"]'), min: 10 },
  };

  Object.values(fields).forEach(({ el }) => {
    el?.addEventListener("blur", () => validateField(el));
    el?.addEventListener("input", () => {
      if (el.closest(".field")?.classList.contains("has-error")) validateField(el);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = Object.entries(fields).every(([, cfg]) => validateField(cfg.el));
    if (!valid) return;
    submitForm(new FormData(form));
  });

  function validateField(el) {
    if (!el) return true;
    const wrap = el.closest(".field");
    const val = el.value.trim();
    let error = "";

    if (el.name === "name" && val.length < 2) error = "Введите ваше имя";
    if (el.name === "phone" && !/^[\d\s\+\-\(\)]{10,}$/.test(val)) error = "Введите корректный номер";
    if (el.name === "message" && val.length < 10) error = "Сообщение слишком короткое";

    wrap?.classList.toggle("has-error", !!error);
    wrap?.classList.toggle("is-valid", !error && val.length > 0);
    const errEl = wrap?.querySelector(".field__error");
    if (errEl) errEl.textContent = error;

    return !error;
  }

  function submitForm(data) {
    const btn = form.querySelector('[type="submit"]');
    const status = document.getElementById("form-status");

    btn.disabled = true;
    btn.classList.add("is-loading");

    console.log("Форма отправлена:", Object.fromEntries(data));

    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove("is-loading");
      form.reset();
      Object.values(fields).forEach(({ el }) => {
        el?.closest(".field")?.classList.remove("is-valid", "has-error");
      });

      if (status) {
        status.classList.add("is-visible");
        setTimeout(() => status.classList.remove("is-visible"), 5000);
      }
    }, 1200);
  }
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ============================================================
   PAGE INTRO / REVEAL
   ============================================================ */
function initPageIntro() {
  const intro = document.getElementById("page-intro");
  if (!intro) return;

  // Показываем только раз за сессию
  if (sessionStorage.getItem("intro-seen")) {
    intro.remove();
    return;
  }

  // Блокируем скролл на время интро
  document.documentElement.style.overflow = "hidden";

  // Небольшая пауза — чтобы браузер отрисовал панели, затем logo
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      intro.classList.add("is-visible");

      // Начинаем разъезд через 650ms после появления логотипа
      setTimeout(() => {
        intro.classList.add("is-leaving");

        // Ждём окончания анимации панелей (900ms transition)
        setTimeout(() => {
          document.documentElement.style.overflow = "";
          intro.remove();
          sessionStorage.setItem("intro-seen", "1");
        }, 950);
      }, 650);
    });
  });
}

/* ============================================================
   FULLSCREEN CASES — sticky scroll storytelling
   ============================================================ */
// Цветовые темы для ambient glow каждого кейса
const CASE_THEMES = [
  // CASE 001 — Ландшафтное освещение: тёплый янтарь
  { c1: "rgba(217,122,30,0.55)",  c2: "rgba(245,176,55,0.30)", dur1: "15s", dur2: "21s" },
  // CASE 002 — Архитектурная подсветка: cream + amber
  { c1: "rgba(237,232,225,0.20)", c2: "rgba(217,122,30,0.28)", dur1: "19s", dur2: "25s" },
  // CASE 003 — Подсветка деревьев: пурпур + маджента
  { c1: "rgba(139,92,246,0.45)",  c2: "rgba(220,60,240,0.28)", dur1: "13s", dur2: "18s" },
];

function initCases() {
  const wrap   = document.getElementById("cases-sticky-wrap");
  const sticky = document.getElementById("cases-sticky");
  const dotsWrap = document.getElementById("cases-dots");
  if (!wrap || !sticky) return;

  const n = PORTFOLIO_ITEMS.length;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // На десктопе задаём высоту обёртки: каждый кейс = 1.4vh прокрутки
  if (!isMobile) {
    wrap.style.height = `${n * 140}vh`;
  }

  // Рендерим слайды
  PORTFOLIO_ITEMS.forEach((item, idx) => {
    const theme = CASE_THEMES[idx] || CASE_THEMES[0];
    const slide = document.createElement("div");
    slide.className = "case-slide" + (idx === 0 ? " is-active" : "");
    slide.setAttribute("role", "article");
    slide.setAttribute("aria-label", item.title);

    // Инлайн CSS-переменные для уникального glow каждого кейса
    slide.style.cssText = `
      --glow-c1: ${theme.c1};
      --glow-c2: ${theme.c2};
      --glow-dur1: ${theme.dur1};
      --glow-dur2: ${theme.dur2};
    `;

    slide.innerHTML = `
      <div class="case-slide__bg">
        <img
          class="case-slide__img"
          src="${item.src}"
          alt="${item.title} — ${item.category}"
          loading="${idx === 0 ? "eager" : "lazy"}"
          onerror="this.style.display='none'"
        />
        <div class="case-slide__glow" aria-hidden="true">
          <span class="case-slide__glow-blob case-slide__glow-blob--a"></span>
          <span class="case-slide__glow-blob case-slide__glow-blob--b"></span>
          <span class="case-slide__glow-blob case-slide__glow-blob--c"></span>
        </div>
        <div class="case-slide__overlay"></div>
      </div>
      <div class="case-slide__meta-top">
        <span class="case-slide__year">${item.year}</span>
        <span class="case-slide__loc-top">${item.location}</span>
      </div>
      <div class="case-slide__content">
        <span class="case-slide__num">${item.caseNum}</span>
        <span class="case-slide__cat">${item.category}</span>
        <h3 class="case-slide__title">${item.title}</h3>
      </div>
    `;

    slide.addEventListener("click", () => openLightbox(idx));
    // Вставляем ДО блока с dots
    sticky.insertBefore(slide, dotsWrap);
  });

  // Scroll-hint (desktop only)
  if (!isMobile) {
    const hint = document.createElement("div");
    hint.className = "cases-hint";
    hint.innerHTML = `<div class="cases-hint__line"></div><span class="cases-hint__text">Scroll</span>`;
    sticky.appendChild(hint);
  }

  // Dots
  PORTFOLIO_ITEMS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "case-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Кейс ${i + 1}`);
    dot.addEventListener("click", () => scrollToCase(i));
    dotsWrap?.appendChild(dot);
  });

  const slides = sticky.querySelectorAll(".case-slide");
  const dots   = dotsWrap?.querySelectorAll(".case-dot");
  let currentCase = 0;

  function setCase(idx) {
    if (idx === currentCase && slides[idx]?.classList.contains("is-active")) return;
    currentCase = idx;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  }

  function scrollToCase(idx) {
    if (isMobile) return;
    const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
    const segH    = wrap.offsetHeight / n;
    // Прокручиваем к середине сегмента кейса
    window.scrollTo({ top: wrapTop + idx * segH + segH * 0.1, behavior: "smooth" });
  }

  // Десктоп: трекаем прогресс прокрутки внутри обёртки
  if (!isMobile) {
    let rafId;
    window.addEventListener("scroll", () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect       = wrap.getBoundingClientRect();
        const vh         = window.innerHeight;
        const scrollable = wrap.offsetHeight - vh;
        if (scrollable <= 0) return;

        // Ещё не вошли — первый кейс
        if (rect.top > 0) return;

        // Уже вышли из sticky-зоны — фиксируем последний кейс
        if (rect.bottom < vh) {
          setCase(n - 1);
          return;
        }

        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollable));
        const idx      = Math.min(Math.floor(progress * n), n - 1);
        setCase(idx);
      });
    }, { passive: true });
  }

  setCase(0);
}

/* ============================================================
   NUMBER COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1600;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.round(easeOut(progress) * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}
