(() => {
  "use strict";

 
  const forms = document.querySelectorAll(".needs-validation");

  
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

const slider = document.getElementById("slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const cardWidth = 250; // card width + margin
let index = 0;

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
});