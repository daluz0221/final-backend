import { TodoDataSource } from "../../domain";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";
import { TodoEntity } from "../../domain/entities/todo.entity";
import { TodoDataRepository } from "../../domain/repositories/todo.repository";



export class TodoRepositoryImpl implements TodoDataRepository {

    constructor(
        private readonly datasource: TodoDataSource
    ) {}
    deleteAllTodos(): Promise<any> {
        return this.datasource.deleteAllTodos()
    }


    getTodos(): Promise<TodoEntity[]> {
        return this.datasource.getTodos()
    }


    getTodoById(id: number): Promise<TodoEntity> {
        return this.datasource.getTodoById(id)
    }


    createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.createTodo( createTodoDto )
    }


    updateTodo(updateTodoDto:UpdateTodoDto): Promise<any> {
        return this.datasource.updateTodo(updateTodoDto)
    }


    deleteTodo(id: number): Promise<TodoEntity> {
        return this.datasource.deleteTodo(id)
    }

}