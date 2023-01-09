import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { JohnComponent } from './john/john.component';
import { DataService } from './service/data.service';
import { LogService } from './service/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    JohnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LogService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
