// console.log("js is running -->");


// Higher Order Function kya hota hai?

// esa function jo apny arguement mai function accept kery ya kisi function ko return kerta ho... hof kehlata hai.

// Kya map() ek higher order function hai?

// ji han bilkul kyu k map apny arguement mai function accept kerta hai.



// Kya forEach() value return karta hai?

// for Each method koi value return nhi kerta hai .. 


// Ek example do Higher Order Function ka.

// function higherOrderFn (cb) {

//     cb(12)
// }


// higherOrderFn(function (val){
// console.log(val);
// })

// Callback function kya hota hai?

// callback function hof ke arguement mai pass kiya jata hai. ya hof mai call kia jata hai.. 


// Ek function banao jo dusre function ko parameter me le.

// function abc (cb){
//     console.log("function araha hai.. ", cb);
// }


// abc(doosraFn)

// function doosraFn (){
// console.log("doosra wla function ...");
// }

// filter() ka use kis liye hota hai?

// filter ka main purpose filterations kerna hai. array mai sai ... kiu k ye array ka higher order method hai 


// reduce() ka basic purpose kya hai?

// reduce ka basic purpose array ki tamaam values ka combine value bana ker result dena. 


// find() aur filter() me kya difference hai?

// find basically 1 value dhoondta hai or filter multiple values dhoonta hai.. 

// agar find ko pehli condition true milgaye to return kerdega . filter bolta hai ke mai pooray array pr loop kerke to dekhon ga hi dekhonga .. 

// find true condition return kerta hai  
// filter bi true condition return kerta hai but array mai 

// map() aur forEach() me kya difference hai?
// map aap basically modification ke liye use kerty hain. for Each like for loop ki tarha hai... 

// map aapko 1 modefied array return kerta hai.
// for each kuch bi return kerta 




// Array Higher Order Methods


// map()
// [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.
// let numsArr = [1,2,3,4]

// let doubleNum = numsArr.map(function (item) {
// return item * 2;
// })

// console.log("doubleNum -->",doubleNum);



// Ek array of names ko uppercase me convert karo using map().

// let stuNames = ["shoaib","ariba", "nazia"]
// let upperCaseStuNames = stuNames.map(function (name){
//     return name.toUpperCase()
// })

// console.log("upperCaseStuNames -->",upperCaseStuNames);



// Prices array me har price me 10 add karo using map().

// let prices = [10, 20 , 30 , 40, 100]

// let add10InPrices = prices.map(function (price){
// return price + 10
// })

// console.log(add10InPrices);



// Students names ke sath "Mr." add karo using map().


// let stuNames = ["Shoaib","Hassan", "Ahsan"]

// let addMrToStuNames = stuNames.map(function (name){
//     return "Mr"+ " " +name
// })

// console.log(addMrToStuNames);

// Numbers array ko square me convert karo.

// let nums = [5, 25]

// let sqaureNums = nums.map(function (num){
//      return num ** 2
// })

// console.log(sqaureNums);



// filter()

// [1,2,3,4,5,6] me se sirf even numbers filter karo.

// let nums = [1,2,3,4,5,6]

// let evenNums = nums.filter(function (n) {
//     if(n % 2 == 0){
//         return n
//     }
// })

// console.log(evenNums);


// Names array me sirf wo names filter karo jinki length 5 se zyada ho.

// let namesArr = ["ali", "sufiyan","abdul shakoor", "hasan"];

// let filterElemsGreaterLength5 = namesArr.filter(function (name) {
//     if(name.length > 5){
//         return name
//     }
// })

// console.log(filterElemsGreaterLength5);




// Ek prices array me sirf prices greater than 100 filter karo.

// let prices = [100, 50 , 130 , 140, 90]

// let greaterThan100Prices = prices.filter(function (price) {
//     if(price >= 100){
//         return price
//     }
// })

// console.log(greaterThan100Prices);

// Students me se passed students filter karo.

// let stuMarks = [30, 40, 33, 50, 99]

// let passedStu = stuMarks.filter(function (marks){
// if(marks >= 33){
//     return marks
// }
// })

// console.log(passedStu);

// Negative numbers ko filter karo.

// let values = [100, -10, -1, 1400];

// let negativeVal = values.filter(function (val){
//     if(val < 0){
//         return val
//     }
// })


// console.log(negativeVal);





// forEach()

// Array ke tamam elements console me print karo using forEach().

// let elements = ["keyboard", "mouse", "ram", "hard disk"];

// let returnForEach = elements.forEach(function (elem) {
//     console.log(elem);
//     // return elem
// })

// console.log(returnForEach);


// Ek fruits array ko numbering ke sath print karo.

// let fruits = ["mango","orange","watermelon","banana"]

// fruits.forEach(function (fruit, i){
//     console.log(i,fruit);
// })



// Users array me har user ko welcome message do.

// let users = ["hasan", "mukhtar", "sufiyan","rizwan"]
// users.forEach(function (user) {
//     console.log("welcome", user);
// })

// Ek array ka total manually forEach() se nikalo.

// let arrNums = [12, 12, 36];

// let total = 0
// arrNums.forEach(function (num) {
//     total+= num

//     // console.log(total);
// })


// Har student ka naam uppercase me print karo.

