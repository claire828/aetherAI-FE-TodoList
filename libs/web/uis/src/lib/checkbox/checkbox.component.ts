import { Component, model, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DEFAULT_CHECKBOX_CLASSES } from '../styles';

// type color = 'default' | 'red' | 'yellow' | 'green' | 'blue';

@Component({
  selector: 'uis-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div class="flex items-center">
  <!-- Hidden Checkbox -->
  <input
    type="checkbox"
    class="peer hidden"
    [id]="uniqId()"
    [checked]="checked()"
    (change)="checkedChangeHandler()"
  />

  <!-- Label -->
  <label [for]="uniqId()" [ngClass]="[defaultClasses]" [class.bg-black]="checked()">
    <!-- Arrow Icon -->
    <svg
      *ngIf="checked()"
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </label>
</div>
`,
})
export class CheckboxComponent {
  checkedChange = output<boolean>();
  checked = model<boolean>(false);
  uniqId = input.required<string>()

  protected get defaultClasses() {
    return DEFAULT_CHECKBOX_CLASSES;
  }

  protected checkedChangeHandler() {
    this.checked.set(!this.checked());
    this.checkedChange.emit(this.checked());
  }
}
