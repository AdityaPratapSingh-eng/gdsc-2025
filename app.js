function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}


const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120;
  sections.forEach(section => {
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});
