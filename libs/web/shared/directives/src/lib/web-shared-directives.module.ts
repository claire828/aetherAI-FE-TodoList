import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickDebounceDirective } from './click-debounce.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { ClickDebounceStopPropagationDirective } from './click-debounce-stop-propagation.directive';
import { PlaceHolderDirective } from './place-holder.directive';
import { InputAutofocusDirective } from './input-autofocus.directive';

@NgModule({
  imports: [CommonModule],
  exports:[ClickDebounceDirective,ClickStopPropagationDirective,ClickDebounceStopPropagationDirective,PlaceHolderDirective, InputAutofocusDirective],
  declarations: [
    ClickDebounceDirective,
    ClickStopPropagationDirective,
    ClickDebounceStopPropagationDirective,
    PlaceHolderDirective,
    InputAutofocusDirective
  ],
})
export class WebSharedDirectivesModule {}
