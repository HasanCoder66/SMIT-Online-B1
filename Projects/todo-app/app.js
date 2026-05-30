// variables 
let addBtn = document.getElementById("addBtn")
let deleteAllBtn = document.getElementById("deleteAll")
let todoInput = document.getElementById("todoInput")
let todoList  = document.getElementById("todo-list")


// handlers 

function addTodo (){
    if(!todoInput.value.trim()){
        return sweetAlert("error", "Oops...", "please fill input")
    }


   sweetAlert("success","Ok", "Todo Added Successfully")

   todoList.innerHTML += `<li>${todoInput.value}<span>
   <span><i class="fa-solid fa-pen-to-square"></i></span> <span><i
           class="fa-solid fa-trash" onclick="deleteTodo(this)"></i></span>
</span>
</li>`

todoInput.value = ""

}


function deleteTodo (e){
    let removeElem = e.parentNode.parentNode.parentNode
    // console.log("todo deleted!", removeElem);
    removeElem.remove()
    sweetAlert("success","Ok", "Todo Deleted Successfully")
}

function deleteAllTodos (){
console.log(todoList.children);

if(todoList.children.length > 0){

    todoList.innerHTML = ""

    sweetAlert("success","Ok", "All Todos deleted Successfully")
}else {
 sweetAlert("error", "Oops...", "no task in todolist")
}
}

function sweetAlert (icon, title, text){
  return  Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
}


// event listeners

addBtn.addEventListener("click", addTodo)
deleteAllBtn.addEventListener("click", deleteAllTodos)