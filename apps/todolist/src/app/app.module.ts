import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TodoListShellModule } from '@monorepo/todolist/shell/feature/shell';
import { getAppConfigProvider } from '@monorepo/todolist-shared-app-config';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    TodoListShellModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    getAppConfigProvider(environment),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
