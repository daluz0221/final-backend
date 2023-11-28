
import { ActivityEntity } from "../../entities/activity.entity";
import { ActivityDataRepository } from "../../repositories/activity.repository";


export interface DeleteActivityUseCase {
    execute(id: number, todoId: number): Promise<ActivityEntity>
}

export class DeleteActivity implements DeleteActivityUseCase {

    constructor(
        private readonly activityRepository: ActivityDataRepository
    ){}

    public async execute(id: number, todoId: number): Promise<ActivityEntity> {
        return await this.activityRepository.deleteActivity(id, todoId)    
    }

}

