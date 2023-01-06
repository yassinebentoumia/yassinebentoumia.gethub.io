document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for menu icon
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('shrink');
  });

  // Add event listener for scrolling
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
      nav.classList.add('shrink');
    } else {
      nav.classList.remove('shrink');
    }
  });
});
