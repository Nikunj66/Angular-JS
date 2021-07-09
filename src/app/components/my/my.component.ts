import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  todos:Todo[]=[];

  constructor(private todoSerivce:TodoService) {
   }

  ngOnInit(): void {
    this.todoSerivce.getTodos().subscribe(todos =>{
      this.todos=todos;
    });
  }

  deleteTodo(todo:Todo){
    this.todos=this.todos.filter(t=> t.id!== todo.id);
    this.todoSerivce.deleteTodo(todo).subscribe();
  }
}
