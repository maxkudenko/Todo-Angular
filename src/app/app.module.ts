import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'

import {AppComponent} from './app.component'
import {TodoFormComponent} from './todo-form/todo-form.component'
import {TodoComponent} from './todo/todo.component'
import {todosReducer} from './redux/todos.reducer'

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({todoPage: todosReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
