document.addEventListener('astro:page-load', () => {
  const hamburger = document.querySelector<HTMLElement>('.hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');

      if (navLinks) {
        navLinks.classList.toggle('expanded');
      }
    });
  }
});
