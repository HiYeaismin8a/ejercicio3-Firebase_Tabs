import { Task, TasksService } from './../services/tasks.service';

import { Component } from '@angular/core';
import { TasksCompletedService } from './../services/tasks-completed.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public tasks: Task[] = [];
  public tasksC: Task[] = [];

  constructor(
    private TasksCompletedService: TasksCompletedService
  ) {
    this.TasksCompletedService.getTasks().subscribe((query) => {
      query.docs.forEach((doc) => {
        const task = doc.data();
        task.id = doc.id;
        this.tasks.push(task);
      });
    });
  }
}
