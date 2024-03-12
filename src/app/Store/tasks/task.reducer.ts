
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { TaskModel } from '../../Model/TaskModel';
import * as fromTasksAction from '../tasks/task.action';


export interface TaskState{
  tasks: TaskModel[];
  task: TaskModel | null,
  error: string | '',
}

export const initialStateTest: TaskState = {
  tasks : [],
  task: null,
  error: ''
}


const _taskReducer= createReducer(
  initialStateTest,
  on(fromTasksAction.LoadTasksSuccess,(state,{ payload })=>({...state, tasks: payload, error: ''})),
  on(fromTasksAction.LoadTasksFail,(state,{ error })=>({...state, error: error})),

  on(fromTasksAction.LoadTaskSucess,(state,{ payload })=>({...state, task: payload, error: ''})),
  on(fromTasksAction.LoadTaskFail,(state,{ error })=>({...state, error: error})),

  on(fromTasksAction.CreateTaskSuccess,(state,{ payload })=>({...state, tasks: [...state.tasks, payload], error: ''})),
  on(fromTasksAction.CreateTaskFail,(state,{ error })=>({...state, error: error})),

  on(fromTasksAction.UpdateTaskSuccess,(state,{ payload })=>({
      ...state,
      tasks: [...state.tasks].map((row)=>{
          if(row.id == payload.id){
              return payload;
          }
          else{
              return row;
          }
      }),
      error: ''
  })),
  on(fromTasksAction.DeleteTaskSuccess,(state,{ payload })=>({
      ...state,
      tasks: [...state.tasks].filter((filter)=> filter.id != payload),
      error: ''})),

)

export function taskReducer(state = initialStateTest, action: Action){
  return _taskReducer(state, action);
}


const getTasksFeatureState = createFeatureSelector<TaskState>(
  'tasks'
)

export const getTasks = createSelector(
  getTasksFeatureState,
  (state: TaskState) => state.tasks
)
