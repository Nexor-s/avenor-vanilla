/* ==========================================================================
   AVENOR VANILLA — скрипты сайта
   Всё выполняется на стороне клиента: без backend, БД и внешних API.
   ========================================================================== */

// -----------------------------------------------------------------------
// 1. Эмблема проекта — гладкий белый полумесяц с мягким свечением.
//    Хранится строкой в JS и вставляется во все .emblem-slot,
//    чтобы избежать проблем с fetch() при открытии сайта напрямую из файла.
// -----------------------------------------------------------------------
const EMBLEM_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="emblem-svg">
  <defs>
    <radialGradient id="moonShade" cx="38%" cy="34%" r="80%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e4e9f5"/>
    </radialGradient>
  </defs>
  <path d="M87.5 53.29 A37.5 37.5 0 1 1 46.71 12.5 A29.17 29.17 0 0 0 87.5 53.29 Z" fill="url(#moonShade)"/>
</svg>
`;

document.querySelectorAll(".emblem-slot").forEach((slot) => {
  slot.innerHTML = EMBLEM_SVG;
});

// -----------------------------------------------------------------------
// 2. Мобильное меню (бургер)
// -----------------------------------------------------------------------
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Закрываем меню при клике на ссылку (для одностраничной навигации)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// -----------------------------------------------------------------------
// 3. Плавное появление блоков при прокрутке
// -----------------------------------------------------------------------
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

revealItems.forEach((item) => revealObserver.observe(item));

// -----------------------------------------------------------------------
// 4. Анимированный фон с частицами (лёгкая ночная пыль/звёзды)
// -----------------------------------------------------------------------
(function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height, particles;

  const PARTICLE_COUNT = window.innerWidth < 700 ? 45 : 90;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      speedY: Math.random() * 0.15 + 0.03,
      speedX: (Math.random() - 0.5) * 0.06,
      twinkle: Math.random() * Math.PI * 2,
      glow: Math.random() < 0.18, // часть частиц — холодные светящиеся "искры"
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.twinkle += 0.02;
      const alpha = 0.35 + Math.sin(p.twinkle) * 0.25;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.glow
        ? `rgba(125, 155, 212, ${alpha})`
        : `rgba(140, 150, 180, ${alpha * 0.6})`;
      ctx.fill();

      // Медленное движение вверх, будто пыль в свете свечей
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
})();
