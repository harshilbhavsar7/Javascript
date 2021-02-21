console.log('Hello');
let no;
no = String(34)
console.log("DataType of "+no,(typeof no))

let no1=25;
console.log(no1.toString(20));
console.log(no1 + (typeof no1));

let no2=parseInt('34');
console.log(no2 + (typeof no2));

let no3 = parseFloat('36.0045');
console.log(no3.toFixed(2),(typeof no3))

//type coercion

let number1='365';
let number2=34;

//cohercion is nothing but concatinating string and number like the example :answer will be 36534
console.log(number1+number2)