const navbar=()=>{
    return`
    <div id="nav-start">
    <a href="index.html"><img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png"></a>
</div>


<div id="nav-mid">
<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="#">About</a></li>
    <li class="shop"><a href="#">Shop</a></li>
    <li class="cat"><a href="#">Caterogies</a>
         <div class="submenu-1">
            <ul>
             <li class="hover"><a href="">Clothing</a>
                <div  class="submenu-2">
                  <ul> <li><a href="">Men's Fashion</a></li>
                    <li><a href="">Women's Fashion</a></li>
                  </ul>
                </div>
             </li>
                <li class="hover"><a href="">Footwear</a>
                    <div  class="submenu-2">
                      <ul> <li><a href="">Men's Sport Shoes </a>
                        </li>
                     </ul>
                   </div>
                </li>
                <li class="hover"><a href="">Electrical Appliance</a>
                    <div  class="submenu-2">
                        <ul> <li><a href="">Philip's Personal Care </a></li>
                            <li><a href="">Trimmer</a></li>
                       </ul>
                     </div>
                </li>
                <li class="hover"><a href="">Health & Personal Care</a>
                    <div  class="submenu-2">
                        <ul> <li><a href="">Health Care </a></li>
                            <li><a href="">Personal Care</a></li>
                       </ul>
                     </div>
                </li>
                <li class="hover"><a href="">Jewellery</a>
                    <div  class="submenu-2">
                        <ul> <li><a href="">Necklace </a></li>
                            <li><a href="">Ring</a></li>
                            <li><a href="">Kada</a></li>
                            <li><a href="">Jewellary Set</a></li>
                       </ul>
                     </div>
                </li>
                <li class="hover"><a href="">Industrial Supplies</a>
                <div  class="submenu-2">
                <ul> <li><a href="">Bathroom Accessories </a></li>
                    <li><a href="">Food Processing Machine</a></li>
               </ul>
             </div></li>
                <li><a href="">Kitchen Ware</a>
                <div  class="submenu-2">
                <ul> <li><a href="">Air Tight Container </a></li>
                    <li><a href="">Kitchen Tools</a></li>
               </ul>
             </div>
                </li>
                <li><a href="">ms Smart Gadgets</a></li>
            </ul>
         </div>
    
    </li>
    <li class="shop"><a href="contactus.html">Contact</a></li>
</ul>

</select>


</div>
<div id="nav-end">

  <div class="icon">
  <a href="#" onclick="OpenSearch()"> <i class="fa-solid fa-magnifying-glass"></i></a>
        <i class="fa-regular fa-user"></i>
       <a href="wishlist.html"> <i class="fa-regular fa-heart"></i></a>
        <a href="shopping.html"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a>

       </div>
</div>
`
}







const footer=()=>{
    return `
    <footer>
    <h2 class="subhead">Want style Ideas and Treats?</h2>
    <form action="" id="footForm">
        <input type="email" placeholder="Enter Email *" id="email" required="">
        <button id="sub">Subscribe</button>
    </form>
    <hr>
    <div id="footInfo">
        <div class="uboricimg">
            <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png" alt="">
            <div class="icona"><i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        </div>
        <div class="links">
            <div class="sublink">
                <h6>SUPPORT</h6>
                <p><a href="aboutus.html">About Us</a></p>
                <p><a href="contactus.html">Contact Us</a></p>
            </div>
            <div class="sublink">
                <h6>SHOP</h6>
                <p><a href="shop">My account</a></p>
            </div>
            <div class="sublink">
                <h6>COMPANY</h6>
                <p>Shipping &amp; Returns</p>
                <p>Privacy Policy</p>
                <p>Terms &amp; Conditions</p>
            </div>
            <div class="sublink">
                <h6>CONTACT</h6>
                <p>Customer Care</p>
                <p>Contact Support Available</p>
                <p>Mon To Sat : 10:00 Am to 6:00 Pm</p>
                <p>E-mail</p>
                <p>uboricllp@gmail.com</p>
                <p>Mobile</p>
                <p>+91 97243 82162</p>
                <p>+91 82000 99386</p>
            </div>
        </div>
        
    </div>
    <hr>
    <div id="bottom">
        <div>
            <h5 id="copyright">© 2019 - 2022 UBORIC. ALL RIGHTS RESERVED.</h5>
        </div>
        <div class="i">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  </footer>
   `
  }
  
export {navbar,footer};