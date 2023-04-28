import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    HeaderComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
