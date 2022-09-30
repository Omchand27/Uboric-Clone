import {navbar,footer} from './components/navbar.js';
let nav_div=document.getElementById("nav")
nav_div.innerHTML=navbar();

let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer();


function OpenSearch(){
    document.getElementById('mySearch').style.width="450px";
}OpenSearch()
function closeSearch(){
    document.getElementById('mySearch').style.width="0";
}
closeSearch()