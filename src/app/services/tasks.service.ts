import { TasksCompletedService } from './tasks-completed.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: string[] = [];
  private tasksCompleted: string[] = [];

  constructor() {
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
    //this.tasksCompleted=TasksCompletedService.getTasks();
   }

   public getTasks():string[] {
      return this.tasks;
   }

   public addTasks(task:string){
      this.tasks.push(task);
   }

   public removeTask(pos:number){
      this.tasks.splice(pos, 1);
   }

   public returnTaskC(){
      return this.tasksCompleted;
   }
   
}