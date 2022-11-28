import { Task, TasksService } from '../services/tasks.service';

import { Component } from '@angular/core';
import { TasksCompletedService } from './../services/tasks-completed.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public tasks: Task[] = [];
  public task: Task = { task: '' };

  constructor(
    private taskService: TasksService,
    private TasksCompletedService: TasksCompletedService
  ) {
    this.getTasks();
  }

  private getTasks() {
    this.tasks = [];
    this.taskService.getTasks().subscribe((query) => {
      query.docs.forEach((doc) => {
        const task = doc.data();
        task.id = doc.id;
        this.tasks.push(task);
      });
    });
  }

  public addTask() {
    this.taskService
      .addTasks(this.task)
      .then(() => {
        this.task.task = '';
        this.getTasks();
      })
      .catch((e) => console.log(e));
  }

  public removeTask(id: string) {
    this.taskService
      .removeTask(id)
      .then(() => {
        this.getTasks();
      })
      .catch((e) => console.log(e));
  }
  public CompleteTask(task: Task) {
    this.TasksCompletedService.addTasks(task)
      .then(() => {
        this.taskService
          .removeTask(task.id)
          .then(() => {
            this.getTasks();
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }
}
