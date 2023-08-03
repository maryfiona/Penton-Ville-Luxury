// // Script.js

// // Function to scroll smoothly to a section when a navigation link is clicked
// function smoothScroll(targetId) {
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const targetPosition = targetElement.getBoundingClientRect().top;
//       window.scrollBy({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//   }
  
//   // Attach click event listeners to navigation links
//   document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetSectionId = link.getAttribute('href').replace('#', '');
//         smoothScroll(targetSectionId);
//       });
//     });
//   });
  
// JavaScript to handle navigation link clicks and update the active link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav li a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove the "active" class from all navigation links
        navLinks.forEach(navLink => {
          navLink.parentElement.classList.remove('active');
        });
  
        // Add the "active" class to the clicked navigation link
        link.parentElement.classList.add('active');
      });
    });
  });
  