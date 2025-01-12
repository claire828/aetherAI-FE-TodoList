import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebButtonComponent } from '../web-button/web-button.component';
import { DEFAULT_BORDER_BUTTON_CLASSES } from '../../styles';

@Component({
  selector: 'uis-web-border-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-border-button.component.html',
  styleUrl: './web-border-button.component.scss',
})
export class WebBorderButtonComponent extends WebButtonComponent {
  protected override get defaultButtonClass(): string {
    return DEFAULT_BORDER_BUTTON_CLASSES;
  }
}
