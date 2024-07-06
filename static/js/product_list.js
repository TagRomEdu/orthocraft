document.addEventListener('DOMContentLoaded', function() {
    fetch('static/goods.json')
        .then(response => response.json())
        .then(products => {
            const productRow = document.getElementById('product-row');
            const modalsContainer = document.getElementById('modals-container');

            products.forEach((product, index) => {
                // Создание карточки продукта
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="product-card" data-bs-toggle="modal" data-bs-target="#productModal${index + 1}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        </div>
                        <div class="product-details p-3 text-center">
                            <h4 class="product-name">${product.name}</h4>
                            <p class="product-price">Цена: ${product.price} руб.</p>
                        </div>
                    </div>
                `;
                productRow.appendChild(productCard);

                // Создание модального окна для продукта
                const productModal = document.createElement('div');
                productModal.className = 'modal fade';
                productModal.id = `productModal${index + 1}`;
                productModal.tabIndex = -1;
                productModal.setAttribute('aria-labelledby', `productModalLabel${index + 1}`);
                productModal.setAttribute('aria-hidden', 'true');
                productModal.innerHTML = `
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="productModalLabel${index + 1}">${product.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-start">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                                    </div>
                                    <div class="col-md-6">
                                        <p><strong>Цена:</strong> ${product.price} руб.</p>
                                        <p><strong>Описание:</strong> ${product.description !== 'nan' ? product.description : 'Материалы слишком ценны, чтобы их показывать всем подряд'}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                `;
                modalsContainer.appendChild(productModal);
            });
        });
});
