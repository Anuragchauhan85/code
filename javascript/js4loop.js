console.log("odd forward");
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}
console.log("odd backward");
for (let i = 15; i >= 1; i = i - 2) {
  console.log(i);
}
console.log("forward");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
console.log("backward");
for (let i = 15; i >= 1; i--) {
  console.log(i);
}
console.log("even forward");
for (let i = 2; i <= 15; i = i + 2) {
  console.log(i);
}
console.log("even backward");
for (let i = 16; i >= 1; i = i - 2) {
  console.log(i);
}
console.log("table of 5");
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}
console.log("table of any number");
let n = prompt("write your number");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}

//nested loop
for (let i = 1; i <= 3; i++) {
  console.log("outer loop ${i}");
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}
