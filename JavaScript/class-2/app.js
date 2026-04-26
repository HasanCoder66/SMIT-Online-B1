// console.log("hello world!");


// What is JavaScript
// Interpreter vs Compiler
// Variables (var vs let vs const) ← deep
// Data types
// typeof
// Truthy & Falsy


// Operators
// Comparison operators
// Logical operators
// Increment / Decrement
// Practice exercises

// Project:

// Simple Calculator (console based)


// — Conditions & Loops
// if else
// else if
// nested conditions



// for loop
// while loop
// do while
// break & continue

// Project:

// Number guessing game
// Table generator











// Variables (var vs let vs const) ← deep

// data ko store kerny ke liye use hoty hain ==> container ki tarha hota jo value ko store kerly


// variable syntax ==>

// keyword | let const var , variable name kuchbi name rakh do | = | primitives or non primitives


// var wallet = true;

// console.log(wallet);

// let wallet = true;

// console.log(wallet);

// const wallet = true;

// console.log(wallet);



// ES5  ==> EcmaScript 5
// var mouse = "mouse"

// var mouse = "keyboard"


// var mouse;    // variable declare ==>
// var mouse;    // variable  re declare ==>

// mouse = "mouse"  // variable initialize   ==> initialize variable ki pehlii value hotii

// mouse = "keyboard"   // variable reinitialize

// var mouse = "mouse" // ==> variable declare and initialize


// var a = 22;



// console.log(mouse);

// console.log(mouse);

// var a = 12;  // a + 3 // 15

// var a = 22;  // a + 3 // 25



// var a = 12 // variable declare and initailize
// var a = 12 // variable declare and initailize



// console.log(a + 3);

// ES6  ==> EcmaScript 6


// let username  // declare

// username = "hasanCoder66"  // initailize

// username = "kuchbiii"  // reinitialize 



// const username = "hasanCoder66"


// diffrence between let const var 


// var redeclare hota hai
// let redelcare nhi hota hai 
// const na to declare hota hai na redeclare hota hai..


// var kuchBi;  // declare
// var kuchBi;  // declare

// let username; // declare

// const isUser = false




// difference between undefined vs not defined 


// let user;  /// variable declare

// let user

// undefined 1 esi value hai jabh variable declare mood mai hoga to system undefined value daaldega variable mai || ya mai apni marzi se rakh sekta hoon variable mai....

// console.log(user);


// let n1 = 12;   // variable declare and initialized 

// console.log(n1);



// Not defined 

// esa variable ya esa item jo exist nhi kerta haii. aapki file mai to phir not defined ataa hai...

// not defined 1 error hai 

//let a /// declare moode a chl raha hai.. 
// console.log(a);


// let a;







// Data types in Javascript ==> ?

// Primitives Data type 
// . string (text)
// . number (0)
// . boolean (true |false)
// . undefined  
// . null


// let username = "hasan"
// let age = 23;
// let isStudent = false;
// let kuchbi
// let data = null

// let stu1 = "shoaib jamali"
// let stu2 = "fahad"
// let stu3 = "jameel"
// let stu4 = "shakoor"
// console.log(stu1);

// Non Primitives Data type || Reference Data type
// . array []
// . object {}
// .function ()




// . array [] 
// array mai sai value nikalny ka tareeka = > [1] square bracket or index number. index number square mai de do..

let students = ["shoaib jamali", "fahad", "jameel", "shakoor","kuch","abdul saleem", "kaleem"]

// console.log(students.length - 1);


// console.log(students[students.length -1]);


// console.log(students[students.length -1]);


// let numbers = [1, 2, 3, 4, 5, 6]

// console.log(numbers);



// . object {}

//  data ==>

// let age = 12;
// let student = true;
// let name = "abdul ahad";
// let address= "karachi";
// let fName = "saleem"


// object hum is liye use kerty hain taaky hum user ya phir item se related information ko collect kerke 1 jagah store kerden.. 


// let brand = "Aquafina"
// let materialBottle = "plastic"
// let bottlePrice = 150;
// let bottleLtr = "1.5 ltr"
// let waterColor = "transparent"


// // dot notation   object name => bottle.property name
// let bottle = {
//     brand : "Aquafina",
//     price : 150,
//     ltr : "1.5 ltr",
//     color : "transparent",
//     material : "plastic"
// }

// console.log("bottle =======>", bottle.brand);


// let user = {
//     age : 23,
//     name : "hasan",
//     email :"codermahsan@gmail.com",
//     password : "1325474987",
//     phoneNum :978145674987,
//     isAdmin : true,
//     skills : ["HTML","CSS", "GitHub", "Flexbox", "Grid", "Media Queries","Website Deployment"]
// }


// console.log("user =========>" , user.skills[2]);



// function foo (){
//     console.log("hello world!");
// }

// foo()









// typeof 

// let username = prompt("Enter your username")
// let age = prompt("Enter your age")

// console.log("type of username  ====>",typeof username);
// console.log("type of age       ====>",typeof age);



// Truthy & Falsy
//  6 falsy values hain 

// 1. ""
// 2. false
// 3. 0
// 4. undefined
// 5. null 
// 6. NaN



// inky elawah saarri value truty hain 


// Operators
// Comparison operators
// Logical operators
// Increment / Decrement
// Practice exercises

// Project:

// Simple Calculator (console based)


// Operators
// + , - , * , / , %



// Comparison operators 

// ==       // do values ko compare kerta hai    // equal operator
// ===      // data type check kertaaa hai | value compare kerta hai    // strict not equal
// >        // greater than 
// <        // less than 
// >=       // IS greater than or equal
// <=       // IS less than or equal    
// !        //  Logical NOT (!)
// !=       // not equal data type check nhi kertaaa  // not equal    
// !==      // not equal data type check kertaaa hai  // strict not equal



// console.log(12 == "22");
// console.log("22" === "222");

// console.log(2 > 3);
// console.log(2 > 3);


// console.log(3 >= 3);
// console.log(3 <= 3);



// Increment / Decrement 

// pre  // befpre 
// post // after

let a = 12;
let b = 5
// pre increment or decremnet
// console.log(++a);
// console.log(--a);


// post increment or decrement
// console.log(a++);
// console.log(a--);

// console.log(a);


        // 12 + 5 - 11  + 5   - 11
        // 17  -  11 -  11
        // result // 10

// let result = a + b - --a + b-- - --a  /// output

// console.log(a + 1);

        //   11 + 5 - 12 + 5
        // 16       - 17
        // -1
console.log(--a + b - ++a + b); // output