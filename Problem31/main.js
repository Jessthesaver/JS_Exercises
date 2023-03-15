const div = document.querySelector("div");
const togglers = document.querySelectorAll("p");

for (let i = 0; i < togglers.length; i++) {
  if (i % 2 !== 0) {
    togglers[i].style.visibility = "hidden";
  }
}

div.addEventListener("click", (event) => {
  if (event.target.textContent.includes("Toggle")) {
    if (event.target.nextElementSibling.style.visibility === "visible") {
      event.target.nextElementSibling.style.visibility = "hidden";
    } else {
      for (let index = 1; index < togglers.length; index = index + 2) {
        togglers[index].style.visibility = "hidden";
      }
      event.target.nextElementSibling.style.visibility = "visible";
    }
  }
});

// togglers.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     let target = event.target;
//     let sibbling = target.nextElementSibling;
//     if (sibbling.style.visibility === "visible") {
//       sibbling.style.visibility = "hidden";
//     } else {
//       sibbling.style.visibility = "visible";
//     }
//   });
// });
