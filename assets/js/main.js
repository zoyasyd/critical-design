// main.js

let targetElement = document.querySelector("h2"); 

targetElement.addEventListener("mouseover",function() {
    this.innerText = "TIME";
    this.style = "cursor: wait"; 
}); 

targetElement.addEventListener("mouseout",function() {
    this.innerText = "IKEA"; 
    this.style = "cursor: default"; 
}); 