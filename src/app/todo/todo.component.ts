import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {Todo} from '../todo.model'
import {AppState} from '../redux/app.state'
import {DeleteTodo, UpdateTodo} from '../redux/todos.action'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todo

  constructor(private store: Store<AppState>) {}

  onDelete() {
    this.store.dispatch(new DeleteTodo(this.todo))
  }

  onFinished() {
    this.store.dispatch(new UpdateTodo(this.todo))
  }

}
