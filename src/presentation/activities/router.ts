import { Router } from "express";
import { ActivityDataSourceImpl } from "../../infraestructure/datasource/activity.datasource.impl";
import { ActivityRepositoryImpl } from "../../infraestructure/repositories/activity.repository.impl";
import { ActivityController } from "./controller";



export class ActivityRoutes {


    static get routes(): Router{

        const datasource = new ActivityDataSourceImpl();
        const activityRepository = new ActivityRepositoryImpl(datasource);

        const router = Router();
        const activityController = new ActivityController(activityRepository);
        
        router.post('/:todoId', activityController.createActivity);
        router.put('/:id/:todoId', activityController.updateActivity);
        router.delete('/:id/:todoId', activityController.deleteActivity);


        return router;
    }
}