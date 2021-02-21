// "use strict";
// var x = this;
// document.getElementById("demo").innerHTML = x;

// document.getElementById("demo").innerHTML = myFunction();
// function myFunction() {
//   return this;
// }

"use strict";
document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
  return this;
}