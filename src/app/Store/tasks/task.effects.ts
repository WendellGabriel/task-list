import { TaskService } from './../../Repository/TaskService';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromTasksAction from './task.action';



@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  // loadTasks$ = createEffect(() => this.actions$.pipe(
  //   ofType(fromTasksAction.LoadTasks),
  //   mergeMap(() => this.taskService.getTasks()
  //     .pipe(
  //       map(payload => fromTasksAction.LoadTasks(),
  //     ))
  //   ))
  // )
  loadTasks$ = createEffect(
    () =>
        this.actions$.pipe(
            ofType(fromTasksAction.LoadTasks),
            mergeMap(() => this.taskService.getTasks()
                .pipe(
                    map(payload =>
                      fromTasksAction.LoadTasksSuccess({ payload })
                    )
                )
            )
        )
)


loadTask$ = createEffect(
  () =>
      this.actions$.pipe(
          ofType(fromTasksAction.LoadTask),
          mergeMap((record:any) => this.taskService.getTask(record.payload)
              .pipe(
                  map(payload =>
                    fromTasksAction.LoadTaskSucess({ payload }),
                      catchError(error => of(fromTasksAction.LoadTaskFail({ error })))
                  )
              )
          )
      )
)

createTask$ = createEffect(
  () =>
      this.actions$.pipe(
          ofType(fromTasksAction.CreateTask),
          mergeMap((record:any) => this.taskService.addTask(record.payload)
              .pipe(
                  map(payload =>
                      fromTasksAction.CreateTaskSuccess({ payload }),
                      catchError(error => of(fromTasksAction.CreateTaskFail({ error })))
                  )
              )
          )
      )
)

updateTask$ = createEffect(
  () =>
      this.actions$.pipe(
          ofType(fromTasksAction.UpdateTask),
          exhaustMap((record:any) => this.taskService.updateTask(record.payload)
              .pipe(
                  map(payload =>
                    fromTasksAction.UpdateTaskSuccess({ payload }),
                      catchError(error => of(fromTasksAction.UpdateTaskFail({ error })))
                  )
              )
          )
      )
)

deleteTask$ = createEffect(
  () =>
      this.actions$.pipe(
          ofType(fromTasksAction.DeleteTask),
          exhaustMap((record:any) => this.taskService.deleteTask(record.payload)
              .pipe(
                  map(() =>
                  fromTasksAction.DeleteTaskSuccess({ payload: record.payload }),
                      catchError(error => of(fromTasksAction.DeleteTaskFail({ error })))
                  )
              )
          )
      )
)

}
