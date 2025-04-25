import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-button',
  template: `
    <button
      [class]="[
        'rounded font-medium transition-all duration-300 border',
        sizeClasses,
        disabled ? 'opacity-50 cursor-not-allowed' : colorClasses
      ].join(' ')"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `,
  standalone: true,
})
export class CoreButtonComponent {
  @Input() label = 'Button';
  @Input() color: 'blue' | 'red' | 'green' | 'gray' = 'blue';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;

  get sizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  }

  get colorClasses(): string {
    switch (this.color) {
      case 'red':
        return 'bg-red-500 text-white hover:bg-transparent hover:border-red-500 hover:text-red-500';
      case 'green':
        return 'bg-green-500 text-white hover:bg-transparent hover:border-green-500 hover:text-green-500';
      case 'gray':
        return 'bg-gray-500 text-white hover:bg-transparent hover:border-gray-500 hover:text-gray-500';
      default:
        return 'bg-blue-500 text-white hover:bg-transparent hover:border-blue-500 hover:text-blue-500';
    }
  }
}
