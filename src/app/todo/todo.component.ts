import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Observable } from "rxjs";
import Todo from "../../types/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todo$: Observable<Todo[]> | undefined;
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    console.log("todo");
    this.todo$ = this.todoService.getTodoList();
  }
}
