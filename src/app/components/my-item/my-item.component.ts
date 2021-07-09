import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-my-item',
  templateUrl: './my-item.component.html',
  styleUrls: ['./my-item.component.css']
})
export class MyItemComponent implements OnInit {
  @Input() todo:Todo={
    id:0,
    title:"",
    completed:false
  };
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }
  onToggle(todo:Todo){
    todo.completed=!todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo=>console.log(todo)); 
  }
  onDelete(todo:Todo)
  {
    this.deleteTodo.emit(todo);
  }

}
