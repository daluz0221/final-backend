import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDataSourceImpl } from "../../infraestructure/datasource/todo.datasoruce.impl";
import { TodoRepositoryImpl } from "../../infraestructure/repositories/todo.repository.impl";



export class TodoRoutes {

    static get routes() {

        const datasource = new TodoDataSourceImpl();
        const todoRepository = new TodoRepositoryImpl(datasource);

        const router = Router();
        const todoController = new TodosController( todoRepository );
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);

        router.post('/', todoController.createTodo);

        router.put('/:id', todoController.updateTodo);

        router.delete('/:id', todoController.deleteTodo);
        router.delete('/', todoController.deleteAllTodos);

        return router;

    }

}