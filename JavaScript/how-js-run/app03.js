console.log("starts of app03 js -->");

setTimeout(() => {
console.log("This is from the Task Queue, inside setTimeout");
}, 2000)

Promise.resolve().then(() => {
    console.log("This is from the Micro Task Queue, Inside Promise....");
})

console.log("ends of app03 js -->");