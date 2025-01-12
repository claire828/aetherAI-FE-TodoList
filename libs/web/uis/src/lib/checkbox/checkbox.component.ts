import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DEFAULT_CHECKBOX_CLASSES } from '../styles';

type color = 'default' | 'red' | 'yellow' | 'green' | 'blue';

@Component({
  selector: 'uis-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  checked = input<boolean>();
  uniqId = input.required<string>()
  color = input<color>();
  bgClass = computed(() => {
    switch (this.color()) {
      case 'red':
        return 'bg-red-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      default:
        return 'bg-black';
    }
  });

  protected get defaultClasses() {
    return DEFAULT_CHECKBOX_CLASSES;
  }
}
