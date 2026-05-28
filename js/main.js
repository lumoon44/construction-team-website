/* ============================================================
   КОНФИГ — всё меняется здесь и нигде больше
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
    accentWarm: "#e8a020",
    accentCold: "#4a9eff",
    bg: "#0c0c0c",
    bgCard: "#141414",
    textPrimary: "#f0ede8",
    textMuted: "#7a7672",
  },
};

/* ============================================================
   ДАННЫЕ ПОРТФОЛИО
   Замените src на реальные пути, когда добавите фото
   ============================================================ */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    src: "assets/portfolio/work-01.jpg",
    title: "Подсветка стены и газона",
    description: "Янтарная грунтовая подсветка газона вдоль каменной стены. Создаёт тёплый акцент в вечернем ландшафте.",
    category: "Ландшафтное освещение",
    location: "Кострома, частный дом",
  },
  {
    id: 2,
    src: "assets/portfolio/work-02.jpg",
    title: "Зона у бассейна",
    description: "Тёплая подсветка колонн и перголы. Атмосфера средиземноморского вечера в центральной России.",
    category: "Архитектурная подсветка",
    location: "Костромская область",
  },
  {
    id: 3,
    src: "assets/portfolio/work-03.jpg",
    title: "Архитектурная подсветка деревьев",
    description: "Пурпурная и розовая подсветка деревьев у фасада. Ночной образ объекта, узнаваемый издалека.",
    category: "Архитектурное освещение",
    location: "Кострома, коммерческий объект",
  },
];

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  injectConfigData();
  initNavigation();
  initScrollReveal();
  initParallax();
  initPortfolio();
  initLightbox();
  initTestimonialsSlider();
  initContactForm();
  initSmoothScroll();
  initHeaderScroll();
});

/* Подставляем данные из конфига в DOM */
function injectConfigData() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    const keys = key.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.dataset.configHref;
    const keys = key.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.href = val;
  });
}

/* ============================================================
   НАВИГАЦИЯ: мобильное меню
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
   ХЕДЕР: фон появляется при скролле
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById("header");
  const threshold = 80;

  const update = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > threshold);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ============================================================
   ПЛАВНЫЙ СКРОЛЛ к якорям
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
   SCROLL REVEAL — Intersection Observer
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
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el, i) => {
    /* Задержка для элементов в одной строке */
    const delay = el.dataset.revealDelay ?? i * 80;
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

/* ============================================================
   ЛЁГКИЙ ПАРАЛЛАКС в Hero (CSS transform, не scroll-snap)
   ============================================================ */
function initParallax() {
  const bg = document.querySelector(".hero__bg");
  if (!bg) return;

  /* Отключаем на мобильных для производительности */
  if (window.matchMedia("(max-width: 768px)").matches) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY * 0.35;
          bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/* ============================================================
   ПОРТФОЛИО — рендер карточек из массива
   ============================================================ */
function initPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  PORTFOLIO_ITEMS.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    card.setAttribute("data-reveal", "");
    card.setAttribute("data-reveal-delay", idx * 120);
    card.setAttribute("data-index", idx);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Открыть проект: ${item.title}`);

    card.innerHTML = `
      <div class="portfolio-card__img-wrap">
        <img
          class="portfolio-card__img"
          src="${item.src}"
          alt="${item.title} — ${item.category}"
          loading="lazy"
          onerror="this.closest('.portfolio-card__img-wrap').classList.add('placeholder')"
        />
        <div class="portfolio-card__overlay">
          <span class="portfolio-card__cat">${item.category}</span>
          <h3 class="portfolio-card__title">${item.title}</h3>
          <span class="portfolio-card__location">${item.location}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openLightbox(idx);
    });

    grid.appendChild(card);
  });

  /* Повторно инициализируем reveal для динамически добавленных карточек */
  const newItems = grid.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  newItems.forEach((el) => observer.observe(el));
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
  const lb = document.getElementById("lightbox");
  lb?.classList.add("is-open");
  document.body.classList.add("lb-open");
  document.getElementById("lb-close")?.focus();
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("is-open");
  document.body.classList.remove("lb-open");
}

function navigateLightbox(dir) {
  lightboxCurrentIndex =
    (lightboxCurrentIndex + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
  renderLightboxSlide();
}

function renderLightboxSlide() {
  const item = PORTFOLIO_ITEMS[lightboxCurrentIndex];
  const img = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const desc = document.getElementById("lb-desc");
  const counter = document.getElementById("lb-counter");

  if (img) {
    img.src = item.src;
    img.alt = item.title;
  }
  if (caption) caption.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (counter)
    counter.textContent = `${lightboxCurrentIndex + 1} / ${PORTFOLIO_ITEMS.length}`;
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

  /* Рендер слайдов */
  TESTIMONIALS.forEach((t) => {
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    const slide = document.createElement("div");
    slide.className = "testimonial-slide";
    slide.innerHTML = `
      <div class="testimonial__stars" aria-label="${t.rating} из 5">${stars}</div>
      <p class="testimonial__text">"${t.text}"</p>
      <div class="testimonial__author">
        <strong class="testimonial__name">${t.name}</strong>
        <span class="testimonial__role">${t.role}</span>
      </div>
    `;
    track.appendChild(slide);
  });

  /* Точки навигации */
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

  function next() {
    goTo((current + 1) % TESTIMONIALS.length);
  }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

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

  /* Пауза при ховере */
  track.parentElement?.addEventListener("mouseenter", stopAuto);
  track.parentElement?.addEventListener("mouseleave", startAuto);
}

/* ============================================================
   КОНТАКТНАЯ ФОРМА — валидация + имитация отправки
   Для подключения API: замените тело функции submitForm
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: { el: form.querySelector('[name="name"]'), min: 2 },
    phone: { el: form.querySelector('[name="phone"]'), pattern: /^[\d\s\+\-\(\)]{10,}$/ },
    message: { el: form.querySelector('[name="message"]'), min: 10 },
  };

  /* Живая валидация полей */
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
    const name = el.name;
    const val = el.value.trim();
    let error = "";

    if (name === "name" && val.length < 2) error = "Введите ваше имя";
    if (name === "phone" && !/^[\d\s\+\-\(\)]{10,}$/.test(val)) error = "Введите корректный номер";
    if (name === "message" && val.length < 10) error = "Сообщение слишком короткое";

    wrap?.classList.toggle("has-error", !!error);
    wrap?.classList.toggle("is-valid", !error && val.length > 0);
    const errEl = wrap?.querySelector(".field__error");
    if (errEl) errEl.textContent = error;

    return !error;
  }

  /*
   * Для подключения API: замените console.log на fetch/axios вызов
   * Например: return fetch('/api/contact', { method: 'POST', body: data })
   */
  function submitForm(data) {
    const btn = form.querySelector('[type="submit"]');
    const status = document.getElementById("form-status");

    btn.disabled = true;
    btn.classList.add("is-loading");

    console.log("Форма отправлена:", Object.fromEntries(data));

    /* Имитация запроса к API */
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
