import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface GetTodoUseCase {
    execute(id: number): Promise<TodoEntity>
}


export class GetTodo implements GetTodoUseCase {

    constructor(
        private readonly todoRepository: TodoDataRepository
    ){}

    public async execute(id: number): Promise<TodoEntity> {
        return await this.todoRepository.getTodoById(id)    
    }

}