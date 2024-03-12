import { TaskModel } from './../Model/TaskModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get<TaskModel[]>('http://localhost:3000/Tasks');
    }

    getTask(id: number) {
        return this.http.get<TaskModel>('http://localhost:3000/Tasks/' + id);
    }

    addTask(record: TaskModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post<TaskModel>('http://localhost:3000/Tasks', JSON.stringify(record), { headers: headers });
    }

    updateTask(record: TaskModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.put<TaskModel>('http://localhost:3000/Tasks/' + record.id, JSON.stringify(record), { headers: headers });

    }

    deleteTask(id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.delete('http://localhost:3000/Tasks/' + id, { headers: headers });

    }
}
