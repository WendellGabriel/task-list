
import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../Model/TaskModel';


export const LoadTasks = createAction(
  '[TASK] LOAD ALL TASKS'
);
export const LoadTasksSuccess = createAction(
  '[TASK] LOAD TASKS SUCESSS',
  props<{ payload: TaskModel[] }>()
);


export const LoadTasksFail = createAction(
  '[TASK] LOAD TASKS FAIL',
  props<{ error: string }>()
);

// Load Usuario

export const LoadTask = createAction(
  '[TASK] LOAD TASK ',
  props<{ payload: number }>()
);

export const LoadTaskSucess = createAction(
  '[TASK] LOAD TASK SUCESS ',
  props<{ payload: TaskModel }>()
);

export const LoadTaskFail = createAction(
  '[TASK] LOAD TASK FAIL ',
  props<{ error: string }>()
);

// Create Usuario

export const CreateTask = createAction(
  '[TASK] CREATE TASK',
  props<{ payload: TaskModel }>()
);

export const CreateTaskSuccess = createAction(
  '[TASK] CREATE TASK SUCCESS',
  props<{ payload: TaskModel }>()
);

export const CreateTaskFail = createAction(
  '[TASK] CREATE TASK FAIL',
  props<{ error: string }>()
);

// Update Usuario

export const UpdateTask = createAction(
  '[TASK] UPDATE TASK',
  props<{ payload: TaskModel }>()
);

export const UpdateTaskSuccess = createAction(
  '[TASK] UPDATE TASK SUCESS',
  props<{ payload: TaskModel }>()
);

export const UpdateTaskFail = createAction(
  '[TASK] UPDATE TASK FAIL',
  props<{ error: string }>()
);

// Delete Usuario

export const DeleteTask = createAction(
  '[TASK] DELETE TASK ',
  props<{ payload: number }>()
);

export const DeleteTaskSuccess = createAction(
  '[TASK] DELETE TASK SUCESS',
  props<{ payload: number }>()
);

export const DeleteTaskFail = createAction(
  '[TASK] DELETE TASK FAIL',
  props<{ error: string }>()
);

