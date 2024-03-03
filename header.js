document.addEventListener('DOMContentLoaded', function() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none'; // Collapse the mobile menu by default
});

function toggleMenu(event) {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = (mobileMenu.style.display === 'flex' || mobileMenu.style.display === '') ? 'none' : 'flex';
  event.stopPropagation(); // Stop the event from propagating further
}

document.addEventListener('click', function(event) {
  var mobileMenu = document.querySelector('.mobile-menu');
  var burgerMenu = document.querySelector('.burger-menu');
  
  // Check if the clicked element is not within the mobile menu or burger menu
  if (!mobileMenu.contains(event.target) && event.target !== burgerMenu) {
    mobileMenu.style.display = 'none'; // Close the mobile menu
  }
});

// Close mobile menu when the screen is resized wider than 900px
window.addEventListener('resize', function () {
  var mobileMenu = document.querySelector('.mobile-menu');
  var screenWidth = window.innerWidth;

  if (screenWidth > 900) {
    mobileMenu.style.display = 'none';
  }
});

// Collapse mobile menu when a link is clicked
var links = document.querySelectorAll('.mobile-menu a');
links.forEach(function(link) {
  link.addEventListener('click', function() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = 'none';
  });
});