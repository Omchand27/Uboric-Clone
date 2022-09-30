import {navbar,footer} from './components/navbar.js';
let nav_div=document.getElementById("nav")
nav_div.innerHTML=navbar();

let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer();