let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();                                     //formevent
//     alert("form submitted");
// });


// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let inp = document.querySelector("input");               //to extract data from forms
//     console.dir(inp);
//     console.log(inp.value);
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass"); //to extract data from forms
//   console.dir(user.value);
//     console.log(pass.value);
    
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0];
//     let pass = this.elements[1];
    
//   console.dir(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");
                                                   //more event change event it track btw initial and final vlaue changes                                                                
user.addEventListener("change", function () {
  console.log("change event");
  console.log("final vlaue:", this.value);
});

user.addEventListener("input", function () {
                                                   //more event input event it track every vlaue changes    only character kerys will works
  console.log("input event");
  console.log("final vlaue:", this.value);
});