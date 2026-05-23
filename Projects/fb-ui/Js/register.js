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




const submitHandler = () => {
    console.log("submit handler is working..");

console.log("==> ",firstName.value);
console.log("==> ",surName.value);
console.log("==> ",month.value);
console.log("==> ",day.value);
console.log("==> ",year.value);
console.log("==> ",gender.value);
console.log("==> ",email.value);
console.log("==> ",password.value);



// console.log("registration form sumbitted!");


if(!firstName.value.trim() || !surName.value.trim() || !month.value.trim() || !day.value.trim() || !year.value.trim()){
   return console.log("please fill your first and surname.");
}





console.log("mai condition chlny kaa baad agy agiyaa....", month.value);



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

