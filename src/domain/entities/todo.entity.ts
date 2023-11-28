import { ActivityEntity } from "./activity.entity";




export class TodoEntity {

    constructor(
        public id: string,
        public title: string,
        public completed: boolean,
        public deleted: boolean,
        public description?: string,
        public activities?: ActivityEntity[]
    ) {}

    get isDone() {
        return this.completed;
    }

    public static fromObject(obj: {[key:string]: any}): TodoEntity{

        const { id, title, description, completed, deleted, activities } = obj;

        if (!id || !title){
            throw new Error('Invalid object')
        }



        return new TodoEntity( id, title, completed, deleted, description, activities )
    }

}

