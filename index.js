import { navbar,footer } from "./components/navbar.js";

let nav= document.getElementById("nav")
nav.innerHTML=navbar()

let foot= document.getElementById("footer")
foot.innerHTML=footer()