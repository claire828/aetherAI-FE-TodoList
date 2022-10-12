
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-layout',
  template: `<router-outlet></router-outlet>`,
  styles: [`:host{ @apply my-16;}` ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
