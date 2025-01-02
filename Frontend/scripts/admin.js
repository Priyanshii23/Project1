import { baseUrl } from "../../baseurl.js";

let admin = document.getElementById("admin")
admin.addEventListener("submit", async function () {
    event.preventDefault();


    let productName = admin.productName.value;
    let productDescription = admin.productDescription.value;
    let productPrice = admin.productPrice.value;
    let productImage = admin.productImage.value;
    let productCategory = admin.productCategory.value;
    let productRating = admin.productRating.value;

    if (productName == "" || productDescription == "" || productPrice == "" || productImage === "" || productCategory == "" || productRating == "") {
        alert("Please fill all fields...");
    }
    const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        category: productCategory,
        rating: productRating
    };
    try {
        await fetch(`${baseUrl}/products`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)

        })
        alert("Product added successfully!");
        admin.reset()
    } catch (err) {
        console.log(err)
        alert("Something went wrong, please try again...")
    }

})