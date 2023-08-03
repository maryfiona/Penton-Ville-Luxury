// Script.js

// Function to scroll smoothly to a section when a navigation link is clicked
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top;
      window.scrollBy({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  // Attach click event listeners to navigation links
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href').replace('#', '');
        smoothScroll(targetSectionId);
      });
    });
  });
  