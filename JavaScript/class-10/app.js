// console.log("javascript is running -->");
let fullName = document.getElementById("fullName")
let email = document.getElementById("email")
let password = document.getElementById("password")

let form = document.getElementById("form")


function submitHandler (e){
e.preventDefault();


console.log(fullName.value);
console.log(email.value);
console.log(password.value);
}



form.addEventListener("submit", submitHandler)


// let heading = document.getElementById("heading")

// console.log(heading);


// higher order function hai addEventListner("click",() => {})

// technique 1 
// function printHeading (){
//     console.log("mera name h1 tag hai..");
// }
// heading.addEventListener("click", printHeading)


// technique 2 
// heading.addEventListener("click", () => {
//         console.log("mera name h1 tag hai..");

// })


// technique 3

// const myFn = () => {

//     console.log("random function..");
// }
// heading.addEventListener("click", myFn)


// technique 4 
// heading.addEventListener("click", function () {
//         console.log("mera name h1 tag hai..");

// })