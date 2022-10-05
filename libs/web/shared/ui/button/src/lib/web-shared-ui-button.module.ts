import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [PrimaryBtnComponent],
  exports:[PrimaryBtnComponent]
})
export class WebSharedUiButtonModule {

}
