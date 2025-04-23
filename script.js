const form = document.querySelector('.main');
const list = document.querySelector('.main-div ul');

const toDoListArray = [];

let task;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;
    const id = crypto.randomUUID();
    task = new ToDoList(id, input, '');
    task.pushTaskInArray();
    task.createListElement(id);
    console.log(toDoListArray)
})
list.addEventListener('click', (e) => {
    const trash = e.target.closest('li');
    const removeBtn = e.target.closest('button');


    // task.removeTask();
    
    // list.removeChild(trash)
    console.log(toDoListArray)
})

