import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DIALOG_COMPONENT_PROVIDER, DialogService, MOCK_CONFIG, MOCK_CONFIG2 } from 'web/features/dialog';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skeleton';

  // TODO: 拔掉Mock. 呼叫openDialog就能收到回傳資料做事情了
  constructor() {
    const service = inject(DialogService);
    service.openDefaultDialog(MOCK_CONFIG);
    const dialogComponentProvider = { provide: DIALOG_COMPONENT_PROVIDER, useValue: MOCK_CONFIG2 };
    service.openComponentDialog(MOCK_CONFIG2, [dialogComponentProvider]);
  }
}