// let studentNames = ["ali","saleem"]

// studentNames.forEach(function(name){
//     console.log(name.toUpperCase());
// })




// Objects
// Object kya hota hai JavaScript me?

// object 1 reference data type hai in javascript jismy hum product ya item se realted information store kertain hai .




// Ek student object banao jisme name aur age ho.

let stuObj = {
    name: "sameer",
    age: 13,
    email: "abc@gmail.com"
}


// console.log(stuObj);

// Object ki property access karne ke 2 methods likho.
// dot notation . property name 
// console.log(stuObj.name);

// bracket notation ["string"]
// let key = "age"
// console.log(stuObj[key]);



// Object me new property add karo.
// console.log(stuObj); // before object update ==> value ==> purani wali email milygi 
stuObj.email = "sameer@gmail.com"
// console.log(stuObj); // after object update ==> value ==> updated wali email milygi 


// Object ki property delete karo.

// delete stuObj.age

// console.log(stuObj);

// Ek car object banao jisme brand aur model ho.

// let car = {
//    brand: "Audi",
//    color:"black",
//    model: "e-tron",

//    startCar : function (){
//     console.log("car chl rahi hai....", this);
//    }

// //    startCar : () =>{
// //     console.log("car chl rahii hai..", this);
// //    }
// }

// Object ke andar function ka example do.
// car.startCar()

// this keyword object me kya karta hai?
// console.log(car);


// Object keys kaise nikalte hain?
// console.log(Object.keys(car));


// Object values kaise nikalte hain?
// console.log(Object.values(car));



// Nested Objects

// Ek object ke andar object ka example banao.

// let randomObj ={
//     bottle : {

//     },
//     user :{

//     }
// }

// console.log(randomObj);


// User object ke andar address object create karo.

let user = {
    address: {
        city: "Karachi",
        country: "Pakistan",
        street: 40,
        homeAddress: "R-40",
        completeAddress: "3456789ghnjmsdjfal"
    }
}

// Nested object ki city access karo.

// console.log(user["address"]["city"]); // city access kerli using bracket notation.
// console.log(user.address.city ); // city access kerli using dot notation.

// Student object me marks object add karo.
// stuObj.marks = {
//     maths : 40,
//     urdu: 98,
//     eng : 45,
//     isl : 89,
//     sst : 78,
// }

// console.log(stuObj.marks.maths);

// Company object me employee object create karo.

// let company = {
//     founderDetails :{
//         name :"Branding Hopes",
//     founder :"Mukhtar Ahmed Al Aziz",
//     },
//    employee : [
//         {
//             name: "shakoor",
//             age : 45,
//             address : {
//                 city :"Gujranwala",
//                 country:"Pakistan"
//             }
//         },
//         {
//             name: "ali",
//             age : 25,
//             address : {
//                 city :"Karachi",
//                 country:"Pakistan"
//             }
//         },
//     ]
// }

// agar object mila hai to dot property name lagegi.. 
// agar array milaa hai to [1] square bracket ke ander index number 

// console.log(company.employee[2].address.country);



// Array of Objects


// Array of objects kya hota hai?
// array of objects sai muraad ye hai hamary pass 1 adad array hai jismy multiple objects rethty hain 

// Students ka array banao jisme har student ka name aur marks ho.

let students = [
    { name: "ali", totalMarks: 550, isPassed: true },
    { name: "saleem", totalMarks: 450, isPassed: true },
    { name: "abdul shakoor", totalMarks: 200, isPassed: false },
    { name: "ahsan", totalMarks: 180, isPassed: false },
]


// Array of objects me se sirf names print karo.

// students.forEach(function (stu) {
//     console.log(stu.name);
// })

// Passed students filter karo from array of objects.

// let passedStu = students.filter(function(student) {
//     // console.log(student.isPassed);
//     if(student.isPassed){
//         return student
//     }
// })

// console.log(passedStu);

// failed student ==>

// let failedStu = students.filter(function(student) {
//     // console.log(student.isPassed);
//     if(!student.isPassed){
//         return student
//     }
// })

// console.log(failedStu);

// map() use karke students names uppercase me convert karo.

// let modefiedStu = students.map(function (stu) {
 
//     if(stu){
//        let uppercaseVal =  stu.name.toUpperCase()
//         return {...stu, name : uppercaseVal}
//     }



// })

// console.log(modefiedStu);


// Highest marks wala student find karo.

// let arr = [1,2,3];
// let num = arr[0]


// for (let i = 0 ; i< arr.length; i++){
//     // console.log(i);
//     if(arr[i] > num){
//         num = arr[i]
//     }
// }


// console.log(num);

// let higherMarks = 0
// let filterHighestMarkStudent = students.filter(function (stu){

//     if(stu.totalMarks > higherMarks){
//         higherMarks = stu.totalMarks

//         return stu
//     }

// })

// console.log(filterHighestMarkStudent);


// let topperStu = students.find(function(student) {

    
//     // console.log(student.totalMarks , student.totalMarks);
//     // if(student.totalMarks > student.totalMarks){
//     //     return student
//     // }

// })

// console.log(topperStu);
// Ek products array me total stock calculate karo.
// Array of objects me new object push karo.
// User object ko array me find karo.
// Array of objects ko loop se print karo.