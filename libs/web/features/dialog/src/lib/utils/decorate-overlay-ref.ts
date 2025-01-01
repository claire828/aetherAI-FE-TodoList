import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';

export class DecorateOverlayRef {
  public overlayRef: OverlayRef;
  constructor(overlay: OverlayRef) {
    this.overlayRef = overlay;
  }

  public updatePosition(strategy: PositionStrategy): void {
    this.overlayRef.updatePositionStrategy(strategy);
    this.overlayRef.updatePosition();
  }

  public close(): void {
    this.overlayRef.dispose();
  }

  public test(): void {
    console.log('test');
  }
}
