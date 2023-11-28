import { Router } from "express";
import { TodoRoutes } from "./todos/routes";
import { ActivityRoutes } from "./activities/router";





export class AppRoutes {


    static get routes(): Router {

        const router = Router();
        router.use('/api/todo', TodoRoutes.routes)
        router.use('/api/activity', ActivityRoutes.routes)

        return router;

    }

}