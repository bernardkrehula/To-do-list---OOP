class ToDoList {
    constructor(id, task, isChecked){
      this.id = id;
      this.task = task;
      this.isChecked = isChecked;
    
    }
    pushTaskInArray(){
      toDoListArray.push(task);
    }
    getSummary() {
      return `Task is ${this.task}`
    }

    isTaskChecked(){
 
    }
    createListElement(id){
      let html = `
      <li id="${id}"><p>Jogurt</p><input type="checkbox" class="checked"></input><button class="trash">🗑️</button></li>
      `;
      list.insertAdjacentHTML('beforeend', html)
    }

    removeTask(){
        toDoListArray.filter(task => task.id != this.id);
    }
}

