import {navbar,footer, sidebar} from './components/navbar.js';
let nav_div=document.getElementById("nav")
nav_div.innerHTML=navbar();

let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer();

let side= document.getElementById("sidebar")
side.innerHTML=sidebar()


function OpenSearch(){
    document.getElementById('mySearch').style.width="450px";
}OpenSearch()
function closeSearch(){
    document.getElementById('mySearch').style.width="0";
}
closeSearch()

function zero(){
    let bar= document.getElementById("sidebar")
    bar.style.width="0px"
  }
  function enable(){
    let bar= document.getElementById("sidebar")
    bar.style.width="400px"
  }
   let x=document.getElementById("enable")
   x.addEventListener("click", function(){
    enable()
    console.log("hi")
  })
   document.getElementById("close").addEventListener("click", function(){
    zero()
    console.log("hi")
  })




