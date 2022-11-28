import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Task } from './tasks.service';

@Injectable({
  providedIn: 'root',
})
export class TasksCompletedService {
  constructor(private firebase: AngularFirestore) {}

  public getTasks() {
    return this.firebase.collection<Task>('tasks_completed').get();
  }

  public addTasks(task: Task) {
    return this.firebase.collection<Task>('tasks_completed').add(task)
  }

  public removeTask(id: string) {
    return this.firebase.collection<Task>('tasks_completed').doc(id).delete()
  }
}
