
let ShopData1=[
    { Name: "Reebok Men’s Fast Approach M Running Shoe",
    Price: "₹3,099.00",
     totprice: 3099, 
     Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/71IFuAat7eL._UL1500_-670x670.jpg", 
     Image1: "",
      Image2: "", 
      Categories: "Foot Wear" },
   { Name: "Reebok Men Sports Lace Up",
    Price: "₹2,599.00",
     totprice: 2599,
      Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/reebok_ex8042_1_1.jpg",
       Image1: "", 
       Image2: "",
        Categories: "Foot Wear" },
   { Name: "Reebok Men’s Port Line Running Shoe", Price: "₹2,799.00", totprice: 2799, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/1-22.jpg", Image1: "", Image2: "", Categories: "Foot Wear" },
   { Name: "Reebok Men’s Energy Runner 2.0 Running Shoe", Price: "₹2,299.00", totprice: 2299, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/71NgL037a0L._UL1500_-670x396.jpg", Image1: "", Image2: "", Categories: "Foot Wear" },
   { Name: "Reebok Men’s Austin Running Shoe", Price: "₹2,099.00", totprice: 2099, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/71UwCm6R4jS._UL1500_-670x374.jpg", Image1: "", Image2: "", Categories: "Foot Wear" },
   { Name: "Plastic Organic Hygienic Fresh Sprout Maker Box Sprouted Jar with 3 Container for Home, (2 Container)", Price: "₹219.00", totprice: 219, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/41UJLrf3jL-336x370.jpg", Categories: "Kitchen Ware" },
   { Name: "Sprout Maker | Crystal Clear Transparent (Medium)", Price: "₹298.00", totprice: 298, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/61ymDbamjGL._SL1500_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
   { Name: "Sprout Maker Fresh Sprouts with 4 Compartment (Big)", Price: "₹339.00", totprice: 339, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/710EZXJdgL._SL1500_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
   { Name: "GRECY JANTA Glass 6 Pcs Plastic Unbreakable Stylish Transparent Water Glass/Juice Glass/Beer Glass/Wine Glass Plastic Glass Set ( 250 ML, Pack of 6) (JANTA Glass)", Price: "₹125.00", totprice: 125, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/51qXxTDUjfS._SL1280_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
   { Name: "4 in 1 Multipurpose Plastic 2 Spice and 2 Pickle, Achar Container Set for Dining Table with Spoon", Price: "₹198.00", totprice: 198, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/61gx-EzUwdL._SL1500_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
    { Name: "Camera Lens Plastic Coffee Mug with 2 Lid, 400ml, Black", Price: "₹345.00", totprice: 345, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/61zhu2SZrvL._SL1280_.jpg", Image1: "https://www.uboric.com/wp-content/uploads/2022/08/51VUIk9fsIL._SL1280_-130x130.jpg", Image2: "https://www.uboric.com/wp-content/uploads/2022/08/71VDIUZWjUL._SL1500_-670x444.jpg", Categories: "Electronics" },
    { Name: "Plastic LPG Gas Cylinder Trolley Easily Movable Stand with Wheels Flower Pot Stand Use As Carrying Kitchen Items Up To 75 kg (Red)", Price: "₹289.00", totprice: 289, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/81ZFmDWI07L._SL1500_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
    { Name: "STUFF COOL Plastic Gadget Adjustable Slicer – (Black)", Price: "₹169.00", totprice: 169, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/51IY7TYL1kL._SL1000_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
    { Name: "STUFF COOL Plastic Gadget Adjustable Slicer – (Black)", Price: "₹169.00", totprice: 169, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/51gu1bl7J0L._SL1280_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
    { Name: "Titanic 7 Section Masala Box, 700ml Masala Container For Kitchen, Multipurpose Masala and Rangoli box, Airtight Masala Storage Container (Titanic Masala Box)", Price: "₹189.00", totprice: 189, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/71UHY9XCYLL._SL1280_-370x370.jpg", Image1: "", Image2: "", Categories: "Kitchen Ware" },
  
]


let products1=document.getElementById("products");
function display(ShopData1){
    ShopData1.innerHTML=null;
    ShopData1.forEach(function(el){
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
    let totprice = document.createElement("Strike");
    totprice.innerHTML=el.totprice;
    div1.append(totprice,price)
    div2.append(image_url,div3)
    div.append(div2,name,div1);
    products1.append(div);
    })
}
display(ShopData1);

