import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, Observable } from 'rxjs';
import { DialogEvent } from './models/dialog-event.enum';

export class DecorateOverlayRef {
  public eventEmitterSubject = new Subject<DialogEvent>();
  public event$: Observable<DialogEvent> = this.eventEmitterSubject.asObservable();

  constructor(private overlayRef: OverlayRef, private autoClose: boolean) {
    overlayRef.backdropClick().subscribe(() => {
      this.sendEvent(DialogEvent.BackdropClick);
      if (autoClose) {
this.close();
}
    });
  }

  public attachPortal<T>(portal: ComponentPortal<T>): void {
    this.overlayRef.attach(portal);
  }

  public updatePosition(strategy: PositionStrategy): void {
    this.overlayRef.updatePositionStrategy(strategy);
    this.overlayRef.updatePosition();
  }

  public sendEvent(event: DialogEvent): void {
    this.eventEmitterSubject.next(event);
    if (this.autoClose) {
this.close();
}
  }

  public close(): void {
    this.overlayRef.dispose();
    this.eventEmitterSubject.complete();
  }
}
