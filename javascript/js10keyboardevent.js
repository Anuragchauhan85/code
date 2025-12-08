// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("button is clicked");
// });

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button is clicked");
// });

let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log(event);
//     console.log("key was pressed");
// })

// inp.addEventListener("keyup", function (event) {
//   console.log("key =",event.key);   //show what print on screen
//     console.log("code =",event.code);   //show which key was pressed
//   console.log("key was released");
// });


inp.addEventListener("keyup", function (event) {
    console.log("code =", event.code);
    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    }else if (event.code == "ArrowDown") {
        console.log("character moves backward");
    }else if (event.code == "ArrowLeft") {
        console.log("character moves left ");
    }else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});