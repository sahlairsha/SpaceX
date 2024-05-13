const header = document.getElementById('header-nav');
const menuBtn = document.getElementById('menu-btn');


// Add event listener for scroll event
window.addEventListener('scroll', function() {
  // Check if user has scrolled down
  if (window.scrollY > 100 ) {
    // Add scrolled class to header
    header.classList.add('scrolled');
    menuBtn.classList.add('scrolled');

  }else {
    // Remove scrolled class from header
    header.classList.remove('scrolled');
    menuBtn.classList.remove('scrolled');


  }

});

