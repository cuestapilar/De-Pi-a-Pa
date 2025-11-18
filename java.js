// Datos de productos (simulación de una base de datos)
const productsData = [
    { id: 1, name: "Juego de Sábanas Algodón Pima", price: 75000, image: "juegosabanaspima.jpg" },
    { id: 2, name: "Toallón de Baño XL Bambú", price: 25000, image: "toallonbambu.jpg" },
    { id: 3, name: "Funda de Almohada Lino Rústico", price: 12000, image: "linorustico.jpg" },
    { id: 4, name: "Cubrecama Queen Matelaseado", price: 98000, image: "matelaseado.jpg" }
];

let cart = []; // Array para almacenar los productos en el carrito

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();

    // Evento para el botón del carrito (simulación de apertura)
    document.getElementById('cart-button').addEventListener('click', () => {
        alert(`🛒 Carrito de Compras:\n\nTotal de artículos: ${cart.length}\n(Función de Checkout en desarrollo)`);
    });
});

/**
 * Función para renderizar dinámicamente las tarjetas de productos.
 */
function renderProducts() {
    const container = document.getElementById('productos');
    const productGrid = document.createElement('div');
    productGrid.classList.add('product-grid');

    productsData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='placeholder.jpg';">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toLocaleString('es-AR')}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
        `;

        productGrid.appendChild(card);
    });

    container.appendChild(productGrid);

    // Añadir listeners a los botones de "Añadir al Carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

/**
 * Función que añade un producto al carrito.
 */
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = productsData.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`✅ "${product.name}" añadido al carrito!`);
    }
}

/**
 * Función para actualizar el contador visual del carrito.
 */
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}