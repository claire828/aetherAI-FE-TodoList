import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-button',
  template: `<button [ngClass]="variant">{{ label }}</button>`,
  styleUrls: ['./core-button.component.scss']
})
export class CoreButtonComponent {
  @Input() label = 'Button';
  @Input() variant = 'primary';
}
