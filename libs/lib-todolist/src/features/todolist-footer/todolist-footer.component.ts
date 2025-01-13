import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBorderButtonComponent, WebButtonComponent } from 'web/uis';

@Component({
  selector: 'lib-todolist-footer',
  standalone: true,
  imports: [CommonModule, WebBorderButtonComponent, WebButtonComponent],
  templateUrl: './todolist-footer.component.html',
  styleUrl: './todolist-footer.component.scss',
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
