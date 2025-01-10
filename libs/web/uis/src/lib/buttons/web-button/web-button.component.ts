import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uis-web-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-button.component.html',
  styleUrl: './web-button.component.scss',
})
export class WebButtonComponent {
  buttonName = input.required<string>();
  isFontBold = input<boolean>(false);
}
