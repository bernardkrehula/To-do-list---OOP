const form = document.querySelector('.main');
const list = document.querySelector('.main-div ul');
const formInput = document.querySelector('.main input');


let toDoListArray = [];

let task;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    let input = formInput.value;

    task = new ToDoList(id, input, '');
    task.pushTaskInArray();
    task.createListElement(id, input);
    formInput.value = '';
})
list.addEventListener('click', (e) => {
    const listId = e.target.closest('li').id;
    const selectedList = e.target.closest('li');
    const removeBtn = e.target.closest('button');
    const checkBox = e.target.closest('input');
  
    if(removeBtn){
        task.removeTask(listId);
        list.removeChild(selectedList)
    }
    
    if(checkBox){
        task.isTaskChecked(checkBox.checked, listId, selectedList);
    }
})

