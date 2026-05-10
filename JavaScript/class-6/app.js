// console.log("hello world!");



// Variables 

// Let vs Const vs Var

// let a = 12   // variable for number
// let a = "A"   // variable for string

// String Methods ==>

    // let userName = "hasan ashraf"
    // let userNameCapital = "hasan ashraf".toUpperCase()


    // console.log(userNameCapital.toLowerCase());
    

    let str = "randommm"

    // slice kia kerta hai  

    // copy banata haii 

    // console.log(str.slice(0, 3));
    

    // console.log(str[str.length - 4]);

    // console.log(str.charAt(3));
    
    
// let para = "My Name is Hasan."

// let myArr = para.split(" ")
// // console.log(myArr);

// let joinKerRahaHOn = myArr.join(" ")
// console.log(joinKerRahaHOn);




// Data Types ==>

    // Primitive Data Type

    // String, Number, Boolean, undefined, null

    // let a = "hasan"
    // let n1 = 23;

    // let isAdmin = false

    // let bottle;  // ==  undefined
    // let data = null
    
    
    // Reference Data Type
    // [] , {} , ()
    

    // Array []

// let studentArr = ["Shoaib Jamali", "Ahsan Bilal","Ariba","Fasiha Naseem","Shamsa","Tatheer Fatima","Bi Bi Jannat Kalam"]


// console.log(studentArr.length);

// console.log(studentArr[3]);

// Array Methods ==>
    // push
    // pop
    // slice
    // splice
    // shift
    // unshift

    // studentArr.push("saleem","abdul shakoor")
    // studentArr.pop()
    // studentArr.unshift("saleem","abdul shakoor")
    // studentArr.shift()

    // let copyHalfArr = studentArr.slice(0,4)
    // console.log(copyHalfArr);

    // add element
    // studentArr.splice(2,0,"ali")
    
    // remove element
    // studentArr.splice(2,2)
    
    // update element
    // studentArr.splice(2,2,"ali")
    

    // console.log(studentArr);
    



// Object {}

// let student = ["shoaib jamali", 20, "shoaib@gmail.com"]

// let stu1 = {
//     name : "shoaib jamali",
//     age : 20,
//     email : "shoaib@gmail.com",
//     address:"larkana"
// }


// let userObject = {
// email : "codermhasan@gmail.com"
// }

// console.log(stu1.name);



// let userName = "Muhammad"

// if(userName.toUpperCase() == 'MUHAMMAD'){
//     console.log("caps Muhammad milgayaa -->");
    
// }else{
//     console.log("else chl rha haiii");
    
// }


// Case Sensitive --> 

// javascript case sensitive hai 
// matlab jo do gy wohi milyga 

// let ABC = "ABC"

// console.log(ABC);

// let abc_12 = "janii"
// console.log(ABC_12);


// let arr = ["HASAN"]

// if(arr[0] == "hasan"){
//     console.log("lowercase hasan milgayaa -->");
// }else{
//     console.log("else chlaa -->");
    
// }

// Conditional statements 

// let num = 4
// if(num == 0){
//     console.log("0 agiya");
//     }else if(num == 1){
//         console.log("1 agiya");
//     }
//     else if(num == 2){
//         console.log("2 agiya");
//     }
//     else if(num == 3){
//         console.log("3 agiya");
//     }else {
//         console.log("tamaam condition false hogaye...");
        
//     }


// nested if 

// if(true){
//     if(false){
//         console.log("okkk");
        
//     }
// }


// Switch Statement 

// let day = ""
// switch (day){
//     case "Sunday":
//         console.log("class hai aaj");
//         break;
//         case "Saturday":
//             console.log("class hai aaj");
//             break;
//             case "Friday":
//                 console.log("class nhi hai");
//                 break;

//                 default:
//                     console.log("koi bi day nhi aaj");
                         
// }

// let tab = ""

// switch (tab) {
//     case "active":
//         console.log("active tab chl rha hai");
//         break;
//     case "setting":
//         console.log("setting tab chl rha hai");
//         break;

//     default:
//         console.log("General Tab chl rhaa hai..");
        
//         break;
// }


// Loops ==>

    // for loop 


    let fruitsArr = [["apple","banana"],["strawberry","orange", "Papaya"],["watermelon","gray fruit"]]

    for(let i = 0 ; i < fruitsArr.length; i++){
        // console.log(fruitsArr[i]);

        for(let j  = 0 ; j < fruitsArr[i].length; j++){
            console.log(fruitsArr[i][j]);
        }
        // console.log(i);
        
         }


        // variable initialize keronga 
        // condition check keronga
        // execution keronga
        // akhir mai increment or decrement

    // while loop

    // do while loop