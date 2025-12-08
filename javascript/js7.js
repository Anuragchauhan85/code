//this keyword

const student = {
    name: "anurag",
    age: 20,
    eng: 94,
    math: 98,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks ${avg}`);
    }
}

// try and catch
console.log("hello");
console.log("hello");
console.log("hello");
try {
    console.log(a); 
 }
catch {
    console.log("caught an error ... a is not defined");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// arrow function

const sum = (a,b) => {
    console.log(a + b);
};

const square = (n) => {
    console.log(n * n)
};

const power = (a, b) => {
    return a ** b;
};


//implecit return

const cube = (n)=> 
      n* n * n;

//set timeout
setTimeout(() => {
    console.log("apna college 1");
}, 4000);

//set interval   //to stop :- clearinterval(id)
let id=setInterval(() => {
    console.log("apna college");
}, 2000);

//this arrow functionf
function getInfo1() {
    setTimeout(() => {
        console.log(this);
    }, 2000);
}

function getInfo2() {
    setTimeout(function() {
        console.log(this);
    }, 2000);
}



//problem question 1
const squad = (n) => n * n;

//problem question 2 
let id3= setInterval(() => {
    console.log("hello world");
}, 2000);
 
setTimeout(() => {
    clearInterval(id3);
    console.log("clear interval run");
},10000);