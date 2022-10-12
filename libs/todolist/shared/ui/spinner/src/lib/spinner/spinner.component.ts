import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-spinner',
  template: `<svg-icon key="spin" size="xl"></svg-icon>
            <ng-content></ng-content>`,
  styles: [`:host{
                  @apply flex justify-center items-center w-full h-full bg-gray-400/10 ;
                }
                svg-icon{
                  @apply transition-all animate-spin;
                }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
