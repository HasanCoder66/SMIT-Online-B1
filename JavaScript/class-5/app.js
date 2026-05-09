// class 5 topics ===>

// Functions
// parameters
// return
// arrow functions
// default parameters


// Arrays Methods
// push, pop, shift, unshift, slice, splice

// Array Higher order methods
// map, filter, forEach, find






// Higher order function
// higher order esa function hai jo apny arguements mai 1 ye issy ziada function ko accept kerta hai. or function ko return kerta ho...


// function higherOrderFn (cb){
// // console.log("mera display name wala function -->",cb);

// return cb
// }


// let displayWalaFn = higherOrderFn(displayName)

// console.log("mera display name wala function -->",displayWalaFn("Saqib"));


// function displayName (name){
// console.log(name);
// return 12
// }


// Array Higher order methods

// let countingArr = ["one", "two","three","four","five"]

// let returnForEach = countingArr.forEach(printVal)  // accept a function in arguement

// function printVal (val){
//     console.log(val);
// }




// function valueLetaHai (val){
// console.log(val);
// }

// for (let i = 0; i < countingArr.length; i++){
//     valueLetaHai(countingArr[i])
// }


// Functions
// function abc (){
//     console.log("hello world!");
// }

// abc()



// function foo (){
//     return "hello world!"
// }

// let fooReturn = foo()  // hello world
// console.log(fooReturn + "kuch biiiii");


// funtions kia hoty hain 

// functions block of code hai tab hi chlty hain jabh aap inhy call kerty hain. 

// function ko agar chalana hai to call kerna farz hai ()



// arguements and parameters 

// arguements esa area jahan sai values bheji jayegiii..
// parameters esa area jahan values recieve ki jayegii.. 
// default parameter ==> paramater mai variable ki default value. 
            //  parameters
// function subtract (n1, n2 = 4){
//     let result = n1 - n2
//     console.log("Result -->",  result);
//     return result

// }



// let result = subtract(10) //arguements
// console.log(result + 45); // ==> return value fo subtract function
// subtract(10 , 7) //arguements
// subtract(10 , 3) //arguements




// Arrays Methods
// push, pop, shift, unshift, slice, splice


// push kia kerta hai  --> array ka last sai elements ko add kerta hai
// pop kia kerta hai  --> array ka last sai element ko remove kerta hai


//  unshift kia kerta hai  --> array ka start sai elements ko add kerta hai
// shift kia kerta hai  --> array ka start sai element ko remove kerta hai

//  slice kia kerta hai  --> array mai sai copy kerta hai
// splice kia kerta hai  --> array ka kisi bi area sai element ko remove , add , update kersekta hai...


// let numArr = [1,2,3,4,5]
// let strArr = ["kuchbi","random","foo","xyz"]

// let spliceReturn = strArr.splice(1,2,"chair", "keyboard")
// console.log("splice Return -->",spliceReturn);

// let copyStrHalfArr = strArr.slice(0,2)
// console.log("slice ka return ...",copyStrHalfArr);

// let pushReturn = numArr.push(6,7,8)
// console.log(pushReturn);
// let popReturn =  numArr.pop()

// let popReturn = strArr.pop()
// console.log(popReturn);


// numArr.unshift(0)
// numArr.shift()

// console.log("Num Array -->",numArr);

// console.log("String Array -->",strArr);




// method kia hota hai ?

// method 1 kaam ka tareeka  --> kisi nai already array ke last sai element ko push kerny ka kaam kiya howa hai.. // to usny kaha ke bhaii ye kaam meny kerdia hai aap simple jakr use kerlo..

// method ko aap hamesha call kerengy jabi chlta hai .  call kerny ke liye method ke round bracket Zaroori hain..

// alert("hello world")

// agar mai function bolon ya method bolon baat kis ki function ki horahi hai 

// objects ke ander properties 

// let car = {
// brand : "toyota",

// start: function (){
//     console.log("car chl rahiii hai..");
// }
// }

// car.start()



// jo methods array ka hain wo sirf array per chlty hain 





// jo methods string ke hongy wo sirf string pr chlty hain 














// console.log("hello world!");



// Loops [for loop, do while, while loop, for of loop]

// loop ka kaam kiya hai ? 

// iteration kerna 

// repeat kerna ya phir dohraana.. 


// person --> ghr sai niklta --> dahi leny ke liye -->  pareshaan..

// persorn - 2 saal sai usi location pr rehta hai --> ghr sai niklta hai. --> dahi ---> already shop location janta hai.



// for loop 

// syntax --> 

// Start | End | change 
// Initialization | condition | incremnet and decrement

// for(let i = 0; i < 3; i++){
//     console.log("hello world!");
// }


// din mai 10 dafa agar practice kerli  iska saara samjh ajayega .. condition practices  -> implemetation --> experience..



// let students = ["shoaib", "miss nazia", "tatheer","ariba","hussain", "saqib"];
// // console.log(students.length);
// let message;


// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);

//     if(students[i] == "saqib"){
//         message = "hello saqib"
//         console.log(i);
//         break;
//     }

// }


// console.log(message);



// false 
// if(students[0] =="shoaib"){
//     console.log("hello shoaib");
// }else {
//     console.log("else chlaa -->");
// }
