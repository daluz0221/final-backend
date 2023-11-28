import { CreateTodoDto } from "../dtos/todos/create-todo.dto";
import { UpdateTodoDto } from "../dtos/todos/update-todo.dto";
import { TodoEntity } from "../entities/todo.entity";




export abstract class TodoDataSource {


    abstract getTodos(): Promise<TodoEntity[]>

    abstract getTodoById(id: number): Promise<TodoEntity>

    abstract createTodo( CreateTodoDto: CreateTodoDto ): Promise<TodoEntity>

    abstract updateTodo( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>

    abstract deleteTodo(id:number): Promise<TodoEntity>
    abstract deleteAllTodos(): Promise<any>


}