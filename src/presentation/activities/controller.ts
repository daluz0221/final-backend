import { Request, Response } from "express";
import { ActivityDataRepository } from "../../domain/repositories/activity.repository";
import { CreateActivityDto } from "../../domain/dtos/activities/create-activity.dto";
import { CreateActivity } from "../../domain/use-cases/activity/create-activity";
import { UpdateActivity } from "../../domain/use-cases/activity/update-activity";
import { UpdateActivityDto } from "../../domain/dtos/activities/update-activity.dto";
import { DeleteActivity } from "../../domain/use-cases/activity/delete-activity";



export class ActivityController {

    constructor(
        private readonly activityRepository: ActivityDataRepository
    ){}


    public createActivity = (req: Request, res: Response) => {

        const sendObj = {
            ...req.body,
            todoId: +req.params.todoId
        };
        

        const [error, createActivityDto] = CreateActivityDto.create( sendObj);

        if (error) {
            return res.status(400).json(error)
        }

        new CreateActivity( this.activityRepository ).execute(createActivityDto!)
            .then( activity => res.status(201).json(activity) )
            .catch( err => res.status(500).json({message: "no hubo creación"}) )

    }


    public updateActivity = (req: Request, res: Response) => {

        const id = +req.params.id
        const todoId = +req.params.todoId
        const [error, updateActivityDto] = UpdateActivityDto.create({
            ...req.body,
            id,
            todoId
        });

        if (error) {
            return res.status(400).json({error})
        }

        new UpdateActivity( this.activityRepository ).execute(updateActivityDto!)
            .then( activity => res.status(200).json(activity) )
            .catch( err => res.status(500).json({message: "no hubo actualización"}) )
    }

    public deleteActivity = (req: Request, res: Response) => {

        const id = +req.params.id
        const todoId = +req.params.todoId

        if (isNaN(id) || isNaN(todoId)) {
            return res.status(400).json({message: "id no válido"})
        }

        new DeleteActivity( this.activityRepository ).execute(id, todoId)
            .then( activity => res.status(200).json(activity) )
            .catch( err => res.status(500).json({message: "no hubo eliminación"}) )
    }

}