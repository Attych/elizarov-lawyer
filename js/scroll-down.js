document.addEventListener('DOMContentLoaded', () => {
    const scrollDown = document.querySelector('.scroll-down');
    let lastScrollTop = 0;
  
    function toggleScrollDown() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollDown) {
        if (currentScroll < 100) {
          // Если почти наверху — показываем стрелку
          scrollDown.classList.remove('hidden');
        } else if (currentScroll > lastScrollTop) {
          // Если скроллим ВНИЗ — скрываем стрелку
          scrollDown.classList.add('hidden');
        } else {
          // Если скроллим ВВЕРХ — показываем стрелку снова
          scrollDown.classList.remove('hidden');
        }
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // чтобы не было отрицательных значений
    }
  
    window.addEventListener('scroll', toggleScrollDown);
  });
  