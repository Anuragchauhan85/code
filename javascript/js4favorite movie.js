//fav movie
const favmovie = "avatar";

let guess = prompt("guess the favorite movie");

while (guess != favmovie) {
  if (guess == "quit") {
    console.log("do not loose hope you can do it");
    break;
  }
  guess = prompt("wrong guess try again");
}

if (guess == favmovie) {
  console.log("congrats");
}

//loop with array
let fruits = ["mango", "banana", "apple", "litchi", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

//heros

let heros = [
  ["ironman", "spiderman", "thor"],
  ["superman", "flash", "wanda"],
];

for (let i = 0; heros.length; i++) {
  console.log(i, heros[i].length);
  for (let j = 0; j < heros[i].length; j++) {
    console.log(`j=${j}, ${heros[i][j]}`);
  }
}

//
let student = [
  ["aman", 95],
  ["shrsdha", 94],
  ["karan", 80],
];

for (let i = 0; i < student.length; i++) {
  console.log(`info of student ${i}`);
  for (let j = 0; j < student[i].length; j++) console.log(student[i][j]);
}

//for of loops

let fruits = ["mango", "banana", "apple", "litchi", "orange"];
for (fruit of fruits) {
  console.log(fruit);
}

for (char of "apnacollege") {
  console.log(char);
}

//Nested for of loop
let heros = [
  ["ironman", "spiderman", "thor"],
  ["superman", "flash", "wanda"],
];
for (list of heros) {
  for (hero of list) {
    console.log(hero);
  }
}
