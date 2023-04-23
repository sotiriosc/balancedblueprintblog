// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Open mobile navigation menu
  document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('mobile-menu-open');
  });
  
  // Close mobile navigation menu when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.closest('.mobile-menu-toggle') || e.target.closest('nav')) {
      return;
    }
    document.querySelector('nav').classList.remove('mobile-menu-open');
  });
  