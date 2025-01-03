import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorateOverlayRef } from '../utils';
import { DefaultDialogConfig, DialogBtn, DialogEvent } from '../models';
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

  public get dialogBtnDisplay(): typeof DialogBtn {
    return DialogBtn;
  }
  public get dialogEvent(): typeof DialogEvent {
    return DialogEvent;
  }

  public sendEvent(event: DialogEvent) {
    this.ref.sendEvent(event);
  }

}
