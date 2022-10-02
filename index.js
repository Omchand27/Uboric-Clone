import { navbar, footer, sidebar } from "./components/navbar.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar();

let foot = document.getElementById("footer");
foot.innerHTML = footer();

let side = document.getElementById("sidebar");
side.innerHTML = sidebar();

function zero() {
  let bar = document.getElementById("sidebar");
  bar.style.width = "0px";
}
function enable() {
  let bar = document.getElementById("sidebar");
  bar.style.width = "400px";
}
let x = document.getElementById("enable");
x.addEventListener("click", function () {
  enable();
  // console.log("hi")
});
document.getElementById("close").addEventListener("click", function () {
  zero();
  // console.log("hi")
});

document.querySelector(".submit").addEventListener("click", display);

function display() {
  let credentials = JSON.parse(localStorage.getItem("data"));
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  console.log(credentials.uname);
  if (name == credentials.uname && pass == credentials.pass) {
    alert("Login Successfull");
  } else {
    alert("Wrong Credentials");
  }
}
