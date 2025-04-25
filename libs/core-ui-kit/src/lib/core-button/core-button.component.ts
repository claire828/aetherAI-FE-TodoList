import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-button',
  standalone: true,
  template: `<button [class]="btnClass">{{ label }}</button>`,
  styles: [``],
})
export class CoreButtonComponent {
  @Input() label = 'Button';
  @Input() btnClass = 'btn-primary';
}
