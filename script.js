/* Section animais */

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");
    tabMenu[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");

      tabMenu.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabMenu[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

/* Section FAQ */

function initFaq() {
  const dts = document.querySelectorAll(".js-faq dt");
  if (dts.length) {
    dts[0].classList.add("mostrar-ativo");
    dts[0].nextElementSibling.classList.add("mostrar-ativo");

    function activeFaq() {
      this.classList.toggle("mostrar-ativo");
      this.nextElementSibling.classList.toggle("mostrar-ativo");
    }

    dts.forEach((item) => {
      item.addEventListener("click", activeFaq);
    });
  }
}
initFaq();

/* Scroll suave links internos */
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    /* Alternativa de scroll
   window.scrollTo({
    top: topo,
    behavior: "smooth",
  }); */
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

/* Animação por scroll */

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const percentualTela = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < percentualTela) {
          section.classList.add("ativo");
        }
        if (sectionTop > percentualTela) {
          section.classList.remove("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
