import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebFeaturesDialogComponent } from 'web/features/dialog';

@Component({
  standalone: true,
  imports: [RouterModule, WebFeaturesDialogComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skeleton';
}
