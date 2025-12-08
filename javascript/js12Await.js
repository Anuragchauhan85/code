function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}


async function demo() {
    await getNum();
    await getNum();
    getNum();
}


let h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let num = Math.floor(Math.random() * 5) + 1;
          if (num > 3) {
              reject("promise rejected");
          }

      h1.style.color = color;
         console.log(`color cahnged to : ${color}`);
         resolve("color was changed");
    }, delay);
  });
}


async function change() {
    try {
    await colorChange("red", 1000);                       //error handling
    await colorChange("blue", 1000);                      //to handle the error we put our suspected code in try and catch the error so remaining code is not effected
    await colorChange("green", 1000);
    colorChange("orange", 1000);
    } catch (err){
        console.log("error caught : ");
        console.log(err);
    }

    let a = 5;
    console.log("new number : ",a + 3);
}