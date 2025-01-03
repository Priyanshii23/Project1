import { baseUrl } from "../../baseurl.js";
import { addToCart } from "./cart.js";
window.addEventListener("load", async function () {
    const products = document.getElementById("healthProducts")

    try {
        const res = await fetch(`${baseUrl}/products?category=health`)
        const healthProducts = await res.json()

        if (healthProducts.length == 0) {
            products.innerHTML = `<p>No health products available.</p>`;
        } else {
            healthProducts.forEach(el => {
                let healthCard = this.document.createElement("div")
                healthCard.classList.add("product");

                healthCard.innerHTML = `
                <img src="${el.image}" alt="${el.name}" class="productImage">
                <h3>${el.name}</h3>
                <p>${el.description}</p>
                <p>Price: $${el.price}</p>
                <p>Rating: ${el.rating} ★</p>
                <button class="add-to-cart" data-id="${el.id}">Add to Cart</button>`

                products.appendChild(healthCard);
                const addToCartBtn = healthCard.querySelector(".add-to-cart");
                addToCartBtn.addEventListener("click", function () {
                    addToCart(el)
                })
            });
        }
    } catch (err) {
        alert("Something went wrong...")
        console.log(err)
    }
})