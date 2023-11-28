import { UpdateActivityDto } from "../../dtos/activities/update-activity.dto";
import { ActivityEntity } from "../../entities/activity.entity";
import { ActivityDataRepository } from "../../repositories/activity.repository";


export interface UpdateActivityUseCase {
    execute( updateActivityDto: UpdateActivityDto ): Promise<ActivityEntity>
}


export class UpdateActivity implements UpdateActivityUseCase {

    constructor(
        private readonly activityRepository: ActivityDataRepository
    ) {

    }

    public async execute( updateActivityDto: UpdateActivityDto ): Promise<ActivityEntity> {
        return await this.activityRepository.updateActivity( updateActivityDto );
    }

}