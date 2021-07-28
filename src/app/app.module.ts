import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TodoComponent } from "./todo/todo.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoService } from "../services/todo.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
