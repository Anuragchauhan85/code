// let h1 = document.querySelector("h1");
 
// function colorChange(color,delay,nextColouChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColouChange) nextColouChange();
//     }, delay);
// }

// colorChange("red", 1000, () => {
//     colorChange("green", 1000, () => {
//         colorChange("blue", 1000, () => {
//             colorChange("orange", 1000);
//         });
//     });
// });

//callback nesting = callback hell.   we also do code like that it is not a good way
//  because it is hard to understand to avoid these we use promises,await,async




//////////////////above callbackhell code was improved by promises/////////////////////////

let h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color was changed")
        }, delay);
    });
}

colorChange("red", 1000)
  .then(() => {
    console.log("color was changed : red");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("color was changed : blue");
    return colorChange("green", 1000);
  })
    .then(() => {
        console.log("color was changed : green");
        return colorChange("orange", 1000);
  })   
  .then(() => {
      console.log("color was changed : orange");
  });