import { CreateActivityDto } from "../../dtos/activities/create-activity.dto";
import { ActivityEntity } from "../../entities/activity.entity";
import { TodoEntity } from "../../entities/todo.entity";
import { ActivityDataRepository } from "../../repositories/activity.repository";


export interface CreateActivityUseCase {
    execute(createActivityDto: CreateActivityDto): Promise<ActivityEntity>
}


export class CreateActivity implements CreateActivityUseCase{

    constructor(
        private readonly activityDataRepository: ActivityDataRepository
    ){}

    async execute(createActivityDto: CreateActivityDto): Promise<ActivityEntity> {
        return await this.activityDataRepository.create(
            createActivityDto
        )
    }

}
