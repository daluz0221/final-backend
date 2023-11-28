import { ActivityEntity } from "../../domain";
import { ActivityDataSource } from "../../domain/datasource/activity.datasource";
import { CreateActivityDto } from "../../domain/dtos/activities/create-activity.dto";
import { UpdateActivityDto } from "../../domain/dtos/activities/update-activity.dto";
import { ActivityDataRepository } from "../../domain/repositories/activity.repository";



export class ActivityRepositoryImpl extends ActivityDataRepository {

    constructor(
        private readonly datasource: ActivityDataSource
    ){
        super();
    }


    create(createActivityDto: CreateActivityDto): Promise<ActivityEntity> {
        return this.datasource.create(createActivityDto);
    }


    getActivityById(id: number, todoId: number): Promise<ActivityEntity> {
        return this.datasource.getActivityById(id, todoId);
    }


    updateActivity(updateActivityDto: UpdateActivityDto): Promise<ActivityEntity> {
        return this.datasource.updateActivity(updateActivityDto);
    }


    deleteActivity(id: number, todoId: number): Promise<ActivityEntity> {
        return this.datasource.deleteActivity(id, todoId);
    }

}