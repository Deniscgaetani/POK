import { Routes } from "@angular/router";
import { RoutesEnum } from "../enums/routes.enum";
import { TodoComponent } from "./todo/todo.component";

export const ROUTES: Routes = [
  {
    path: RoutesEnum.HOME,
    component: TodoComponent,
  },
];
