import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import * as moment from 'moment'
import {AppState} from '../redux/app.state'
import {Todo} from '../todo.model'
import {AddTodo} from '../redux/todos.action'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  private id: number = 2

  todoName: string = ''
  todoDescription: string = ''

  constructor(private store: Store<AppState>) {
  }

  onAdd() {
    if (this.todoDescription === '' || this.todoName === '') return

    this.id = ++this.id

    const todo = new Todo(
      this.todoName,
      moment().format('DD.MM.YY'),
      this.todoDescription,
      false,
      this.id
    )

    this.store.dispatch(new AddTodo(todo))

    this.todoDescription = ''
    this.todoName = ''
  }
}
