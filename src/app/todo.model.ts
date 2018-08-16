export class Todo {
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public isFinished: boolean = false,
    public id?: number
  ) {}
}

export interface Todos {
  todos: Todo[]
}
