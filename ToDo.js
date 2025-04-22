class ToDoList {
    constructor(task, isChecked, trash){
      this.task = task;
      this.isChecked = isChecked;
      this.trash = trash;

      this.removeTask();
    }
    getSummary() {
      return `Task is ${this.task}`
    }

    isTaskChecked(){

    }
    
    removeTask(){
        if(this.trash){
            toDoListArray.filter(trash => trash != true);
        }
    }
}
