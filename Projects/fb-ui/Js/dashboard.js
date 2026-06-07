let logoutBtn = document.getElementById("logoutBtn")
let currentUser;

let usersParent  = document.getElementById("users-parent")
console.log(usersParent);
let allUsers = JSON.parse(localStorage.getItem("users"))

const cardHTML = (user) => {

  return `<div class="card">
  <h4>${user.firstName} ${user.surName}</h4>
  <p>${user.email}</p>
  <p>${user.password}</p>
  <p>${user.gender}</p>
  <p>${user.dob}</p>
</div>`
}


const loadApp = () => {
  console.log("mai data le ayaa..");

  let htmlForUserParent = allUsers.map((user) => cardHTML(user))
usersParent.innerHTML = htmlForUserParent.join(" ")
}

// logout handler 

const logoutHandler = () => {
    console.log("logout btn is working...");


    localStorage.setItem("currentUser", null)


  currentUser =  JSON.parse(localStorage.getItem("currentUser"))
  console.log(currentUser);
  if(!currentUser){
     window.location.href = "../Pages/login.html"
  }
}

loadApp()

// event listener
logoutBtn.addEventListener("click", logoutHandler)