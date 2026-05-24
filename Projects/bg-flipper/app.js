// console.log("js is connected..");


let bgFlipperBtn = document.getElementById("bg-changer")
let showColorName  = document.getElementById("showColorName")

let myBody = document.getElementsByTagName("body")[0]
let colorsArray = ["red", "green", "blue","orange","cyan","purple","black","white","gray"]




const bgFlipperHandler = () => {
    console.log("han dost keys ho...");

    let randomNum = Math.floor(Math.random() * colorsArray.length);

    myBody.style.backgroundColor = colorsArray[randomNum]
    showColorName.innerHTML = "Color Name:" + " " +  colorsArray[randomNum]
}





bgFlipperBtn.addEventListener("click", bgFlipperHandler)