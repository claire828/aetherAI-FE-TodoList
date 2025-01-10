import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskEntity } from 'todolist-store';
@Component({
  selector: 'lib-task-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.scss',
})
export class TaskComponentComponent {
  public task = input.required<TaskEntity>();
  public completed = computed(() => this.task().complete ? 'completed' : 'ongoing');



  public onDeleteTask() {

  }

  public onToggleComplete() {

  }


}
