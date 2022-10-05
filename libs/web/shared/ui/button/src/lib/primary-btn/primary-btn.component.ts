/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { DialogService } from '@monorepo/web/shared/services/dialog';

@Component({
  selector: 'monorepo-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
})
export class PrimaryBtnComponent implements OnInit {
  constructor( private dialogSer:DialogService) {
    this.dialogSer.test();
  }

  ngOnInit(): void {}
}
