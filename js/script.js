// mobole navbar
const toggleButton = document.getElementById('navbar-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeButton = document.getElementById('close-navbar');

// Open the mobile nav
toggleButton.addEventListener('click', () => {
    mobileNav.classList.remove('hidden'); // Show the mobile nav
    toggleButton.classList.add('hidden'); // Hide the hamburger button
});

// Close the mobile nav
closeButton.addEventListener('click', () => {
    mobileNav.classList.add('hidden'); // Hide the mobile nav
    toggleButton.classList.remove('hidden'); // Show the hamburger button
});

// Close the mobile nav when clicking outside the menu
mobileNav.addEventListener('click', (event) => {
    if (event.target === mobileNav) {
        mobileNav.classList.add('hidden'); // Hide the mobile nav
        toggleButton.classList.remove('hidden'); // Show the hamburger button
    }
});


function toggleDropdown(event, dropdownId) {
  event.preventDefault();

  // Get the dropdown menu and toggle visibility
  const dropdownMenu = document.getElementById(dropdownId);
  dropdownMenu.classList.toggle('hidden');

  // Find the <span> element within the clicked <a> tag
  const spanElement = event.target.querySelector('span') || event.target.closest('a').querySelector('span');

  if (spanElement) {
    // Toggle the required classes for the <span>
    if (dropdownMenu.classList.contains('hidden')) {
      // Reset to original state
      spanElement.classList.remove('bg-primary', 'text-white','rotate-180');
      spanElement.classList.add('bg-[#e8454515]');
      console.log(spanElement)
    } else {
      // Apply active state
      spanElement.classList.add('bg-primary', 'text-white','rotate-180');
      spanElement.classList.remove('bg-[#e8454515]');
    }
  }
}


// swiper
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

// faq section
document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ headers
    const faqHeaders = document.querySelectorAll('[data-faq]');
    if (faqHeaders.length === 0) return;

    // Ensure the first FAQ is open by default
    const firstFAQHeader = faqHeaders[0];
    const firstFAQContent = firstFAQHeader.nextElementSibling;
    const firstFAQIcon = firstFAQHeader.querySelector('#icon');

    firstFAQContent.classList.remove('hidden');
    firstFAQContent.style.maxHeight = firstFAQContent.scrollHeight + 'px';
    firstFAQHeader.classList.add('text-primary'); // Highlight the first header
    firstFAQIcon.classList.remove('-rotate-90');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling; // The corresponding FAQ content
            const icon = header.querySelector('#icon'); // The icon within the clicked header

            // Close all FAQs and reset their header styles
            faqHeaders.forEach(otherHeader => {
                const otherContent = otherHeader.nextElementSibling;
                const otherIcon = otherHeader.querySelector('#icon');

                otherContent.classList.add('hidden');
                otherContent.style.maxHeight = null; // Reset max height
                otherHeader.classList.remove('text-primary'); // Remove primary color from other headers
                otherIcon.classList.add('-rotate-90'); // Rotate icons back
            });

            // Toggle the clicked FAQ
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.style.maxHeight = content.scrollHeight + 'px'; // Expand content
                header.classList.add('text-primary'); // Highlight active header
                icon.classList.remove('-rotate-90'); // Adjust icon rotation
            } else {
                content.classList.add('hidden');
                content.style.maxHeight = null; // Collapse content
                header.classList.remove('text-primary'); // Remove highlight
                icon.classList.add('-rotate-90'); // Rotate icon back
            }
        });
    });
});





// JavaScript to handle navbar color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const link = document.getElementById('link');
    const a = link.querySelectorAll('a');
    const logo = document.getElementById('logo');
    const toggle = document.getElementById('navbar-toggle');

    
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        logo.classList.add('text-heading');
        a.forEach((element) => {
            element.classList.add('text-heading');
            element.classList.remove("text-navlink")
            element.classList.remove("hover:text-white")
            element.classList.remove("text-white")
            element.classList.add("hover:text-primary")
        });
        logo.classList.remove('text-white');
        toggle.classList.add('text-heading');
        toggle.classList.remove('text-[#ffffff80]');
        navbar.classList.remove('bg-transparent', 'text-navlink');
        link.classList.remove('text-navlink');
    } else {
        toggle.classList.remove('text-heading');
        toggle.classList.add('text-[#ffffff80]');
        logo.classList.add('text-white');
        a.forEach((element) => {
            element.classList.remove('text-heading');
            element.classList.add("hover:text-white")
            element.classList.add("text-navlink")
            element.classList.remove("hover:text-primary")
        });
        logo.classList.remove('text-heading');
        navbar.classList.add('bg-transparent');
        link.classList.add('text-navlink');
        navbar.classList.remove('bg-white', 'text-');
    }

});


// count 
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.project__count span:first-child'); // Select all counters

    counters.forEach(counter => {
        const target = parseInt(counter.textContent, 10); // Get the target number
        counter.textContent = '0'; // Start the count from 0

        const increment = Math.ceil(target / 100); // Calculate the increment step
        let currentValue = 0;

        const updateCounter = () => {
            currentValue += increment;

            if (currentValue >= target) {
                counter.textContent = target; // Ensure the counter ends at the target value
                clearInterval(interval); // Stop the interval
            } else {
                counter.textContent = currentValue;
            }
        };

        const interval = setInterval(updateCounter, 20); // Update every 20ms
    });
});


// animation

const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: "3000",
    delay: 600,
  })
  
  sr.reveal(".hero__continer", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".brance__container", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".about__text", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".about__cards > div", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".project__count", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".side__text", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".heading__text", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
  sr.reveal(".cards__card > div", {
    duration: "1500",
    distance: "100px",
    interval: 200
  })
