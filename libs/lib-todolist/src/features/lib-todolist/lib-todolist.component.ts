import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-todolist.component.html',
  styleUrl: './lib-todolist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibTodolistComponent { }
