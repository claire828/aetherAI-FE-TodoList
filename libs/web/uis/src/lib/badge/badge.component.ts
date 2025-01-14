import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uis-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex h-6 w-6 items-center justify-center rounded-full border-white bg-red-500 text-xs font-bold text-white"
      [class.border]="border()"
      [class.border-2]="border()"
    >
      {{ count() }}
    </div>
  `
})
export class BadgeComponent {
  color = input.required<string>();
  border = input<boolean>();
  count = input<number>();
}
