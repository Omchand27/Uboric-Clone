const navbar=()=>{
return`
 <div class="para">
        <p>FOR ONLINE PAYMENT EXTRA ₹5% DISCOUNT ON ORDERS ABOVE ₹500</p>
    </div>
    <nav>
       
      <div class="img"> 
        <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png" alt="Uboric"/>
      </div> 
       <div class="sub-cat">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="categories.html">Categories</a></li>
            <li><a href="contactus.html">Contact Us</a></li>         
        </ul>
       </div>
       <div class="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-user"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-sharp fa-solid fa-bag-shopping"></i>

       </div>
      
    </nav>
`
}
const footer=()=>{
  return `
  <footer>
  <h2>Want style Ideas and Treats?</h2>
  <form action="" id="footForm">
      <input type="email" placeholder="Enter Email *" id="email" required="">
      <button>Subscribe</button>
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
              <li>Contact Support Available</li>
              <li>Mon To Sat : 10:00 Am to 6:00 Pm</li>
              <li>E-mail</li>
              <li>uboricllp@gmail.com</li>
              <li>Mobile</li>
              <li>+91 97243 82162</li>
              <li>+91 82000 99386</li>
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