export default function initActiveMenu() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
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
