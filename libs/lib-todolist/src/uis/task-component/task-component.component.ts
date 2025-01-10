import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskEntity } from 'todolist-store';
@Component({
  selector: 'lib-task-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.scss',
})
export class TaskComponentComponent {
  @Output() updateTask = new EventEmitter<TaskEntity>();
  public task = input.required<TaskEntity>();
  public completed = computed(() => this.task().complete ? 'completed' : 'ongoing');

  onUpdateTask() {
    this.updateTask.emit(this.task());
  }

  public onDeleteTask() {

  }

  public onToggleComplete() {

  }



}
