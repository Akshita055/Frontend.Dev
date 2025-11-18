function myfun() {
  console.log("Clicked!");
}

function dbfun() {
  console.log("Double clicked!!!");
}

const btnEl1 = document.getElementById("btn");
console.log(btnEl1);
let count = 0;

// btnEl1.addEventListener("mouseenter", () => {
//   count++;
//   console.log(`Btn-hover count: ${count}`);
// });

btnEl1.addEventListener("dblclick", ()=>{
    count++;
  console.log(`Btn-clicked count: ${count}`);
});

