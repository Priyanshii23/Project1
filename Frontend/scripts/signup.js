import { baseUrl } from "../../baseurl.js";

let signupform = document.getElementById("signup-form")
signupform.addEventListener("submit", async function(){
    event.preventDefault()
    let name = signupform.name.value;
    let email = signupform.email.value;
    let mobile = signupform.mobile.value;
    let password = signupform.password.value;

    if (name == "" || email == "" || password == "" || mobile == "") {
        alert("Please fill all fields...");
    } 
    try{
        const res = await fetch(`${baseUrl}/users`);
        const users = await res.json();
       let userExists = false;
       users.map(el => {
           if (el.email === email) {
               userExists = true;
           }
       });

       if (userExists) {
           alert("You're already registered... Please Login");
           window.location.href = "login.html";
           return;
       } else {
           const newUser = { name, email, mobile, password };
           await fetch(`${baseUrl}/users`, {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(newUser),
           });
           alert("Signup Successful! Please Login...");
           window.location.href = "login.html";
       }
   } catch (err) {
       console.error("Error during signup:", err);
       alert("Something went wrong! Please try again later.");
   }
});
   