// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Generate property cards
    const properties = [
        { image: 'mansion1.jpg', title: 'Modern Beverly Hills Villa', price: '$2.5M' },
        { image: 'mansion2.jpg', title: 'Luxury Malibu Beach House', price: '$3.8M' },
        { image: 'mansion3.jpg', title: 'Contemporary Downtown Penthouse', price: '$4.2M' },
        { image: 'mansion3.jpg', title: 'Historic Bel-Air Estate', price: '$6.7M' },
        { image: 'mansion1.jpg', title: 'Historic legon Estate', price: '$8.7M' },
        { image: 'mansion2.jpg', title: 'mordern Mumbai beach house', price: '$6.7M' },
    ];

    const container = document.querySelector('.properties-container');
    
    properties.forEach((prop, index) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image">
                <img src="${prop.image}" alt="${prop.title}">
            </div>
            <div class="property-info">
                <h3>${prop.title}</h3>
                <p class="property-price">${prop.price}</p>
            </div>
        `;
        container.appendChild(card);
        
        // Add staggered animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });

    // Scroll animations
    window.addEventListener('scroll', () => {
        // Header background change
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(42,42,42,0.95)';
            header.style.padding = '15px 50px';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '20px 50px';
        }

        // Property card animations
        document.querySelectorAll('.property-card').forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.classList.add('visible');
            }
        });
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero').style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Form input animation
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('.input-border').style.width = '100%';
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.querySelector('.input-border').style.width = '0';
            }
        });
    });
});