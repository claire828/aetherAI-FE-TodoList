import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogBtnDisplay, DialogCategory, DialogService } from 'web/features/dialog';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skeleton';
  constructor() {
    const service = inject(DialogService);
    service.openDialog({
      name: 'test',
      category: DialogCategory.Default,
      btnDisplay: DialogBtnDisplay.EnterCancel,
      title: 'test',
      content: 'test',
      observer: {
        next: () => {},
        error: () => {},
        complete: () => {},
      },
    });
  }
}
