export function addToCart(products) {
    // Retrieve the cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Use `find()` to locate the product in the cart
    const existingProduct = cart.find(item => item.id === products.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if the product exists
    } else {
        products.quantity = 1; // Set initial quantity for new product
        cart.push(products); // Add new product to the cart
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${products.name} has been added to your cart.`);
    console.log("Cart contents after adding product:", JSON.parse(localStorage.getItem("cart")));

    // Re-render the cart to show the updated list
    renderCart();
}

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart");
    const totalAmountElem = document.getElementById("totalAmount");

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
        totalAmountElem.textContent = '0';
    } else {
        cartContainer.innerHTML = ''; // Clear previous content
        let total = 0;

        cart.forEach(item => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");

            productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="productImage">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: 
                    <button class="decrease-btn" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase-btn" data-id="${item.id}">+</button>
                </p>
            `;

            cartContainer.appendChild(productDiv);
            total += item.price * item.quantity; // Calculate total

            // Add event listeners for increase/decrease buttons
            productDiv.querySelector(".increase-btn").addEventListener("click", function() {
                updateQuantity(item.id, "increase");
            });

            productDiv.querySelector(".decrease-btn").addEventListener("click", function() {
                updateQuantity(item.id, "decrease");
            });
        });

        totalAmountElem.textContent = total.toFixed(2); // Show the total amount
    }
}

function updateQuantity(productId, action) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(item => item.id === productId);

    if (product) {
        if (action === "increase") {
            product.quantity += 1; // Increase quantity
        } else if (action === "decrease" && product.quantity > 1) {
            product.quantity -= 1; // Decrease quantity (cannot be less than 1)
        }

        // Save the updated cart
        localStorage.setItem("cart", JSON.stringify(cart));

        // Re-render the cart
        renderCart();
    }
}

// // Checkout button functionality
// let checkoutBtn = document.getElementById("checkoutBtn");
// checkoutBtn.addEventListener("click", function () {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     if (cart.length === 0) {
//         alert("Your cart is empty! Add items before checkout.");
//     } else {
//         alert("Proceeding to payment...");
//         localStorage.removeItem("cart");  // Clear cart after checkout
//         renderCart();  // Refresh the cart to show it's empty
//     }
// });

// Ensure the cart loads when the page is ready
window.addEventListener("load", renderCart);
