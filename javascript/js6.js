//function
function hello() {
  console.log("hello");
}

function printname() {
  console.log("apana college");
}

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

function isadult() {
  let age = 13;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
}

function dice() {
  let no = Math.floor(Math.random() * 6) + 1;
  console.log(no);
}

//function with arguments
function info(name, age) {
  console.log(`${name}'s age is ${age}`);
}

info("ankit", 20);
info("anand", 19);

function sum(a, b) {
  console.log(a + b);
}

sum(15245, 451564651);

function calcAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

calcAvg(2, 4, 6);

function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

//return
function isadult2(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "minor";
  }
}




function numSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}





let str1 = ["hii", "hello", "bye", "!"];

function concat(str1) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    result += str1[i];
  }
  return result;
}




//scope

let Sum = 54; //global scope

function calsum(a, b) {
  let Sum = a + b; //fun scope
  console.log(Sum);
}
calsum(3, 2);

console.log(Sum);



//lexical scope

function outerfunc() {
  let x = 3;
  let y = 4;
  function innerfunc() {
    console.log(x);
  }

  innerfunc();
}




//function expression
const anu = function(a, b) {
    return a + b;
}




//higher order function 
function multipleGreet(func, count) {
  for (let i = 1; i<= count; i++) {
    func();
  }
}

let greet = function() {
  console.log("hello");
}

multipleGreet(greet, 19);





//higher ordwcener function return
function OddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    }
    
  } else if (request == "even") {
   return function (n) {
      console.log(n % 2 == 0);
    }
   
  } else {
    console.log("wrong request")
  }
}


let request = "odd";





//methods
const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
}




//assi q1
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elementslargerthananumbernum 
function getElements(arr, num){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > num) {
      console.log(arr[i]); g
    }
  }
}

getElements(arr, num);




//assi q2
let str2 = "abcdabcdefgggh";

//functiontogetStringwithalluniqueelements
function getUnique(str2) {
  let ans = "";
  for (let i = 0; i < str2.length; i++){
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
    //ifcurrentcharacterisnotadded,thenadditinans.
    //Otherwiseitisaduplicate.
      ans += currChar;
    }
  }
  
  return ans;
}

getUnique(str);






//assi q3
let country = ["Australia", "Germany", "UnitedStatesofAmerica"];
function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++){
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i
    }
  }
  
  return country[ansIdx];
}

longestName(country);




//assi q4
let str = "apnacollege";

function countVowels (str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  
  return count;
}




//assi q5
let start = 100;
let end = 200;
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}