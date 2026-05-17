// console.log("js is running -->");


// syntax ==>

// reserved keywords 
// let const var delete function for if else 


// function sum (){
//     console.log("hello world!");
// }


// sum()


// function subtraction (a, b, c){


//     let a_b = a - b

//     let lastResult = a_b - c

//     return lastResult

// }





// let subResult = subtraction(12,12,2)

// console.log(subResult + 100);



// function loginHandler (email, pass){

//     let correctEmail = "codermhasan@gmail.com"
//     let correctPass = "codermhasan"

//     if(correctEmail !== email){
//          console.log("Invalid Email");
//     }

//     if(correctPass !== pass){
//         console.log("Invalid Credientials");
//     }


// }

// loginHandler("codermhasan1@gmail.com", "12345678")


// what are higher order functions?

// kiuy ke higher order function apny arguement mai function accept kerta hai 
// ye return bi kerta hai kisi function ko as a result..

// function outerFn (cb){
// console.log("outer function hon..");

// cb("hasan")
// }


// function innerFn (name){
// console.log("inner function hon...", name);
// }



// outerFn(innerFn)





// function sum (cb){

//     let a = 23;
//     let b = 45;

//     let result = a + b

//     // console.log(result);

//     cb(result)


//     return cb

// }





// function resultExp (result){
// console.log("result mil gaya hai....", result);

// return 45
// }


// let returnOfSum = sum(resultExp)


// console.log(returnOfSum());



// function higherOrder (cb){
// cb(12)
// }

// higherOrder(valFn)


// function valFn (val) {
// console.log(val);
// }


// Array Higher Order Methods ==> 
// map, 
// filter, 
// forEach, 
// findLastIndex, 
// reduce, 
// find.




// forEach, 

let arr = ["ahsan", "hasan", "hussain", "hasnain", "hashim"]

// for (let i =0 ; i< arr.length ; i++){
//     console.log(arr[i]);
// }


// arr.forEach(val)


// function val (val){
//     console.log(val);
// }


// let returnForEach = arr.forEach(function (val){

// console.log("Hello", val);
// })


// console.log("for each return -->",returnForEach);




// filter

// let nums = [1,2,3,4,5,6,7,8]

// let returnOfFilter = nums.filter(function (i){
//     if(i <5){
//         console.log(i);
//         return i
//     }

// })


// console.log(returnOfFilter);



// custom filter 


// let filterItems = []
// for (let i = 0 ; i < nums.length ; i++){
//     // console.log(i);

//     if(i > 4){
//         filterItems.push(i)
//     }


// }

// console.log(filterItems);


// map ==>



// let returnofMap = arr.map(function (val){
//     return val.toUpperCase() + " " + "janiii"
// })


// console.log(returnofMap);



// map, filter, find, forEach, reduce, findIndex


// find

// let animals = ["elephant","lion","fox","Zebra"]


// let returnofFind = animals.find(function (elem) {
//     // console.log(elem);

//     if(elem == "fox"){
//         // console.log(elem);
//         return elem

//     }

//     console.log(elem);
// })

// console.log(returnofFind);



// let ages = [12, 14, 58];


// let reutrnOfFindIndex = ages.findIndex(function (age){
//     if(age > 40){
//         return age
//         console.log(age);
//     }
// })

// console.log(reutrnOfFindIndex);



// findlastIndex 
// let ages = [12, 14, 58];


// let returnofFindlastIndex = ages.findLastIndex(function (age){
//     if(age > 40){
//         console.log(age);
//         return age
//     }
//  })
//  console.log(returnofFindlastIndex);




// reduce


let numbers = [1, 2, 3, 4, 5]


// let reducReturn =numbers.reduce(val, 0)


// function val (accum, currInd){
// return accum + currInd
// }


// console.log(reducReturn);



// let reduceReturn = numbers.reduce(function (accum, currInd){
//      return accum + currInd
// }, 0)


// console.log(reduceReturn);



// Objects
// watch 

// let watch = {
//     name : "kuch biii",
//     color:"black",
//     type :"touch",
// }


// let bottle ={
//     material : "plastic",
//     color:"transparent",
//     size : "8 inch",
//     ml: "330ml"
// }


let userObj = {
    name: "Muhammad Hasan",
    fName: "Muhammad Ashraf",
    email: "codermahsan@gmail.com",
    password: "12345678",
    isAdmin: false,
    phoneNum: 923170243866,
    skills: ["HTML", "CSS", "JS", "GitHub"],
    address: {
        city: "Karachi",
        street: "45",
        houseNum: "R-40"
    }
}



// let arrObj = [[45],[45],[45],[45],[45]]

// array of objects
let arrObj = [
    {
        firstName: "Muhammad",
        lastName: "Hasan",
        email: "codermhasan@gmail.com",
        password: "467841658798"
    },

    {
        firstName: "Muhammad",
        lastName: "Saleem",
        email: "saleem@gmail.com",
        password: "467841658798"
    },

    {
        firstName: "Abdul",
        lastName: "Shakoor",
        email: "shakoor@gmail.com",
        password: "467841658798"
    },

]
// console.log(arrObj[0].email);

console.log(arrObj[2].firstName + " " +arrObj[2].lastName);


// console.log(userObj.skills[2]);
// console.log(userObj.address.street);

// let mobile = {
//     model : "Redmi 9c",
//     color:"black",
//     size : "8 inch"
// }


// console.log(obj);