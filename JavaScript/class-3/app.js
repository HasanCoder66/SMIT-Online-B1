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


//  — Conditions & Loops


// if else
// else if
// nested conditions
// switch


// for loop
// while loop
// do while
// break & continue

// Project:

// Number guessing game
// Table generator












// Truthy & Falsy ==>

// "" 12 true 


// bohat saari value truty values hai  --> 


// falsy 6 -->

// false 
// ""
// 0
// null
// undefined
// NaN


// Simple Calculator (console based)


// let table = 2

// console.log(table , "X" , 1, "=", table * 1);
// console.log(table , "X" , 2, "=", table * 2);
// console.log(table , "X" , 3, "=", table * 3);
// console.log(table , "X" , 4, "=", table * 4);
// console.log(table , "X" , 5, "=", table * 5);
// console.log(table , "X" , 6, "=", table * 6);
// console.log(table , "X" , 7, "=", table * 7);
// console.log(table , "X" , 8, "=", table * 8);
// console.log(table , "X" , 9, "=", table * 9);
// console.log(table , "X" , 10, "=", table * 10);







//  — Conditions & Loops


// if else

// keyword if | () condition | {} curly bracket --> Logic | execution  | block | scope

// if kab chlta hai ? 
// jab condition true hogi to if ka block chly ga 


// else kab chlta hai ?
// agar if ki condition true nhi hogi to else chly ga...

// agar if false hai.. to else chly ga...


let age = 15;


//falsy value  ==>
// if(age == 12) {
//     console.log("your are under age..");
// } else{
//     // console.log("tm barry ho...");

//     if(age <= 13){
//         console.log("tm chotyy ho..");
//     }


//     if(age > 14){
//         console.log("tm barry ho gaye ho...");
//     }
// }






// else if


let money = 80;


// 250 == biryani 
// 150 == haleem
// 100 === saada burger
// 50 === kathiya warii cholyy...


// conditional statement ==> 
// ye 1 baat hai.. jo condition true hogi.. to if ya phir else if ya phir else mai sai koi chly ga

// if (money == 250) {
//     console.log("itny mai biryani ajayegi...");
//     console.log("biryani khaalo...");
// } else if (150 <= money) {
//     console.log("itny mai haleem araha hai...");
//     console.log("haleem khaaloo.."  );
//     console.log("haleem khany ke baad itny pesy bach jayegy..", money - 150 );
// } else if(100 <= money){
//     console.log("itny mai sada burger araha hai...");
//     console.log("sada burger khaaloo.."  );
//     console.log("sada burger khany ke baad itny pesy bach jayegy..", money - 100 );
// }else if(50 <= money){
//     console.log("itny mai kathiya warii cholyy araha hai...");
//     console.log("kathiya warii cholyy khaaloo.."  );
//     console.log("kathiya warii cholyy khany ke baad itny pesy bach jayegy..", money - 50 );
// }else {
//     console.log("pesy khatam hogye...");
// }



// let day = "sunday"

// if(day == "saturday"){
//     console.log("aaj class hai...");
// } 
// else if(day == "sunday"){
//     console.log("aaj bhi class hai");
// }

// else {
//     console.log("aaj chutti hai...");
// }





// nested conditions ==> 


// job requirements 

// location karachi 
// language javascript
// experience 1
// student smit 


// let city = "karachi";
// let language = "javascript"
// let exp = 1;
// let student = "smit"


// technique 1 

// if(city == "karachi"){
   
//     if(language == "javascript"){


//         if(exp >= 1){

//             if(student == "smit"){

//                 console.log("you are elgible for the job");
//             }else{
//                 console.log("aap smit ke student nhi sirf isi wajah elegible nhi hoo...");
//             }




//         }else{
//             console.log("minimum exp 1 year requrired hai...");
//         }


//     }else {
//         console.log("js seekh ke aou...");
//     }


// }else {
//     console.log("karachi ajaou...");
// }



// technique 2

// if(city == "karachi" && language == "javascript" && exp >= 1 && student == "smit" ){
//     console.log("you elegible for the job");
// }else{
//     console.log("aap job requirement poora nhi utarty jis ki wajah saai aap ko reject kerdia giya ha...");
// }








// ya optional     or ||
// and  zaroori    and &&

// let num = 2
 

//  condtion 1 || condition 2 || condition 3 ==> agar in 3no conditions mai sai koi 1 bi true hogaye to if chl jaye kiu ke aapny or operator use kiyaa hai....

// or || operator
 
// if(num == 2 || num > 2){  
//     console.log(num == 2);
//     console.log("true hogaye condition...");
// }









// and operator  &&

// long question 1 attempt kerna hai ...   options 1 hi hai...

// let num = 12;

// if(num == 12 && num > 12){
//     console.log("if chlaa ");
// }else{
//     console.log("else chlaa ==>");
// }




// switch ==> 

// let dice = Math.floor(Math.random() * 7)
// console.log(dice);


// // keyword  switch | () condition | {} curly bracket , execution | logic, scope, block

// switch(dice){
//     case 0:
//         console.log("0 aya hai..");
//         break;
//         case 1:
//             console.log("1 aya hai..");
//             break;
//         case 2:
//             console.log("2 aya hai..");
//             break;

//             default:
//                 console.log("default chlaaa ==>");
// }



// let userRole = "admin"
// let userRole = "recruiter"
// let userRole = "guest"

let userRole;



switch (userRole){
    case "admin":
        console.log("hello admin..");
        break;

        case "recruiter":
            console.log("hello recruiter");
            break;

            case "guest":
                console.log("hello guest");
                break

                default : 
                console.log("user hai hi nhi....");
}



// Project:

// Number guessing game

// let guessNum = prompt("enter your number");
// let correctNum = 7


// if(guessNum == 1){
//     console.log("try again");
// }else if(guessNum == correctNum){
//     console.log("correct answer!");
// }else{
//     console.log("please try again...");
// }





// for loop
// while loop
// do while
// break & continue

// Project:

// Number guessing game
// Table generator