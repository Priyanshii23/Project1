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

    if (loginEmail === "user@admin.com") {
        if (loginPassword === "admin@123") {
            alert("Logged in as Admin...");
            window.location.href = "admin.html";
        } else {
            alert("Invalid Admin Credentials. Please try again.");
        }
        return;
    }
    try {
        const res = await fetch(`${baseUrl}/users`);
        const users = await res.json();


     
        const filteredUser = users.filter(el => el.email==loginEmail);
            if (filteredUser.length>0) {
                const user = filteredUser[0]
                // if password matches
                if (user.password === loginPassword) {
                     {
                        alert(`Welcome back, ${user.name}!`)
                        window.location.href = "index.html"
                    }


                } else{
                    alert("Invalid Password.. PLease try again...")
                }
            } else{
                alert("Email not found. Please sign up.");
            }
        

    } catch (err) {
        console.log(err)
        alert("Something went wrong. Please try again later.");
    }


})