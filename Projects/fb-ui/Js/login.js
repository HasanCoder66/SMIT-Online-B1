let inputEmail = document.getElementById("inputEmail")
let inputPassowrd = document.getElementById("inputPassowrd")
let loginBtn = document.getElementById("submit")


let allUsers = JSON.parse(localStorage.getItem("users"))

console.log(allUsers);


const sweety = (icon, title, text) => {
   return Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
}

const loginHandler = () => {
    if(!inputEmail.value.trim() || !inputPassowrd.value.trim()){
        return sweety("error", "Oops!","please fill both fields!");
     }

     let email = inputEmail.value;
     let password = inputPassowrd.value;

     let currentUser = allUsers.find((user) => user.email.toLowerCase() == email.toLowerCase() && user.password == password)

     if(currentUser){
        localStorage.setItem("currentUser", JSON.stringify(currentUser))

      setTimeout(() => {
        window.location.href = "../Pages/dashboard.html"
      },[1500])
     }else {
        return sweety("error", "Oops!", "invalid credentials")
     }
     
     console.log("current user haiii..",currentUser);


    //  allUsers.find((user) => {
    //     if(user.email.toLowerCase() == email.toLowerCase()){
    //         if(user.password == password){
    //             console.log("user logged in successfully");
    //         }else {
    //             console.log("invalid credentials");
    //         }
    //     }
    //  })

}






// event listener ==>

loginBtn.addEventListener("click", () => {
    loginHandler()
})