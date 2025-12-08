//array methods
//for each

let arr = [1, 2, 3, 4, 5];

arr.forEach(function(el){
    console.log(el);
});
//or
arr.forEach((el) => {
  console.log(el);
});
//or
let print = function (el) {
  console.log(el);
};

arr.forEach(print);

//map
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * 2;
});



let students = [
  {
    name: "anurag",
    marks: 95,
  },
  {
    name: "anu",
    marks: 90,
  },
  {
    name: "ankit",
    marks: 89,
  },
  {
    name: "aman",
    marks: 90,
  },
];
let cgpa = students.map((el) => {
    return el.marks / 10;
});

//filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = nums.filter((el) => {
    return el % 2 == 0;
});

//every
let even = [2, 4, 6].every((el) => el % 2 == 0);

let odd = [1, 3, 5].every((el) => el % 2 != 0);

//some
let od = [1, 3, 5].some((el) => el % 2 != 0);

//reduce
let numb = [1, 2, 3, 4, 5, 6];
let finalval = numb.reduce((res, el) => res + el);
console.log(finalval);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let max = array.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(max);

//practice question
let divisible = [10, 20, 50, 40, 90, 60, 70].every((el) =>el % 10 == 0);

//
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}

//default parameters

function sum(a, b = 3) {
  return a + b;
}


//spread

console.log(..."apanacollege");

//spread array literals

let ods = [1, 3, 5, 7, 9];
let evens = [2, 4, 6, 8];
let nos = [...ods, ...evens];

//spread object literals

const data = {
  email: "ironman@gmail.com",
  password: "acdevf"

};

const dataCopy = { ...data, id: 123 };

//rest

function sun(...args) {
  for (let i = 0; i < args.length; i++){
    console.log("you gave us:", args[i]);
  }
}

//destructring

let names = ["rony", "tony", "sony", "tony","pony",'mony'];
//let winner = names[0];
//let runnerup = names[1];
//let secondrunnerup = names[1];
//or
let [winner, runnerup, secondrunnerup, ...others] = names;


//destructuring objects

const student = {
  name: "anurag",
  age: "20",
  class: "iot",
  subjects: ["math", "iot", "phy", "chem"],
  username: "anura123",
  password: "1234dff",
};

let { username, password:secret,city:place="mumbai" } = student;
