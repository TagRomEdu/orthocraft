function scrollLight() {
    document.getElementById('product-row').scrollBy({
        left: -440,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('product-row').scrollBy({
        left: 440,
        behavior: 'smooth'
    });
}


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
});

navbar.addEventListener('mouseenter', () => {
    navbar.style.transform = 'translateY(0)';
});

navbar.addEventListener('mouseleave', () => {
    if (window.scrollY > 50) {
        navbar.style.transform = 'translateY(-100%)';
    }
});
