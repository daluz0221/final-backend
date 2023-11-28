import { prisma } from "../../data/postgres";
import { ActivityEntity } from "../../domain";
import { ActivityDataSource } from "../../domain/datasource/activity.datasource";
import { CreateActivityDto } from "../../domain/dtos/activities/create-activity.dto";
import { UpdateActivityDto } from "../../domain/dtos/activities/update-activity.dto";



export class ActivityDataSourceImpl extends ActivityDataSource {


    async create(createActivityDto: CreateActivityDto): Promise<ActivityEntity> {
        const activity = await prisma.activity.create({
            data: {
                ...createActivityDto
            },
            
        })

        return ActivityEntity.fromObject(activity);
    }


    async getActivityById(id: number, todoId: number): Promise<ActivityEntity> {
           const activity = await prisma.activity.findUnique({
            where: {
                id,
                todoId,
                deleted: false
            }
           })

            if (!activity) {
                throw new Error("Activity not found");
            }
           
            return ActivityEntity.fromObject(activity);
    }


    async updateActivity(updateActivityDto: UpdateActivityDto): Promise<ActivityEntity> {
        await this.getActivityById(updateActivityDto.id, updateActivityDto.todoId);

        const updateActivity = await prisma.activity.update({
            where: {
                id: updateActivityDto.id
            },
            data: updateActivityDto.values
        });

        return ActivityEntity.fromObject(updateActivity);
    }

    
    async deleteActivity(id: number, todoId: number): Promise<ActivityEntity> {
        await this.getActivityById(id, todoId);

        const activity = await prisma.activity.update({
            where: {
                id
            },
            data: {
                deleted: true
            }
        });

        return ActivityEntity.fromObject(activity);
    }

   
}