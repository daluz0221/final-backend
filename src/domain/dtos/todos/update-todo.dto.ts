


export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly title?: string,
        public readonly description?: string,
        public readonly completed?: boolean,
    ){}


    get values(){
        const obj: {[key:string]: any} = {};
        if (this.title) obj.title = this.title;
        if (this.description) obj.description = this.description;
        if (this.completed) obj.completed = this.completed;
        return obj;
    }

    static create(props: {[key:string]: any}): [string?, UpdateTodoDto?] {
        const { id, title, description, completed } = props;

        if (!id || isNaN(Number(id))){
            return ['Invalid object']
        }


        return [undefined, new UpdateTodoDto(id, title, description, completed)]

    }

}