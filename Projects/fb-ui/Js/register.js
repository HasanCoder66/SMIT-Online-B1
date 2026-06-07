// console.log("register js is running -->");

let firstName = document.getElementById("firstName")
let surName = document.getElementById("surName")
let month = document.getElementById("month")
let day = document.getElementById("day")
let year = document.getElementById("year")
let gender = document.getElementById("gender")
let email = document.getElementById("emailOrMobile")
let password = document.getElementById("password")
// submit btn 
let submitBtn = document.getElementById("submit")



let users = JSON.parse(localStorage.getItem("users")) || []
// console.log("tazaa tazaa local storage sai managaya howa users... -->", users);

const sweety = (icon, title, text) => {
   return Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
}

const submitHandler = () => {

if(!firstName.value.trim() || !surName.value.trim() || !month.value.trim() || !day.value.trim() || !year.value.trim()){
   return sweety("error", "Oops!","please fill your first and surname.");
}

let userObj = {
firstName : firstName.value,
surName : surName.value,
dob :`${day.value}-${month.value}-${year.value}`,
gender : gender.value ,
email : email.value,
password :  password.value
}

users.push(userObj)

console.log("users --> submit handler ke ander userss", users);
localStorage.setItem("users", JSON.stringify(users))

sweety("success", "Ok", "user registered successfully!")

setTimeout(() => {
window.location.href = "../Pages/login.html"
}, [1500])

firstName.value = ""
surName.value = ""
month.value = ""
year.value = ""
day.value = ""
gender.value = ""
email.value = ""
password.value = ""
}

submitBtn.addEventListener("click", submitHandler)

