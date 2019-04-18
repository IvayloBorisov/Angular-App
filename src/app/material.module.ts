import { NgModule } from "@angular/core";
import { MatToolbarModule,
         MatSidenavModule, 
         MatIconModule, 
         MatButtonModule, 
         MatListModule, 
         MatFormFieldModule,
         MatInputModule, 
         MatCardModule} 
          from '@angular/material'; 


@NgModule({

    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
     exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
       
     ],
})

export class MaterialModule {}