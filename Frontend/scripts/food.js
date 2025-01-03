import { baseUrl } from "../../baseurl.js";
import { addToCart } from "./cart.js";

window.addEventListener("load", async function () {

    const products = document.getElementById("foodProduct")
    try {
        const res = await fetch(`${baseUrl}/products?category=food`)
        const foodProducts = await res.json();

        //checking if products are available
        if (foodProducts.length == 0) {
            products.innerHTML = `<p>No food products available.</p>`
        } else {
            foodProducts.forEach(el => {
                let foodCard = document.createElement("div");
                foodCard.classList.add("product"); //created class for styling

                foodCard.innerHTML =
                    `
                         <img src = "${el.image}" alt ="${el.name}" class = "productImage">
                         <h3>${el.name}</h3>
                         <p>${el.description}</p>
                         <p>Price: $${el.price}</p>
                         <p>Rating: ${el.rating} ★</p>
                         <button class="add-to-cart" data-id="${el.id}">Add to Cart</button>
                         `
                        products.appendChild(foodCard)
                        const addToCartBtn = foodCard.querySelector(".add-to-cart");
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