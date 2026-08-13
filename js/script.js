
(function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked (optional but good UX)
    const links = navLinks.querySelectorAll('li');
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all, add to clicked
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Close menu on mobile
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', function (e) {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle window resize: if menu is open and screen becomes wide, close it
    window.addEventListener('resize', function () {
        if (window.innerWidth > 820 && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
})();

const cartDetails = document.getElementById("cart-details");
const cartButton = document.getElementById("cart-button");
const cartClose = document.getElementById("cart-close");

cartButton.addEventListener("click",()=> {
    cartDetails.classList.toggle("open");
})

cartClose.addEventListener("click",()=> {
    cartDetails.classList.toggle("open");
})

