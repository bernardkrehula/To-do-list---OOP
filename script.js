const form = document.querySelector('.main');

let toDoListArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;

    const task = new ToDoList(input, 'Checked', 'true');
    toDoListArray.push(task);
    console.log(toDoListArray)
    
})