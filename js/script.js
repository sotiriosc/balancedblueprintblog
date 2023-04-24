// Smooth scroll to anchor links
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const blogPosts = document.querySelectorAll('.blog-posts li');


searchBtn.addEventListener('click', function() {
  const searchText = searchInput.value.toLowerCase();

  blogPosts.forEach(function(blogPost) {
    const title = blogPost.querySelector('.title').innerText.toLowerCase();
    const description = blogPost.querySelector('.description').innerText.toLowerCase();

    if (title.indexOf(searchText) > -1 || description.indexOf(searchText) > -1) {
      blogPost.style.display = 'block';
    } else {
      blogPost.style.display = 'none';
    }
  });
});

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
  