import { baseUrl } from "../../baseurl.js";
let loginform = document.getElementById("login-form")
loginform.addEventListener("submit", async function () {
    event.preventDefault()

    let loginEmail = loginform.loginEmail.value;
    let loginPassword = loginform.loginPassword.value;
    //if email or password fields is empty
    if (loginEmail == "" || loginPassword == "") {
        alert("Please fill all fields...");
    }
    //if email present in db

    try {
        const res = await fetch(`${baseUrl}/users`);
        const users = await res.json();

        const user = users.map(el => {
            if (el.email = loginEmail) {
                // if password matches
                if (el.password == loginPassword) {
                    alert(`Welcome back, ${el.name}!`)
                    window.location.href = "index.html"

                }
            }
        })

    } catch (err) {
        console.log(err)
    }


})