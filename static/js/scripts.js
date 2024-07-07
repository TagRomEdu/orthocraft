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

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('static/goods.json')
        .then(response => response.json())
        .then(products => {
            products.sort((a, b) => a.price - b.price);

            const productRow = document.getElementById('product-row');
            const modalsContainer = document.getElementById('modals-container');

            products.forEach((product, index) => {
                // Создание карточки продукта
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="product-card" data-bs-toggle="modal" data-bs-target="#productModal${product.id}">
                        <div class="product-image">
                            <img src="${product.image}" alt="logo" class="img-fluid">
                        </div>
                        <div class="product-details p-3 text-center">
                            <h4 class="product-name">${product.name}</h4>
                            <p class="product-price">Цена: ${formatPrice(product.price.toFixed(2))} руб.</p>
                        </div>
                    </div>
                `;
                productRow.appendChild(productCard);

                // Создание модального окна для продукта
                const modal = document.createElement('div');
                modal.className = 'modal fade';
                modal.id = `productModal${product.id}`;
                modal.tabIndex = '-1';
                modal.setAttribute('aria-labelledby', `productModalLabel${product.id}`);
                modal.setAttribute('aria-hidden', 'true');
                modal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="productModalLabel${product.id}">${product.name}</h5>
                                <button type="button" class="btn-close btn-close-blue" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-start">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="${product.image}" alt="logo" class="img-fluid">
                                    </div>
                                    <div class="col-md-6">
                                        <p><strong>Цена:</strong> ${formatPrice(product.price.toFixed(2))} руб.</p>
                                        <p><strong>Описание:</strong></p>
                                        <p>${product.description}. Комплектация индивидуальная</p>
                                        <p><strong>Гарантия:</strong> 6 месяцев</p>
                                        <!-- Добавьте другие детали продукта по вашему усмотрению -->
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info text-white" data-bs-dismiss="modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                `;
                modalsContainer.appendChild(modal);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
});


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
