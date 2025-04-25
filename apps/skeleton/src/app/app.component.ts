import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreDialogService } from 'core-ui-kit/src/dialog/dialog.service';

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
    const service = inject(CoreDialogService);
    const ref = service.openDefaultDialog({
      injectorID: 'example-dialog',
      title: 'Example Dialog',
      content: 'This is an example dialog.',
      overlayConfig: {},
      autoClose: true,
    });
    const subscription = ref.event$.subscribe((event) => {
      console.log(event);
      subscription.unsubscribe();
    });
  }
}
