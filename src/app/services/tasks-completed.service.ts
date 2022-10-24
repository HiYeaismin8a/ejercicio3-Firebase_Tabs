import { TasksService } from './tasks.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksCompletedService {
  public tasksCompleted: string[] = [];

  constructor(private TasksService: TasksService) {
    this.tasksCompleted = TasksService.returnTaskC();
  }

  public getTasks(): string[] {
    return this.tasksCompleted;
  }

  public addTasks(task: string) {
    this.tasksCompleted.push(task);
  }

  public removeTask(pos: number) {
    this.tasksCompleted.splice(pos, 1);
  }
}
