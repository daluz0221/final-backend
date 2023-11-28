

export class UpdateActivityDto {

    private constructor(
        public readonly todoId: number,
        public readonly id: number,
        public readonly title?: string,
        public readonly completed?: boolean,
    ){}


    get values(){
        const obj: {[key:string]: any} = {};
        if (this.title) obj.title = this.title;
        if (this.completed) obj.completed = this.completed;
        return obj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateActivityDto?] {
        const { todoId, id, title, completed } = props;

        if (!todoId){
            return ['Se necesita el Id del todo para proceder']
        }

        if (!id || isNaN(Number(id))){
            return ['Invalid object']
        }


        return [undefined, new UpdateActivityDto(todoId, id, title, completed)]

    }

}