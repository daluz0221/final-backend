import { ActivityEntity } from "../../entities/activity.entity";



export class CreateTodoDto {


    private constructor(
        public readonly title: string,
        public readonly description?: string,
    ){}



    static create(props: {[key:string]: any}): [string?, CreateTodoDto?] {
        const { title, description = '' } = props;

        if (!title){
            return ['Invalid object']
        }

        return [undefined, new CreateTodoDto(title, description)]

    }

}