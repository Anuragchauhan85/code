let btn = document.querySelector("button");
console.dir(btn);
 
// onclick code of javascript work when we click the button

// btn.onclick = function () {
// console.log("button was clicked");
// };


// btn.onclick = function () {
//   alert("button was clicked");
// };

function anand() {
    alert("Hello");
}

// btn.onclick = anand;

let btns = document.querySelectorAll("button")

for (btn of btns) {
    btn.onclick = anand;
    btn.onmouseenter = function () {               
        console.log("you enterd the button");     //onmouseenter to run the code when we hover over the button
    }
}
    