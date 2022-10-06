import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tasksMenuType ,tasksMenus} from '@monorepo/todolist/main/data-access/models';
import {  getCurrMenu, getTasks, swichMenu } from '@monorepo/todolist/main/data-access/store';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map } from 'rxjs/operators';




@Component({
  selector: 'monorepo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  
  menuTypes = tasksMenus;
  currMenu$ = this.store.select(getCurrMenu);
  alltasks$ = this.store.select(getTasks);
  strItemLeft$ = this.alltasks$.pipe(
    map(x=>x.filter(task=>!task.complete).length),
    distinctUntilChanged(),
    map(x=> {
      const countable = x > 1 ? 's' : '';
      return `${x} item${countable} left`;
    })
  );
  
  constructor(private store:Store) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  onMenuSwitch(menu:tasksMenuType){
    this.store.dispatch(swichMenu({menu}));
  }


}
