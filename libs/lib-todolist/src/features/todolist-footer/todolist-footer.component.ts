import { Component, signal } from '@angular/core';
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
  protected showCompletedArea = signal(true);
}
