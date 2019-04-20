import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({

    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})

export class AuthenticationModule {}