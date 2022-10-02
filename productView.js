let prodDetailsArr = [];
prodDetailsArr.push(JSON.parse(localStorage.getItem("products")));
console.log(prodDetailsArr)
function displayProd(prodDetailsArr){
    prodDetailsArr.forEach(function(ele,i){
        let image = document.createElement("img")
        image.src= ele.Image;
        let img3 = document.createElement("div")
        let img = document.createElement("img")
        img.src= ele.Image;
        img.addEventListener("click", function(){
            let image = document.createElement("img")
            image.src= ele.Image;
        })
        let img1 = document.createElement("img")
        img1.src= ele.Image1;
        img1.addEventListener("click", function(){
            let image = document.createElement("img")
            image.src= ele.Image1;
        })
        let img2 = document.createElement("img")
        img2.src= ele.Image2;
        img2.addEventListener("click", function(){
            let image = document.createElement("img")
            image.src= ele.Image2;
        })
        img3.append(img, img1, img2)
        document.querySelector("#images").append(image,img3)
        let brand = document.createElement("p")
        brand.innerText=ele.Categories;
        let title = document.createElement("h2")
        title.innerText=ele.Name;
        let price = document.createElement("h3")
        price.innerText=ele.Price;
        price.style.color="red"
        let stock = document.createElement("p")
        stock.innerText="(100 in stock)";
        let quantity = document.createElement("input")
        quantity.id="star"
        quantity.type="Number";
        quantity.value="1";
        let cart = document.createElement("button")
        cart.innerText="Add to Cart";
        cart.addEventListener("click", function(){
            location.href="payment.html"
            localStorage.setItem("quantity", quantity.value)
        })
        let buy = document.createElement("button")
        buy.innerText="Buy Now";
        buy.addEventListener("click", function(){
            location.href="payment.html"
            localStorage.setItem("quantity", quantity.value)
        })
        let wish = document.createElement("button")
        wish.innerText="Add to Wishlist";
        let Categories = document.createElement("p")
        Categories.innerText="Categories:" + " " +ele.Categories;
        document.querySelector("#details").append(brand, title, price, stock, quantity, cart, buy, wish, Categories)
    })
}
displayProd(prodDetailsArr);
import { navbar,footer } from "./components/navbar.js";
let nav= document.getElementById("nav")
nav.innerHTML=navbar()
let foot= document.getElementById("footer")
foot.innerHTML=footer()