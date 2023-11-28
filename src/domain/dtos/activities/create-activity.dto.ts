

export class CreateActivityDto {

    constructor(
        public readonly todoId: number,
        public readonly title: string,
    ){}

    static create(props: {[key:string]: any}): [string?, CreateActivityDto?] {
        
        const { todoId, title } = props;

        if (!title || !todoId){
            return ['Invalid object']
        }

        return [undefined, new CreateActivityDto(todoId, title)]

    }

}