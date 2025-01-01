const navbar = `
          <div id="nav1">
            <div id="navleft">
             <img src="./Cuddle care/CuddleCarelogo.png" alt="CuddleCarelogo">
              
                <div id="deliverto">
                    Delivery to

                    <select name="" id="deliver">
                        <option value=""></option>
                    </select>
                </div>
            </div>

            <div id="nav-right">
                <button>Download App</button>
                <a href="./login.html"> Hello, Log in</a>
                <a href="./offer.html">Offers</a>
                <a href="./cart.html">Cart</a>
            </div>
        </div>
        <div id="nav2">
            <a href="category.html">Categories</a>
            <a href="health.html">Health</a>
            <a href="food.html">Food</a>
            <a href="fashion.html">Fashion</a>
            <a href="bath.html">Bath</a>
        </div>`


document.getElementById("nav").innerHTML = navbar