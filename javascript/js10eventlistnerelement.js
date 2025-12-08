

let p = document.querySelector("p")
 
p.addEventListener("click", function () {
    console.log("paragraph is clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("enter in the div");
});