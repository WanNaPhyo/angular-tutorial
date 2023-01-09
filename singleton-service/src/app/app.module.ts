import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationButtonComponent } from './compoments/notification-button/notification-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
