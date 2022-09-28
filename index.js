import {navbar,footer} from './components/navbar.js';
let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar();

let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer();


const slideshow=()=>{
const arr=[
    "https://www.uboric.com/wp-content/uploads/2022/09/photo-1567401893414-76b7b1e5a7a5.jpg",
    "https://www.uboric.com/wp-content/uploads/2022/09/image_jpg.jpg",
    "https://www.uboric.com/wp-content/uploads/2022/09/photo-1589512574123-2ba3b33bf066.jpg",
    "https://www.uboric.com/wp-content/uploads/2022/09/photo-1587370560942-ad2a04eabb6d.jpg",
    "https://www.uboric.com/wp-content/uploads/2022/09/photo-1556910633-5099dc3971e8.jpg",
];
let i=0;
let div=document.getElementById("slider");
let img=document.createElement('img');
img.src=arr[0];
div.append(img);
setInterval(()=>{
    if(i==5){
        i=0
    }
    img.src=arr[i]
    i=i+1;
    div.append(img)
},2000)
}
 window.onload=slideshow()

