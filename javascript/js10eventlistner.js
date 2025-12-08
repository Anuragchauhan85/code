// addEventListener is to add event     element.addEventListner("event",callback)


let btns = document.querySelectorAll("button");

for(btn of btns) {
btn.addEventListener("click", sayhello);
btn.addEventListener("click", sayName);
btn.addEventListener("dblclick", function () {
        console.log("you double clicked");
    });
}

function sayhello() {
    alert("Hello");
}

function sayName() {
  alert("Anurag");
}




