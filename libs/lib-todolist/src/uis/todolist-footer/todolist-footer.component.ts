import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBorderButtonComponent, WebButtonComponent } from 'web/uis';

@Component({
  selector: 'lib-todolist-footer',
  standalone: true,
  imports: [CommonModule, WebBorderButtonComponent, WebButtonComponent],
  template: `<footer class="mt-4 flex justify-between text-sm">
  <uis-web-button
    [btnClasses]="'bg-gray-500 hover:bg-gray-600'"
    [buttonName]="'Select All'"
  ></uis-web-button>

  @if (this.showCompletedArea()) {
    <div class="flex gap-2">
      <uis-web-border-button
        [btnClasses]="'border-green-500 text-green-500 hover:bg-green-100 hover:text-green-600'"
        [buttonName]="'Complete'"
        (click)="completeAllTodos()"
      ></uis-web-border-button>
      <uis-web-border-button
        [btnClasses]="'hover:bg-gray-100 hover:text-gray-600'"
        [buttonName]="'Incomplete'"
        (click)="incompleteAllTodos()"
      ></uis-web-border-button>
    </div>
  }
</footer>
`
})
export class TodolistFooterComponent {
  public completeTodos = output<boolean>();
  public showCompletedArea = input.required<boolean>();

  public completeAllTodos(): void {
    this.completeTodos.emit(true);
  }

  public incompleteAllTodos(): void {
    this.completeTodos.emit(false);
  }
}
