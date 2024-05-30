let write = document.getElementById('write');
let todoList = document.getElementById('todo-list');

write.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        // todoList.innerHTML = this.value;
        addTodo(this.value);
        this.value = ''; //after printing the box will become empty
    }
})

function addTodo(val){
    let li = document.createElement("li");
    li.innerHTML = `${val}`;
    todoList.appendChild(li);
    console.log(val); //to print the value in console which we have written in box

    li.addEventListener("click", function(){
        this.classList.toggle('done'); //to make cut sign on text
    })
}