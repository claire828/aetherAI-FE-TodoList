import { Component, computed, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEntity, TodolistSignalStore } from 'todolist-store';
import { WebButtonComponent, CheckboxComponent } from 'web/uis';
@Component({
  selector: 'lib-task-component',
  standalone: true,
  imports: [CommonModule, WebButtonComponent, CheckboxComponent],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.scss',
})
export class TaskComponentComponent {
  public updateTask = output<TaskEntity>();
  public task = input.required<TaskEntity>();
  public isEditing = signal(false);
  protected store = inject(TodolistSignalStore);
  protected selected = computed(() => this.store.selectedIds().includes(this.task().id));
  onUpdateTask() {
    this.updateTask.emit(this.task());
  }
  public onDeleteTask() {
    this.store.deleteTodo(this.task());
  }

  enableEdit() {
    this.isEditing.set(true)
  }

  saveEdit() {
    this.isEditing.set(false)
    this.updateTask.emit(this.task()); // Emit the updated task back to the parent
  }

  public selectChanged(isSelected: boolean) {
    if (isSelected) {
      this.store.addSelected(this.task().id);
      return;
    }
    this.store.removeSelected(this.task().id);
  }

}
