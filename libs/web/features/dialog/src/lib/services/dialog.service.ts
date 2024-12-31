import { inject, Injectable, Injector } from "@angular/core";
import { DialogConfig } from "../models";
import { Overlay, OverlayPositionBuilder } from "@angular/cdk/overlay";
import { DialogRefBuilder, createDialogRefBuilder } from "../utils";
import { DialogRef } from "./dialog-ref";
import { ComponentPortal } from "@angular/cdk/portal";
import { WebFeaturesDialogComponent } from "../web-features-dialog/web-features-dialog.component";

@Injectable({ providedIn: 'root' })
export class DialogService {
  #overlayBuilder: OverlayPositionBuilder = inject(OverlayPositionBuilder);
  #overlay: Overlay = inject(Overlay);
  #injector: Injector = inject(Injector);
  #dialogRefBuilder: DialogRefBuilder = createDialogRefBuilder(this.#overlayBuilder, this.#overlay);

  constructor() { }

  public openDialog(config: DialogConfig) {
    const { dialogRef, overlayRef } = this.#dialogRefBuilder();
    const injector = this.createInjector(dialogRef, config);
    const portal = new ComponentPortal(WebFeaturesDialogComponent, null, injector);
    overlayRef.attach(portal);
    overlayRef.backdropClick().subscribe(() => dialogRef.close());
  }

  private createInjector(dialogRef: DialogRef, config: DialogConfig): Injector {
    return Injector.create(
      {
        providers: [
          { provide: DialogRef, useValue: dialogRef },
        ],
        parent: this.#injector,
        name: config.name
      }
    )
  }
}