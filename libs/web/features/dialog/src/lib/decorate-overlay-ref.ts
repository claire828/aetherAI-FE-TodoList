import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core';
import { filter, Observable, Subject, takeUntil, tap } from 'rxjs';
import { DialogEvent } from './models';

export class DecorateOverlayRef {
  #eventEmitterSubject: Subject<DialogEvent> = new Subject<DialogEvent>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public event$: Observable<DialogEvent> = this.#eventEmitterSubject;
  #destroySubject: Subject<boolean> = new Subject<boolean>();
  #componentRef: ComponentRef<any> | undefined;

  constructor(private overlayRef: OverlayRef, private autoClose: boolean) {
    this.overlayRef.backdropClick().pipe(
      takeUntil(this.#destroySubject),
      tap(() => this.sendEvent(DialogEvent.BackdropClick)),
      filter(() => this.autoClose),
      tap(() => this.close())
    )
      .subscribe();

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

  public sendEvent(event: DialogEvent): void {
    this.#eventEmitterSubject.next(event);
    if (this.autoClose) {
      this.close();
    }
  }

  public close(): void {
    this.overlayRef.dispose();
    this.#destroySubject.next(true);
  }

}
