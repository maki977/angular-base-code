import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from "../../core/core.module";
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { MatExpansionModule } from '@angular/material/expansion';







@NgModule({
    declarations: [
        LayoutComponent,
        MenuItemComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        CoreModule,
        MatExpansionModule
    ]
})
export class AdminModule { }
