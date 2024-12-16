const navbar = document.querySelector('nav'); // Select the navbar element
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollPosition && currentScroll > 100) {
        // Scrolling down, hide navbar
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    } else {
        // Scrolling up, show navbar
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    }

    lastScrollPosition = currentScroll;
});
