import { CreateActivityDto } from "../dtos/activities/create-activity.dto";
import { UpdateActivityDto } from "../dtos/activities/update-activity.dto";
import { ActivityEntity } from "../entities/activity.entity";



export abstract class ActivityDataSource {

    abstract create( createActivityDto: CreateActivityDto ): Promise<ActivityEntity>;

    abstract getActivityById(id: number, todoId: number): Promise<ActivityEntity>;

    abstract updateActivity(updateActivityDto: UpdateActivityDto): Promise<ActivityEntity>;

    abstract deleteActivity(id: number, todoId: number): Promise<ActivityEntity>;
}