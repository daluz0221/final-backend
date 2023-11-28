import { CreateTodoDto } from "../../dtos/todos/create-todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoDataRepository } from "../../repositories/todo.repository";


export interface CreateTodoUseCase {
    execute(createTodoDto: CreateTodoDto): Promise<TodoEntity>
}


export class CreateTodo implements CreateTodoUseCase{

    constructor(
        private readonly todoDataRepository: TodoDataRepository
    ){}

    async execute(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return await this.todoDataRepository.createTodo(
            createTodoDto
        )
    }

}
