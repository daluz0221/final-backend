import { UpdateTodoDto } from "../../dtos/todos/update-todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface UpdateTodoUseCase {
    execute( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>
}

export class UpdateTodo implements UpdateTodoUseCase{

    constructor(
        private readonly todoDataRepository: TodoDataRepository
    ){}

    public async execute( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity> {
        return await this.todoDataRepository.updateTodo(
            updateTodoDto
        )
    }

}