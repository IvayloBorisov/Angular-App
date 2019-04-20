import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { FooterComponent } from './footer/footer.component';
import { SidenavNavigationComponent } from './sidenav-navigation/sidenav-navigation.component';
import { ToolbarNavigationComponent } from './toolbar-navigation/toolbar-navigation.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    declarations: [
        FooterComponent,
        SidenavNavigationComponent,
        ToolbarNavigationComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
    ],
    exports: [
        FooterComponent,
        SidenavNavigationComponent,
        ToolbarNavigationComponent,
    ]
})

export class SharedModule { }