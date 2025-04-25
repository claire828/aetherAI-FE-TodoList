import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogEvent, DefaultDialogConfig } from './models';
import { DIALOG_DEFAULT_PROVIDER } from './providers';
import { DecorateOverlayRef } from './utils';

@Component({
  selector: 'core-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreDialogComponent implements AfterViewInit {
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
    }
  }

  public sendEvent(event: DialogEvent) {
    this.ref.sendEvent(event);
  }
}
