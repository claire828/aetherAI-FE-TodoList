
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-layout',
  template: `<router-outlet></router-outlet>`,
  styles: [`:host{ @apply my-8 md:my-12 lg:my-16;}` ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
