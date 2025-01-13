import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEntity } from 'todolist-store';
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
  public selected = signal(false);

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


  public selectChanged(event: boolean) {
    this.selected.set(event);
    // todo: update to selected
  }


}
