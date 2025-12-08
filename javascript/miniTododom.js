let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});



// let delbtns =document.querySelectorAll(".delete")
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;                          //in this delete funtion is not working on elements which is created by js 
//         console.log(par);                                      //because event listner is not working for that type of element it work 
//         par.remove();                                           //ony that element which is present in html to make this work we use
//     });                                                         //event listner for their parent element called event delegation
// }