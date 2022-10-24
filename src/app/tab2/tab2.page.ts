import { TasksService } from './../services/tasks.service';
import { TasksCompletedService } from './../services/tasks-completed.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public tasks: string[];
  public tasksC: string[];

  constructor(
    private taskService: TasksService,
    private TasksCompletedService: TasksCompletedService
  ) {
    this.tasks = this.taskService.returnTaskC();
  }

  public CompleteTask(pos: number) {
    this.taskService.addTasks(this.tasks[pos]);
    this.TasksCompletedService.removeTask(pos);

    this.tasks = this.taskService.returnTaskC();
  }
}
