import { prisma } from "../../data/postgres";
import { TodoDataSource } from "../../domain/datasource/todo.datasource";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";
import { TodoEntity } from "../../domain/entities/todo.entity";



export class TodoDataSourceImpl implements TodoDataSource{
    
    
    
    async deleteAllTodos(): Promise<any> {
        const todos = await prisma.todo.deleteMany(
            {
                where: {
                    deleted: false
                }
            }
        )
        
        return todos;
    }



    async getTodos(): Promise<TodoEntity[]> {
        const todos = await prisma.todo.findMany({
            where: {
                deleted: false
            },
            include: {
                activities: true
            }
        });

        return todos.map( todo => TodoEntity.fromObject(todo) )
    }

    async getTodoById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findUnique({
            where: {
                id,
                deleted: false
            }
        });

        if (!todo) {
            throw new Error("Todo not found");
        }

        return TodoEntity.fromObject( todo );
    }


    async createTodo(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        
        const todo = await prisma.todo.create({
            data: createTodoDto!
        });

        return TodoEntity.fromObject( todo )
    }


    async updateTodo(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        await this.getTodoById(updateTodoDto.id);

        const todo = await prisma.todo.update({
            where: {
                id: updateTodoDto.id
            },
            data: updateTodoDto.values
        });

        return TodoEntity.fromObject( todo );
        
    }


    async deleteTodo(id:number): Promise<TodoEntity> {
        await this.getTodoById(id);
        const deleteTodo = await prisma.todo.update({
            where: {
                id
            },
            data: {
                deleted: true
            }
        });

        return TodoEntity.fromObject( deleteTodo );
    }

}