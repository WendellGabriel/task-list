import { ActionReducerMap } from "@ngrx/store";

import { taskReducer, TaskState } from "./tasks/task.reducer";
import { TaskEffects } from "./tasks/task.effects";


export interface AppState{
    tasks: TaskState
}

export const appReducer: ActionReducerMap<AppState> = {
    tasks: taskReducer
}

export const appEffects = [
    TaskEffects
]
