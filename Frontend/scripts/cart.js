// import { baseUrl } from "../../baseurl.js";

 export function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.filter(item => item.id==product.id);
    if(existingProduct){
        existingProduct.quantity+=1;
    } else{
        product.quantity=1;
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`)

}