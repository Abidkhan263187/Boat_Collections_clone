// import { goToBW } from "../index.js"
function navbar(){
    return ` <nav>
    <div>
        <a href="index.html"><img  class="logo"src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" alt="logo" onclick="showMain()"></a>
        <div>
            <span>
                <a href="#"  class="dropbtn">Categories</a>
                <i class="fa-solid fa-chevron-down"></i>
                <div id="myDropdown" class="dropdown-content">
                    <div >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600" alt="">
                        <a onclick="goToWL()" href="./products/product.html">Airdopes True Wireless</a>
                    </div>
                    <div >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_100x.png?v=1663752867" alt="">
                        <a  onclick="goToWH()" href="./products/product.html">Rockerz Wireless</a>
                    </div>
                    <div >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-Copy_dcaa5c5f-2574-4a71-ba0e-a77e7a82abfa_600x.png?v=1678190676" alt="">
                       <a onclick="goToW()" href="./products/product.html"> Smart Watches</a>
                    </div>
                    <div >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167" alt="">
                        <a  onclick="goToBW()"href="./products/product.html">Bassheads Wired</a> 
                    </div>
                    <div >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243" alt="">
                         <a  onclick="goToSS()" href="./products/product.html">Stone Speakers</a> 
                    </div>
                    <div onclick="goToAH()">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1663753280" alt="">
                        <p>Aavante Home Audio</p>
                    </div>
                    <div onclick="goToMA()">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/cables_1_100x.png?v=1678374618" alt="">
                        <p>Mobile Accessories</p>
                    </div>
                    <div onclick="goToW()">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1675683871" alt="">
                        <p>Trebel for Women</p>
                    </div>
                    <div class="limited_ed" >
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_100x.png?v=1675683940" alt="">
                        <a  onclick="goToLE()" href="./products/product.html">Limited Edition</a> 
                    </div>
                    <div onclick="goToT()">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_100x.png?v=1663753379" alt="">
                        <p>Misfit Trimmers</p>
                    </div>
                    <div onclick="goToIG()">
                        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_100x.png?v=1663753419" alt="">
                        <p>Immortal Gaming</p>
                    </div>
                </div>
            </span>
            <a href="dailydeals3.html">Daily Deals</a>
            <a href="Gift.html">Gift With Boat</a>
            <span>
                <a href="home11.html">More</a>
                <i class="fa-solid fa-chevron-down"></i>
                <div class="dropdown-content2">
                    <a href="advertise.html">Do What Floats Your boAt</a>
                    <a href="blogs.html
                    ">Blogs</a>
                    <a href=" bulkorder.html">Corporate Orders</a>
                    <a href="">Earn ₹100</a>
                    <a href="">Careers</a>
                    <a href="">Social Responsibility</a>
                    <a href="">Meet the boAtheads</a>
                  </div>
            </span>

            
       
       
    </div>
        <div id="main_search">

            <div id="search_div" >
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            <input placeholder="search" />
            </div>
            <a href="login.html" id="uppics"><i class="fa-solid fa-user fa-xl"></i></a>
           
            <a href="cart.html" id="uppics"><i class="fa-solid fa-cart-shopping fa-xl"></i> </a></div>
        </div>
</nav>`
}
export default navbar