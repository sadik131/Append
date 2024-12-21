document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enable looping
        autoplay: {
            delay: 5000000, // 5 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

const faqContainer = document.getElementById('faq-container');

faqContainer.addEventListener('click', (event) => {
    const target = event.target.closest('[data-faq]');
    if (!target) return;

    const activeItem = faqContainer.querySelector('.rotate-180');
    const activeText = faqContainer.querySelector('p:not(.hidden)');

    const textElement = target.nextElementSibling;
    const iconElement = target.querySelector('i');

    // Close active item
    if (activeItem && activeItem !== iconElement) {
        activeItem.classList.remove('rotate-[270deg]');
        activeText.classList.add('hidden');
    }

    // Toggle current item
    textElement.classList.toggle('hidden');
    iconElement.classList.toggle('rotate-180');
});


// JavaScript to handle navbar color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const link = document.getElementById('link');
    const logo = document.getElementById('logo');
    const toggle = document.getElementById('navbar-toggle');

    
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        link.classList.add('text-heading');
        logo.classList.add('text-heading');
        logo.classList.remove('text-white');
        toggle.classList.add('text-heading');
        toggle.classList.remove('text-[#ffffff80]');
        navbar.classList.remove('bg-transparent', 'text-navlink');
        link.classList.remove('text-navlink');
    } else {
        toggle.classList.remove('text-heading');
        toggle.classList.add('text-[#ffffff80]');
        logo.classList.add('text-white');
        logo.classList.remove('text-heading');
        navbar.classList.add('bg-transparent');
        link.classList.add('text-navlink');
        navbar.classList.remove('bg-white', 'text-');
        console.log(navbar)
    }

});
