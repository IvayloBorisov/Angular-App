import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';
import { DestinationAllComponent } from './destination-all/destination-all.component';
import { DestinationCreateComponent } from './destination-create/destination-create.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationRoutingModule } from './destination-routing.module';

@NgModule({

  declarations: [
    DestinationAllComponent,
    DestinationCreateComponent,
    DestinationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    
    RouterModule,
    DestinationRoutingModule
  ],
  exports: [

  ]
})
export class DestinationModule { }
