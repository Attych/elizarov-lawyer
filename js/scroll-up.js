const scrollUpTop = document.querySelector('.scroll-up-top');
const statsSection = document.getElementById('stats');

window.addEventListener('scroll', () => {
  const sectionTop = statsSection.offsetTop;

  if (window.scrollY + window.innerHeight / 2 > sectionTop) {
    scrollUpTop.classList.add('show');
  } else {
    scrollUpTop.classList.remove('show');
  }
});
