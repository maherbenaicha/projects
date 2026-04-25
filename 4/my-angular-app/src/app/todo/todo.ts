import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type TodoItem = {
  text: string;
  done: boolean;
};

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  task = '';
  tasks: TodoItem[] = [
    { text: 'Learn Angular basics', done: false },
    { text: 'Build my first Todo app', done: false }
  ];

  addTask() {
    if (this.task.trim()) {
      this.tasks.push({ text: this.task, done: false });
      this.task = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleDone(task: TodoItem) {
    task.done = !task.done;
  }
}
