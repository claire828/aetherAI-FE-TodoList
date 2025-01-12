import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassType } from 'shared';
import { DEFAULT_BUTTON_CLASSES } from '../../default-style';
@Component({
  selector: 'uis-web-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-button.component.html',
  styleUrl: './web-button.component.scss',
})
export class WebButtonComponent {
  buttonName = input.required<string>();
  btnClasses = input<ClassType>();
  isFontBold = input<boolean>(false);
  isDisabled = input<boolean>(false);

  public get defaultButtonClass(): string {
    return DEFAULT_BUTTON_CLASSES;
  }
}
