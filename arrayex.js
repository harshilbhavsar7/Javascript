// console.log("Hello")

let arr1=['Hello',"what",1,2,3,[1,2,3]];

// console.log(arr1);

let arr2=new Array('hi',2,4,[1,2,3],56);

// console.log(arr2);

// console.log(arr2.indexOf(2));

// //modifying array
// arr2.push(23);
// arr2.unshift(3004);
// arr2.pop();
// arr2.shift();
// arr2.splice(2,4);
// arr2.reverse();


//this returns value so have to store in the variable 
arr2 = arr2.concat(arr1);
console.log(arr2);

//object

let myObj={
     name:'Harshil',
     isActiveNow:true,
     marks:new Array(89,99,96)


}

console.log(myObj);
console.log(myObj.name);
;
