import { Component } from '@angular/core';
import { TaskModel } from './Model/TaskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
tasks: TaskModel[] = [
    { id: 1,title: 'Task 1', description: 'Description of Task 1', assignee: 'John', status: 'In Progress' },
    { id: 1,title: 'Task 2', description: 'Description of Task 2', assignee: 'Alice', status: 'Pending' },
    { id: 1,title: 'Task 3', description: 'Description of Task 3', assignee: 'Bob', status: 'Completed' }
  ];
}
