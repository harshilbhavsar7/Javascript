
//text = document.getElementById("p01").innerHTML; 
//document.getElementById("demo").innerHTML = /e/.test(text);

var obj = /e/.exec("The best things in life are free!");
document.getElementById("demo").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;