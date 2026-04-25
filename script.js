// Smooth scroll animation for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load products from JSON and display them
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();

        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price} ₸</p>
                <button class="add-to-cart-btn">Добавить в корзину</button>
            `;

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('product-list').innerHTML = '<p>Ошибка загрузки товаров</p>';
    }
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    initSmoothScroll();
});