import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'monorepo-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaskComponent  {
  static readonly MaskName = "searchMask";

  get maskName(){ return MaskComponent.MaskName; }

  constructor() {}

  
}
