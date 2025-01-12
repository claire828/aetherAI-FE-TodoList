import { Component, EventEmitter, input, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DEFAULT_CHECKBOX_CLASSES } from '../styles';

// type color = 'default' | 'red' | 'yellow' | 'green' | 'blue';

@Component({
  selector: 'uis-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() checked = false;
  uniqId = input.required<string>()

  protected get defaultClasses() {
    return DEFAULT_CHECKBOX_CLASSES;
  }

  protected checkedChangeHandler() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
