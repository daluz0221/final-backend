import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface GetTodosUseCase {
  execute(): Promise<TodoEntity[]>
}

export class GetTodos implements GetTodosUseCase {

    constructor(
        private readonly todoRepository: TodoDataRepository
    ){}

    public async execute(): Promise<TodoEntity[]> {
        return await this.todoRepository.getTodos()    
    }

}