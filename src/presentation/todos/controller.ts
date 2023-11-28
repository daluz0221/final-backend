import { Request, Response } from "express"
import { CreateTodoDto, DeleteTodo, TodoDataRepository, UpdateTodo, GetTodos, CreateTodo, GetTodo } from "../../domain"
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto"
import { DeleteTodos } from "../../domain/use-cases/todo/delete-todos"




export class TodosController {

    constructor(
        private readonly todoRepository: TodoDataRepository
    ) {}

    public getTodos = (req: Request, res: Response) => {
        new GetTodos(this.todoRepository).execute()
            .then( todos => res.status(200).json(todos) )
            .catch( err => res.status(500).json(err) )
     }



     public getTodoById = (req: Request, res: Response) => {

        const id = +req.params.id
        
        new GetTodo( this.todoRepository ).execute(id)
            .then( todo => res.status(200).json(todo) )
            .catch( err => res.status(500).json({message: 'Todo no encontrado'}) )
    }



     public createTodo = (req: Request, res: Response) => {

        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        

        if (error) {
            return res.status(400).json(error)
        }

        new CreateTodo( this.todoRepository ).execute(createTodoDto!)
            .then( todo => res.status(201).json(todo) )
            .catch( err => res.status(500).json(err) )

     };

    public updateTodo = async(req: Request, res: Response) => {
        const id = +req.params.id
        const [error, updateTodoDto] = UpdateTodoDto.create({
            ...req.body,
            id
        });
        
        if (error) {
            return res.status(400).json({error})
        }

        new UpdateTodo( this.todoRepository ).execute(updateTodoDto!)
            .then( todo => res.status(200).json(todo) )
            .catch( err => res.status(500).json(err) )

    };


    public deleteTodo = async(req: Request, res: Response) => {

        const id = +req.params.id
        if(isNaN(id)) {
            return res.status(400).json({
                message: "id must be a number"
            })
        };

        new DeleteTodo( this.todoRepository ).execute(id)
            .then( todo => res.status(200).json(todo) )
            .catch( err => res.status(500).json(err) )

    } 


    public deleteAllTodos = async(req: Request, res: Response) => {

        new DeleteTodos( this.todoRepository ).execute()
            .then( todo => res.status(200).json(todo) )
            .catch( err => res.status(500).json(err) )
    }


}