export default function initActiveMenu() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  const navbar = document.querySelector(".navbar-glass");

  const updateNavbarState = () => {
    if (!navbar) return;

    navbar.classList.toggle("navbar-scrolled", window.scrollY > 16);
  };

  updateNavbarState();

  window.addEventListener("scroll", () => {
    updateNavbarState();
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - window.innerHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (current && a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });
}
