document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.getElementById('stats');
    const cards = document.querySelectorAll('.flip-card');
    let animated = false;
    
    function isSectionCenterVisible() {
      const rect = statsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
    
      return (
        sectionCenter > windowHeight / 3 &&
        sectionCenter < windowHeight * 2 / 3
      );
    }
    
    function checkAndAnimateCards() {
      if (isSectionCenterVisible()) {
        if (!animated) {
          animated = true;
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('aos-animate'); // Переворот вперёд
            }, index * 600); // Медленно: 600 мс между карточками
          });
        }
      } else {
        if (animated) {
          animated = false;
          [...cards].reverse().forEach((card, index) => {  // ВАЖНО: .reverse()
            setTimeout(() => {
              card.classList.remove('aos-animate'); // Переворот обратно
            }, index * 300); // Быстрее: 300 мс между карточками
          });
        }
      }
    }
    
    window.addEventListener('scroll', checkAndAnimateCards);
  });
  