import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs/Observable'
import {Todos} from './todo.model'
import {AppState} from './redux/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todoState: Observable<Todos>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todoState = this.store.select('todoPage')
  }
}
