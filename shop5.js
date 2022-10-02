let ShopData5=[
    { Name: "3213 Wired Headphone", Price: "₹714.00", totprice: 714, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/1_236fca83-9f26-4eb2-8448-0e2585834488_500x.jpg", Image1: "", Image2: "", Categories: "Electronics" },
    { Name: "Aquaboom Portable Speaker", Price: "₹1,399.00", totprice: 1399, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/V2_Aquaboom_Option02_500x-370x370.jpg", Image1: "", Image2: "", Categories: "Electronics" },
    { Name: "MuDisc Portable Speaker", Price: "₹1,199.00", totprice: 1199, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/6_2d252789-c6e2-485e-8da3-4105ee8f683c_500x-370x370.jpg", Image1: "", Image2: "", Categories: "Electronics" },
    { Name: "Ambrane Pulse Full Touch Control Smart Watch (Black)", Price: "₹2,999.00", totprice: 2999, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/2-83-370x370.jpg", Image1: "", Image2: "", Categories: "Electronics" },
    { Name: "Qor9 pro Bluetooth Calling Smartwatch with 1.69” full touch screen ,Multiple Watch Faces & thin design heart rate detection", Price: "₹1,999.00", totprice: 1999, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/photo_2022-01-09_10-50-18-370x370.jpg", Image1: "", Image2: "", Categories: "Electronics" },
    { Name: "all 14 pack of diffrent pepriqua ready to cook 100 gm", Price: "₹1,099.00", totprice: 1099, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Shahi-Paneer.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "all 19 pack of diffrent pepriqua instant mix 400gm", Price: "₹1,935.00", totprice: 1935, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Gulab-Jamun-Instant-Mix.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "20 pack of pepriqua ready to cook veg kadai 50gm", Price: "₹799.00", totprice: 799, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Veg-Kadai.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "20 pack of pepriqua ready to cook tandoori masala 50gm", Price: "₹799.00", totprice: 799, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Tandoori-Masala.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "20 pack of pepriqua ready to cook super garam masala 50gm", Price: "₹699.00", totprice: 699, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Super-Garam-Masala.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "20 pack of pepriqua ready to cook shahi paneer 50gm", Price: "₹799.00", totprice: 799, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Shahi-Paneer.png", Image1: "", Image2: "", Categories: "Grocery" },
    { Name: "Primelife 6 pcs DIY Plastic Grid Drawer Divider Household Storage Strips-Large – Made In India (DD – Multicolor)", Price: "₹199.00", totprice: 199, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/8-1.jpg", Image1: "", Image2: "", Categories: "Household Supplies" },
    { Name: "Risentshop Silicone Toilet Brush with Holder Stand , Brush for Bathroom Cleaning, Cleaning Silicone Brush and Holder (Multi Color, Pack of 1)", Price: "₹389.00", totprice: 389, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/7-1.jpg", Image1: "", Image2: "", Categories: "Household Supplies" },
    { Name: "Shopiable Store Portable Toothbrush, Tongue Cleaner Holder Case Traveling, Outdoor, Use to Storage & Carry Case Storage Box Cover Organizer (3)", Price: "₹249.00", totprice: 249, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/1-670x670.jpg", Image1: "", Image2: "", Categories: "Household Supplies" },
    { Name: "Mobile Holder (Black)", Price: "₹101.00", totprice: 101, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/51qFdGuV30L._SL1200_-670x670.jpg", Image1: "", Image2: "", Categories: "Household Supplies" },
]




display(ShopData5);

let products5=document.getElementById("products");
function display(ShopData5){
    ShopData5.innerHTML=null;
    ShopData5.forEach(function(el){
        let div = document.createElement("div");
    let name = document.createElement("h3");
    name.innerText=el.Name;
    let image_url = document.createElement("img");
    image_url.setAttribute("src", el.Image);
    image_url.addEventListener("click",function(){
      show(el)
    })   
    let div1=  document.createElement("div");
    div1.setAttribute("class","pri")
    let div2=  document.createElement("div");
    div2.setAttribute("class","work");
    let div3=document.createElement("div");
    div3.setAttribute("class","layer")
     let h3=document.createElement("h3");
     h3.innerText="Quick view"
     h3.addEventListener("click",()=>{
        window.location.href="./view.html"
     })
     let p=document.createElement("p");
     p.innerText="keep shopping"
     div3.append(h3,p);
    let price=document.createElement("h2");
    price.innerHTML=el.Price;
    let totprice = document.createElement(" Strike");
    totprice.innerHTML=el.totprice;
    div1.append(totprice,price)
    div2.append(image_url,div3)
    div.append(div2,name,div1);
    products5.append(div);
    })
}



import { navbar,footer } from "./components/navbar.js";

let nav= document.getElementById("nav")
nav.innerHTML=navbar()

let foot= document.getElementById("footer")
foot.innerHTML=footer()
