import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorateOverlayRef } from '../utils';
import { DefaultDialogConfig, DialogBtnDisplay } from '../models';
import { DIALOG_DEFAULT_PROVIDER } from '../providers';

@Component({
  selector: 'web-features-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-features-dialog.component.html',
  styleUrl: './web-features-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebFeaturesDialogComponent {
  constructor(private ref: DecorateOverlayRef,
    @Inject(DIALOG_DEFAULT_PROVIDER) public config: DefaultDialogConfig) {
  }

  public get dialogBtnDisplay() {
    return DialogBtnDisplay;
  }

  public close() {
    this.ref.close();
  }

  public enter() {
    this.ref.close();
  }
}
