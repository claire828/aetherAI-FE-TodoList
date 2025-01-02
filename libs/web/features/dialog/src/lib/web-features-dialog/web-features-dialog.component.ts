import { Component, ChangeDetectionStrategy, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorateOverlayRef } from '../utils';
import { DIALOG_PROVIDER } from '../default-configs';
import { DialogComponentConfig } from '../models';

@Component({
  selector: 'web-features-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-features-dialog.component.html',
  styleUrl: './web-features-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebFeaturesDialogComponent {
  @Input() public content: string | undefined;
  constructor(private ref: DecorateOverlayRef, @Inject(DIALOG_PROVIDER) public config: DialogComponentConfig) {
  }


  public close() {
    this.ref.close();
  }
}
