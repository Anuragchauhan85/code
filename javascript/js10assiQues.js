
const btn = document.createElement("button");
btn.textContent = 'click me'

document.body.appendChild(btn);

btn.addEventListener("click", function () {
    btn.style.backgroundColor="green"
})

let h2= document.querySelector("h2");
let user = document.querySelector("#user");

user.addEventListener("input", function () {
  console.log("input event");
    console.log("final vlaue:", this.value);
    h2.innerText = user.value;
});