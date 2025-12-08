let a = 5;
let b = 10;
let c = 15;

if (a > b) {
    if (a > c) {
        console.log(a, "is larger");
    } else {
        console.log(c, "is larger");
    }
} else {
     if (b > c) {
       console.log(b, "is larger");
     } else {
       console.log(c, "is larger");
     }
}