import { Component, computed, EventEmitter, input, Output, signal } from '@angular/core';
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
  public isEditing = signal(false);

  onUpdateTask() {
    this.updateTask.emit(this.task());
  }

  public onDeleteTask() {

  }

  public onToggleComplete() {

  }

  enableEdit() {
    this.isEditing.set(true)
  }

  saveEdit() {
    this.isEditing.set(false)
    this.updateTask.emit(this.task()); // Emit the updated task back to the parent
  }



}
