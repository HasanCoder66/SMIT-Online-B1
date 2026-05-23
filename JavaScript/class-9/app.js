// Document Object Model


// let h1Heading = document.querySelector("#heading")
// let list = document.querySelector(".list")

// let h1 = document.getElementById("heading")
// console.log("meraa h1 tag..",h1);


// console.log(list.children);



// DOM Manipulation
// createElement
// appendChild
// removeChild
// classList
// style via JS


let createDiv = document.createElement("div")
let divText = document.createTextNode("Hello Javascript")
let body = document.getElementsByTagName("body")[0]
let btn = document.getElementsByTagName("button")[0]


console.log(btn);
// console.log(divText);

createDiv.appendChild(divText)

createDiv.classList.add("box1")
createDiv.classList.add("box2")
createDiv.classList.remove("box2")

console.log(createDiv.classList);
body.appendChild(createDiv)

createDiv.style.backgroundColor = "#b2f2bb"
createDiv.style.width = "150px"
createDiv.style.height = "100px"
createDiv.style.borderRadius = "10px"
createDiv.style.display = "flex";
createDiv.style.justifyContent = "center"
createDiv.style.alignItems = "center"
// btn.remove()




// function changeHeadingHandler() {
//     h1Heading.innerHTML = "Javascript Topics";
// }

// console.log("js is running -->");





// normal function 


// function foo (){
//     // console.log(arguments);
//     // console.log(this);
//     // console.log("function is running -->");

  

// }

// foo(12,34,56,78)



// let xyz = function (){}

// arr.map(function (num){})





// Arrow function =>

// const let var 

// key word  | variable Name | () => {}
// const arrowFn = () => {
//     console.log("han dost kia haal hain");
// }


// arrowFn()



// let isSchoolOpen = false;


const checkSchoolOpen = (isSchoolOpen) => {
    // console.log(this);
    // console.log(arguements); arrow function mai arguement ka keyword nhi hota..
if(!isSchoolOpen) {
    // console.log("aaj chutti hai...");
};

if(isSchoolOpen){
    // console.log("aaj school anaa hai..");
}
}

// checkSchoolOpen(true)



// let obj = {
//     start: function (){
//         console.log("start wala function", this);
//     },

//     stop: () => {
//         console.log("stop wala function ", this);
//     }
// }


// obj.start()
// obj.stop()



// let userObj = {
// email :"codermhasan@gmail.com",
// password : "1245667",

// isValidUser : function (email, password) {
// if(email !== this.email){
//     console.log("invalid email");
// }

// // console.log(email);
// }
// }


// userObj.isValidUser("codermhasan@gmail.com", "12345678")