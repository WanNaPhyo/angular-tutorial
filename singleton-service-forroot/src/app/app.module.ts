import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsButtonComponent } from './compoments/notifications-button/notifications-button.component';
import { ServicesModule } from './services/services.module';


@NgModule({
    declarations: [
        AppComponent,
        NotificationsButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServicesModule.forRoot()

    ]
})
export class AppModule { }
