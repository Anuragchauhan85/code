//let arr = [7, 9, 0, -2];
//let n = 3;
//let ans = arr.slice(0,n);
//console.log(ans);

//let arr = [7, 9, 0, -2];
//let n = 3;
//let ans = arr.slice(arr.length-n);
//console.log(ans);

//let str = prompt("enter a string");
//if (str.length == 0) {
//console.log("stringisempty");
//} else {
// console.log("stringisnotempty");
//}

//let str = "ApNaCoLlEgE";
//let idx = 3;
//if (str[idx] == str[idx].toLowerCase()) {
//console.log("characterislowercase");
//} else {
//  console.log("characterisnotlowercase");
//}

//let str = prompt("pleaseenterastring");
//console.log(`originalstring= ${str}`);
//console.log(`stringwithoutspaces= ${str.trim()}`);

let arr = ["hello", "a", 23, 64, 99, -6];
let item = 64;

if (arr.indexOf(item) != -1) {
  console.log("elementexistsinarray");
} else {
  console.log("elementdoesn'texistinarray");
}
