import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core';

export class DecorateOverlayRef {
  public overlayRef: OverlayRef;
  #componentRef: ComponentRef<any> | undefined;

  constructor(overlay: OverlayRef, hasBackdrop: boolean = true) {
    this.overlayRef = overlay;
    if (hasBackdrop) {
      // TODO: close 的話等於取消，這邊繼續做把事件傳出去。 製作按鈕按下後，通知enter / close and send 資料。
      this.overlayRef.backdropClick().subscribe(() => this.close());
    }
  }

  public updateInput<T>(input: string, value: T): void {
    if (this.#componentRef) {
      this.#componentRef.setInput(input, value);
    }
  }

  public attachPortal<T>(portal: ComponentPortal<T>): void {
    this.#componentRef = this.overlayRef.attach(portal);
  }

  public updatePosition(strategy: PositionStrategy): void {
    this.overlayRef.updatePositionStrategy(strategy);
    this.overlayRef.updatePosition();
  }

  public close(): void {
    this.overlayRef.dispose();
  }

}
