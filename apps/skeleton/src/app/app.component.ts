import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogService, MOCK_CONFIG } from 'web/features/dialog';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skeleton';

  // TODO: 拔掉
  constructor() {
    const service = inject(DialogService);
    service.openDialog(MOCK_CONFIG);
  }
}
