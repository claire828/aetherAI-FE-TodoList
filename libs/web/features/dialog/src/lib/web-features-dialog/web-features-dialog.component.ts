import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorateOverlayRef } from '../utils';

@Component({
  selector: 'web-features-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-features-dialog.component.html',
  styleUrl: './web-features-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebFeaturesDialogComponent {
  constructor(private ref: DecorateOverlayRef) {
  }

  public close() {
    this.ref.close();
  }
}
