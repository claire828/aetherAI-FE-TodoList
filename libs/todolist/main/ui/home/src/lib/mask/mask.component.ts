import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'monorepo-mask',
  template: `<div [id]="maskName" class="fixed z-0  w-screen h-screen left-0 top-0" ></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaskComponent  {
  static readonly MaskName = "searchMask";

  get maskName(){ return MaskComponent.MaskName; }

  constructor() {}

  
}
