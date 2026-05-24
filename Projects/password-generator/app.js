console.log("js is running -->");

let showPassword = document.getElementById("showPassword")
let generatePasswordBtn = document.getElementById("generatePasswordBtn")





let randomPasswordCharacters = "!1e2@4AD5#8DdY9$74POex%^95&*ab(cde"

const generatePassword = () => {
    let randomPassword = "";
// console.log("generate password handler is working...");

for(let i = 0; i < 10; i++){
    let randomNum = Math.floor(Math.random() * randomPasswordCharacters.length)
    // console.log("random number ki value", randomPasswordCharacters[randomNum]);
    // console.log("random Number ==>",randomNum);

    // randomPassword = randomPassword + randomPasswordCharacters[randomNum]
    randomPassword +=  randomPasswordCharacters[randomNum]
}

// console.log("mera random passowrd ==>",randomPassword);
showPassword.innerText = randomPassword;

}


generatePasswordBtn.addEventListener("click", generatePassword)