
// Add new recommendation
const recommendationInput = document.getElementById('recommendation-input');
const addRecommendationButton = document.getElementById('add-recommendation');
const recommendationItems = document.querySelector('.recommendation-items');

addRecommendationButton.addEventListener('click', () => {
  const recommendationText = recommendationInput.value.trim();

  if (recommendationText !== '') {
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation-item');

    newRecommendation.innerHTML = `
      <p>"${recommendationText}"</p>
      <p>- Anonymous</p>
    `;

    recommendationItems.appendChild(newRecommendation);
    recommendationInput.value = '';
    showConfirmationPopup('Recommendation added successfully!');
  }
});

// Smooth scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky header
const header = document.querySelector('header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  lastScrollPosition = currentScrollPosition;
});

// Theme switching
const themeToggle = document.getElementById('theme-toggle');
let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
  if (currentTheme === 'light') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    currentTheme = 'dark';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    currentTheme = 'light';
  }
});

// Confirmation popup
function showConfirmationPopup(message) {
  const popup = document.createElement('div');
  popup.classList.add('confirmation-popup');
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('show');
  }, 100);

  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 300);
  }, 3000);
}