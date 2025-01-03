import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogService, MOCK_CONFIG, MOCK_CONFIG2 } from 'web/features/dialog';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() { this.showDialog(); }

  public showDialog() {
    const service = inject(DialogService);
    service.openDefaultDialog(MOCK_CONFIG);
    // service.openComponentDialog(MOCK_CONFIG2);
  }
}
