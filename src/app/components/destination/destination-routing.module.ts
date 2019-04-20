import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DestinationCreateComponent } from './destination-create/destination-create.component';
import { DestinationAllComponent } from './destination-all/destination-all.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { AdminGuard } from 'src/app/core/guard/admin.guard';

const destinationRoutes: Route[] = [
  
  { path: 'create', component: DestinationCreateComponent, canActivate: [ AdminGuard ] },
  { path: 'all', component: DestinationAllComponent },
  { path: 'details/:id', component: DestinationDetailsComponent },
] 

@NgModule({
    declarations: [
       
    ],
    imports: [
        RouterModule.forChild(destinationRoutes),       
    ],
    exports: [
        RouterModule
    ]
})

export class DestinationRoutingModule {}
