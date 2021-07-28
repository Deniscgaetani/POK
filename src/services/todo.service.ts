import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import Todo from "../types/todo";
import { environment } from "../environments/environment";

@Injectable()
export class TodoService {
  constructor(private readonly httpClient: HttpClient) {}

  private todoList = new BehaviorSubject<Todo[]>([
    {
      id: 0,
      name: "N/A",
    },
  ]);

  get todoList$(): Observable<Todo[]> {
    return this.todoList.asObservable();
  }
  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${environment.apiURL}/v1/todos`);
  }
}
