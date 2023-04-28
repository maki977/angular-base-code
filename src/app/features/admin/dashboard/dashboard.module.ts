import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class DashboardModule { }
