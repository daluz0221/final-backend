



export class ActivityEntity {


    constructor(
        public todoId: string,
        public id: string,
        public title: string,
        public completed: string,
        public deletedAt: Date,
        public description?: string,
    ) {}

    get isDone() {
        return this.completed;
    }

    public static fromObject(obj: {[key:string]: any}): ActivityEntity{

        const { todoId, id, title, description, completed, deletedAt } = obj;

        if (!id || !title || !todoId){
            throw new Error('Invalid object')
        }

        return new ActivityEntity( id, title, description, completed, deletedAt )
    }


}