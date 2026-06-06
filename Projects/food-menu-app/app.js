// console.log("js is running");
let leftSidebarMenu = document.getElementById("leftSidebar")

let menuInput = document.getElementById("menuInput")
let searchBtn = document.getElementById("searchBtn")
// start application 

const sweeety = (icon, title, text) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,

    });
}

const recipeCard = (recipe) => {
    console.log(recipe);
    return `<div class="recipeCard">
    <img src=${recipe.image_url} alt="" height="100px" width="100px">
    <h3>${recipe.title}</h3>
</div>`
}


const searchItemsHandler = async () => {
    if (!menuInput.value.trim()) {
        return sweeety("error", "Oops!", "Please fill the input")
    }
    let searchItem = menuInput.value;

    try {
        const apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchItem}`)
        let result = await apiRes.json()

     const {data} = result;
     const {recipes} = data;


     const recipeCardHTML = recipes.map((recipe) => recipeCard(recipe))

     leftSidebarMenu.innerHTML = recipeCardHTML.join(" ")
     console.log(recipeCardReturn);
    } catch (error) {

    }
}





const startApp = async () => {
    // console.log("data fetched successfully");

    let apiRes = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
    let result = await apiRes.json()

    // array or object destructuring
    // console.log(result.data.recipes);

    const { data } = result;
    const { recipes } = data;

    let updatedHTMLForRecipe = recipes.map((recipe) => recipeCard(recipe))

    leftSidebarMenu.innerHTML = updatedHTMLForRecipe.join(" ")
    // console.log(updatedHTMLForRecipe);

}




startApp()





// array destructuring kerni haii  []
// object destructuring kerni haii {}



// const arr = [1,2,3,4,5]
// const [one, two, ...others] = arr


// console.log(one);
// console.log(others);


// const user = {
//     email :"codermhasan@gmail.com",
//     password : "123456789",
//     userName : "hasanCoder66"
// }

// console.log(user?.isEmail?.abc);

// const {email, ...others} = user;

// console.log(email);
// console.log(others);

// const [...others] = data; 
// agar rest operator hai to ... dots   ==> bachaa howa data collect kerna  

// agar spread operator hai to ... dots ==> data khol dena.


// const user2 = {
//     ...user,
//     isAdmin : true
// }

// console.log(user2);


// rest or spread operator
// optional chaining


// event listeners ==>

searchBtn.addEventListener("click", searchItemsHandler)