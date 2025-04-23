const form = document.querySelector('.main');
const remove = document.querySelector('.trash')
const list = document.querySelector('.main ul');

const toDoListArray = [];

let task;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;
    const id = crypto.randomUUID();
    task = new ToDoList(id, input, '');
    task.pushTaskInArray();
    
    console.log(toDoListArray)
})
remove.addEventListener('click', (e) => {
    const trash = e.target.closest('li');

    task.removeTask();
    list.removeChild(trash)
    console.log(toDoListArray)
})

