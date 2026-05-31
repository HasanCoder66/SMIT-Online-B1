// synchronous

// jo cheez line by line chal rahi hai usy synchronous execution 

// let a = 12;

// ke jani tmny yahnan pr heavy task kerna hai 

// 2 * 2* 2/ 12 -4 -90

// FILE READ -->

// let b  = 30




// Asynchronous 

// api calling | data fetching , timers, async await



// fetch method for api calling 
// data ko recieve kerny ker liye fetch method ka use kia jata hai.

// javascript built in fetch method data hai. 



// function apiCall() {
//     let apiResponse = fetch("https://dummyjson.com/users")
//     console.log(apiResponse);
// }





// promise ko resolve kerny ke liye hum use kerty thy then catch 

// then or catch higher order functions  hoty hain 

// let apiResponse = fetch("https://dummyjson.com/users")
// .then(function (res) { 
//     return res.json()
// })
// .then(function (result){
//     console.log(result);
// })
// .catch(function (err) {
//     console.log("ye error aya hai:", err);
// })
// console.log(apiResponse);



let limit = document.getElementById("limit")
let skip = document.getElementById("skip")
let total = document.getElementById("total")


// let apiResponse = fetch("https://dummyjson.com/users")
// .then((response) => {
//    return response.json()
// })
// .then((result) => {
//     console.log(result);
//     limit.innerHTML = result.limit;
//     skip.innerHTML = result.skip;
//     total.innerHTML = result.total;

// })
// .catch((err) => {
//     console.log("ye error ayaa hai..", err);
// })

// console.log("Api Res --> ",apiResponse);



// async function ==>

// async function getData (){
//     try {
//         let apiResponse = await fetch("https://dummjson.com/users");
//         let result = await apiResponse.json()


//         console.log(result);

//         limit.innerHTML = result.limit;
//             skip.innerHTML = result.skip;
//             total.innerHTML = result.total; 


//     } catch (error) {
//         console.log("meraa error:", error);
//     }
// }



let btn = document.getElementById("btn")
let form = document.getElementById("form")
let username = document.getElementById("username")

// api calling using arrow function ==>

const apiCallHandler = async () => {

    let apiRes = await fetch("https://dummyjson.com/users")
    let result = await apiRes.json()


    //    data ko modified kerny ke liye map ka user kerty thy..

    const updatedUsers = result.users.map((user) => {
        if (user.age) {

            const updatedAge = user.age + 5

            // console.log(updatedAge);
            const upperCaseUserName = user.firstName.toUpperCase()
            return {...user, firstName: upperCaseUserName, age: updatedAge  }
        }
    })


    console.log("updated users array..", updatedUsers);
    //    console.log(result.users);

    //    age wise user chaiyee..

    // jo 20 sai barry hain 

    // const greaterThen20Users = result.users.filter(user => user.age >= 30)

    // console.log("greater then 20 users in array -->",greaterThen20Users);


    // particular user find ker raha hon.
    //   const emilyMilgaye =  result.users.find((user) => {
    //    if (user.firstName == "Emily"){
    // return user
    //    }
    //    })

    //    console.log(emilyMilgaye);

}


btn.addEventListener("click", apiCallHandler)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("mera submit handler chla -->", username.value);

    username.value = ""
    console.log("form submitted successfully.");


})
