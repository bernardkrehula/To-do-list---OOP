class ToDo {
    constructor(id, task, isChecked){
      this.id = id;
      this.task = task;
      this.isChecked = isChecked;
    }

    isTaskChecked(checked, listId, selectedList){
      let object = toDoListArray.find(task => task.id == listId);
      object.isChecked = checked;
  
      if(object.isChecked){
        selectedList.style.textDecoration = 'line-through';
      }
      else {
        selectedList.style.textDecoration = '';
      }
    }
}

class ToDoList {
    constructor(){
      this.toDoListArray = [];
    }

  pushTaskInArray(createdTask){
   this.toDoListArray.push(createdTask);
   console.log(createdTask)
   console.log(this.toDoListArray)
  }
  createListElement(id, input){
    let html = `
    <li id="${id}"><p>${input}</p><input type="checkbox" class="checked"></input><button class="trash">🗑️</button></li>
    `;
    list.insertAdjacentHTML('beforeend', html)
  }

  removeTask(listId){
    toDoListArray = toDoListArray.filter(task => task.id != listId);
  }
}
array = new ToDoList();
