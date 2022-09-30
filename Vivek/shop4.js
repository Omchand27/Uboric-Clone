
let ShopData4=[
    { Name: "Tomato Cotton Printed Long Tunic", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-306_EX-370x370.jpg", Image1: "https://www.uboric.com/wp-content/uploads/2022/08/CP-306-130x130.jpg", Image2: "https://www.uboric.com/wp-content/uploads/2022/08/CP-306_BACK-130x130.jpg", Categories: "Women's Fashion" },
    { Name: "Brown Cotton Printed Long Tunic for Work Wear", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-305-370x370.jpg", Image1: "https://www.uboric.com/wp-content/uploads/2022/08/CP-305-130x130.jpg", Image2: "https://www.uboric.com/wp-content/uploads/2022/08/CP-305_BACK-670x1005.jpg", Categories: "Women's Fashion" },
    { Name: "White Anarkali Cotton Printed Long Tunic...", Price: "₹985.00", totprice: 985, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-303_EX-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Yellow Cotton Printed Long Tunic for Work...", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-302_BACK-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Dark Blue Cotton Printed Long Tunic for Work...", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-301-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Cotton Printed Long Tunic for Work Wear", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-147_BACK-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Tomato Cotton Printed Long Tunic for Work...", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-146_BACK-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Yellow Cotton Printed Long Tunic for Work...", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-145_EX-370x370.jpg", Categories: "Women's Fashion" },
    { Name: "Turquoise Cotton Printed Long Tunic for Work...", Price: "₹795.00", totprice: 795, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/CP-143_SIDE-370x370.jpg", Image1: "", Image2: "", Categories: "Women's Fashion" },
    { Name: "Duracable 1.2M Cable (C-Type)", Price: "₹399.00", totprice: 399, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/5_f7a649aa-16f0-4c85-a7a0-3acb2e3f552b_400x-370x370.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },
    { Name: "Nector Bluetooth Stereo Neckband", Price: "₹1,999.00", totprice: 1999, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/V2_Nector_500x-370x370.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },
    { Name: "Hoop2 Earphones", Price: "₹1,099.00", totprice: 1099, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Hoop2_500x-370x370.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },
    { Name: "Powerbuds + Power Bank", Price: "₹3,999.00", totprice: 3999, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/POwerbudspro_0000s_0000_002_500x-370x309.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },
    { Name: "Powerbuds Sweat Proof TWS", Price: "₹3,499.00", totprice: 3499, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/PowerBuds_0000_500_500x-370x309.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },
    { Name: "Ace Powerbank", Price: "₹1,299.00", totprice: 1299, Image: "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Ace-1_500x-370x370.jpg", Image1: "", Image2: "", Categories: "Electric Appliances" },   
]


let products4=document.getElementById("products");
function display(ShopData4){
    ShopData4.innerHTML=null;
    ShopData4.forEach(function(el){
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
    products4.append(div);
    })
}
display(ShopData4);