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
    createListElement(){
      
    }
    removeTask(){
        toDoListArray.filter(task => task.id != this.id);
    }
}

