import { loadTasks } from './../../../../task-list/src/app/Core/Store/tasks/task.action';
import { Component, Input } from '@angular/core';
import { TaskModel } from '../Model/TaskModel';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromTasksAction from '../Store/tasks/task.action';
import * as fromTaskSelector from '../Store/tasks/task.reducer';
import { AppState } from '../Store';
import { TaskService } from '../Repository/TaskService';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

//@Input() tasks: TaskModel[] | undefined;
tasks: TaskModel[] | undefined;
tasks$ : Observable<TaskModel[]> = this.store.select(fromTaskSelector.getTasks);


constructor(private store: Store<AppState>, private taskService : TaskService) { }

ngOnInit(): void {

  this.store.dispatch(fromTasksAction.LoadTasks());

}

// editar(id: number){
//   this.store.dispatch(fromUsuariosAction.LoadUsuario({payload:id}));
// }

// excluir(id: number){
//   this.store.dispatch(fromUsuariosAction.DeleteUsuario({payload:id}));
// }
}
