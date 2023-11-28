import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface DeleteTodosUseCase {
    execute(): Promise<any>
}

export class DeleteTodos implements DeleteTodosUseCase {

    constructor(
        private readonly todoRepository: TodoDataRepository
    ){}

    public async execute(): Promise<any> {
        return await this.todoRepository.deleteAllTodos()    
    }

}

