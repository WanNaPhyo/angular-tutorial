import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VLogsComponent } from './compoments/v-logs/v-logs.component';
import { VersionControlComponent } from './compoments/version-control/version-control.component';

@NgModule({
  declarations: [
    AppComponent,
    VLogsComponent,
    VersionControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
