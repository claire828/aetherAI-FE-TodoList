import { Component, ChangeDetectionStrategy, Inject, ViewChild, ViewContainerRef, AfterViewInit, viewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorateOverlayRef } from '../utils';
import { DefaultDialogConfig, DialogEvent } from '../models';
import { DIALOG_DEFAULT_PROVIDER } from '../providers';

@Component({
  selector: 'web-features-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-features-dialog.component.html',
  styleUrl: './web-features-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebFeaturesDialogComponent implements AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(
    private ref: DecorateOverlayRef,
    @Inject(DIALOG_DEFAULT_PROVIDER) public config: DefaultDialogConfig) { }


  public get dialogEvent(): typeof DialogEvent {
    return DialogEvent;
  }

  public ngAfterViewInit() {
    if (this.config.contentComponent) {
      this.viewContainerRef.createComponent(this.config.contentComponent());
    };
  }

  public sendEvent(event: DialogEvent) {
    this.ref.sendEvent(event);
  }

}
