import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';

export class DecorateOverlayRef {
  public overlayRef: OverlayRef;

  constructor(overlay: OverlayRef, hasBackdrop: boolean = true) {
    this.overlayRef = overlay;
    if (hasBackdrop) {
      this.overlayRef.backdropClick().subscribe(() => this.close());
    }
  }

  public updatePosition(strategy: PositionStrategy): void {
    this.overlayRef.updatePositionStrategy(strategy);
    this.overlayRef.updatePosition();
  }

  public close(): void {
    this.overlayRef.dispose();
  }

}
