class ToDo {
    constructor(id, task, isChecked){
      this.id = id;
      this.task = task;
      this.isChecked = isChecked;
    }
}

class ToDoList {
    constructor(){
      this.toDoListArray = [];
    }

  pushTaskInArray(createdTask){
   this.toDoListArray.push(createdTask);
   console.log(this.toDoListArray)
  }

  isTaskChecked(checked, listId, selectedList){
    let object = this.toDoListArray.find(task => task.id == listId);
    object.isChecked = checked;

    if(object.isChecked){
      selectedList.style.textDecoration = 'line-through';
    }
    else {
      selectedList.style.textDecoration = '';
    }
  }
  createListElement(id, input){
    let html = `
    <li id="${id}"><p>${input}</p><input type="checkbox" class="checked"></input><button class="trash">🗑️</button></li>
    `;
    list.insertAdjacentHTML('beforeend', html)
  }

  removeTask(listId){
    this.toDoListArray.filter(task => task.id != listId);
    console.log(listId)
    console.log(this.toDoListArray)
  }
}
array = new ToDoList();
