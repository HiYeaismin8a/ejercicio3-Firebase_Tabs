import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: string[] = [];

  constructor(private firestore: AngularFirestore) {
    this.tasks.push('Tarea 1');
    this.tasks.push('Tarea 2');
    //this.tasksCompleted=TasksCompletedService.getTasks();
  }

  public getTasks() {
    return this.firestore.collection<Task>('tasks').get();
  }

  public addTasks(task: Task) {
    return this.firestore.collection<Task>('tasks').add(task);
  }

  public removeTask(id: string) {
    return this.firestore.collection<Task>('tasks').doc(id).delete();
  }
}

export interface Task {
  id?: string;
  task: string;
}
