import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsManagerComponent } from './compoments/notifications-manager/notifications-manager.component';
import { VersioningComponent } from './versioning.component';
import { VersioningRouterModules } from './versioning-routing.modules';



@NgModule({
  declarations: [
    NotificationsManagerComponent,
    VersioningComponent
  ],
  imports: [
    CommonModule,
    VersioningRouterModules
  ]
})
export class VersioningModule { }
