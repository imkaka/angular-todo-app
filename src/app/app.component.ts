import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [];

  addTodo(value) {
    if ((value as string).trim() !== "") {
    this.todoArray.push(value);
    console.log(this.todoArray);
    }
    else {
      alert("You can't do something that is Nothing!");
    }
  }

  deleteTodo(value) {
    let index = this.todoArray.indexOf(value);
    this.todoArray.splice(index, 1);
    console.log(this.todoArray);
  }

  todoSubmit(value:any){
    if (value.todo !== null) {
      if (value.todo !== "") {
        console.log(value);
        this.todoArray.push(value.todo);
        console.log(this.todoArray);
      }
      else {
        alert("You can't do something that is Nothing!");
      }
      
    } else {
      alert("You can't do something that is Nothing!");
    }
  }
}
