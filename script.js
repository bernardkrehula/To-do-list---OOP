const form = document.querySelector('.main');
const list = document.querySelector('.main-div ul');
const formInput = document.querySelector('.main input');

let task;
let array;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    let input = formInput.value;

    task = new ToDo(id, input, '');
    
    array.pushTaskInArray(task);
    array.createListElement(id, input);
   
    formInput.value = '';
})
list.addEventListener('click', (e) => {
    const listId = e.target.closest('li').id;
    const selectedList = e.target.closest('li');
    const removeBtn = e.target.closest('button');
    const checkBox = e.target.closest('input');
  
    if(removeBtn){
        array.removeTask(listId);
        list.removeChild(selectedList)
    }
    
    if(checkBox){
        array.isTaskChecked(checkBox.checked, listId, selectedList);
    }
})

