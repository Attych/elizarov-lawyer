document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const contactButton = document.querySelector('.contact-button');
      contactButton.classList.add('show');
    }, 2500 ); // Появление через 2.5 секунды
  });
  
  console.log('contact-buttons.js загружен!')
