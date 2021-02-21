const str1="Hello";
const str2=" How are you";


// str1="Hey"+str1+" "+str2+" "+"and why are you here";
let html='<h1>This is the best file </h1>'+
"<p>And what about it</p>";
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// document.write(html.fontcolor("red"))
// document.write(html.fontcolor("darkviolet"))



// // console.log(html[2])
// // console.log(str1);
// console.log(html.indexOf('is'))
// console.log(html.lastIndexOf('is'))
// console.log(html.charAt(5))
// console.log(html.includes('is'))
// console.log(html.substr(0,5))
// console.log(html.endsWith('is'))

// // console.log(str1.concat(str2));

// console.log(html.slice(0,4));
// console.log(html.slice(-8));
// console.log(html.split(' '));

// let str3=html.repeat(2);
// console.log(str3);

//replace only replaces the first word
console.log(html.replace('This','it'));


let fruit=['orange','apple']
let myHtml=`<h1>${str1} This is me </h1>
             <p>and i like ${fruit[0]} and ${fruit[1]}</p>`;

document.body.innerHTML=myHtml;