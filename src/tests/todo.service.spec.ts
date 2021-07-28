import { TestBed } from "@angular/core/testing";

import { TodoService } from "../services/todo.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
