document.addEventListener('DOMContentLoaded', function() {
  const fixedNavbar = document.getElementById('fixedNavbar');

  if (fixedNavbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        fixedNavbar.classList.add('show-navbar');
      } else {
        fixedNavbar.classList.remove('show-navbar');
      }
    });
  } else {
    console.error('Не найден элемент #fixedNavbar');
  }
});

console.log("navbar.js загружен!");
