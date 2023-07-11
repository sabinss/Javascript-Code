// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     heading1.style.color = "red";
//     setTimeout(() => {
//       heading2.style.color = "green";
//       setTimeout(() => {
//         heading3.style.color = "blue";
//       }, 1000);
//     }, 2000);
//   }, 1000);

//   //
// });

btn.addEventListener("click", async () => {
  changeColor(heading1, "red").then((res) => {
    console.log("1");
    changeColor(heading2, "blue").then((re) => {
      console.log("2");
      changeColor(heading3, "yellow");
    });
  });
});

const changeColor = (element, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      element.style.color = color;
      resolve(true);
    }, 1000);
  });
};
