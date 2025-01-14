import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassType } from 'shared';
import { Color, DEFAULT_BUTTON_CLASSES } from '../../styles';
import { colorTransform } from '../../utils';
@Component({
  selector: 'uis-web-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="shared-button-outlook {{ defaultButtonClass }} {{ colorStyle().bg }}  {{
        colorStyle().hoverBg
      }} {{ btnClasses() }} "
      [class.fontBold]="isFontBold()"
      [disabled]="isDisabled()"
    >
      {{ buttonName() }}
    </button>

  `
})
export class WebButtonComponent {
  buttonName = input.required<string>();
  btnClasses = input<ClassType>();
  isFontBold = input<boolean>(false);
  isDisabled = input<boolean>(false);
  color = input<Color>('blue');
  // FIXME: This is a bug, the colorStyle should be a computed property, the tailwind remove the color
  protected colorStyle = computed(() => colorTransform(this.color()));

  protected get defaultButtonClass(): string {
    return DEFAULT_BUTTON_CLASSES;
  }
}
