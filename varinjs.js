
let Name="Harshil"
console.log("My name is "+ Name)
console.log("Data type is " + (typeof Name ))

let marks=35
console.log(marks);
console.log("Data type is " + (typeof marks ));

let isDrive=true
console.log(isDrive);
console.log("Data type is " + (typeof isDrive ));

let hb=null
console.log(hb);
console.log("Data type is " + (typeof hb ));

let name1;
console.log(name1);
console.log("Data type is " + (typeof name1 ));

// let har=$
// console.log(har);
// console.log("Data type is " + (typeof har ));

//referance datatypes


//arrays
let myarr=[11,2,31,true,"Harshil"];
console.log(myarr);
console.log("Data type is " + (typeof myarr ));


//object literals

let stMarks={
    Harshil:99,
    Rohan:89,
    Mrx:77
}
console.log(stMarks)
console.log("Datatype = "+(typeof stMarks))

//functions

function funny()
{
    console.log("This is the Funny method called")
}
funny();
console.log("datatype of funny ="+(typeof funny))

let date=new Date();
console.log(date)