import { NavigationEnd, Router } from '@angular/router';
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

  constructor(
    private TasksCompletedService: TasksCompletedService,
    private router: Router
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url.endsWith('tab2')) {
          this.getTasks();
        }
      }
    });
  }

  private getTasks() {
    this.tasks = [];
    this.TasksCompletedService.getTasks().subscribe((query) => {
      query.docs.forEach((doc) => {
        const task = doc.data();
        task.id = doc.id;
        this.tasks.push(task);
      });
    });
  }
}
