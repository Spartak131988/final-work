const formEl = document.querySelector(".form__authorization");
const inpEl = document.querySelectorAll(`[type="password"]`);
// formEl.addEventListener("submit", () => {
//   for (let i = 0; i < inpEl.length; i++) {
//     if (inpEl[0].value === inpEl[1].value) {
//       inpEl[i].style.border = "0.3rem solid green";
//     } else {
//       inpEl[i].style.border = "0.3rem solid red";
//     }
//   }
// });

formEl.addEventListener("input", () => {
  for (let i = 0; i < inpEl.length; i++) {
    if (inpEl[0].value === inpEl[1].value) {
      inpEl[i].style.border = "0.3rem solid green";
    } else {
      inpEl[i].style.border = "0.3rem solid red";
    }
  }
});
