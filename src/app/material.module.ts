import { NgModule } from "@angular/core";
import { MatToolbarModule,
         MatSidenavModule, 
         MatIconModule, 
         MatButtonModule, 
         MatListModule, 
         MatFormFieldModule,
         MatInputModule } 
          from '@angular/material'; 


@NgModule({

    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
    ],
     exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule
       
     ],
})

export class MaterialModule {}