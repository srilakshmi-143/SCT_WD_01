// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#062859';
  } else {
    navbar.style.backgroundColor = '#0d47a1';
  }

  // Reveal sections
  revealSections();
});

// Reveal sections when they enter viewport
function revealSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

// Initial reveal
window.addEventListener('load', revealSections);