import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { DestinationCreateComponent } from './components/destination/destination-create/destination-create.component';
import { DestinationAllComponent } from './components/destination/destination-all/destination-all.component';
import { DestinationDetailsComponent } from './components/destination/destination-details/destination-details.component';
import { AuthGuard } from './core/guard/guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination/create', component: DestinationCreateComponent, canActivate: [AuthGuard] },
  { path: 'destination/all', component: DestinationAllComponent, canActivate: [AuthGuard] },
  { path: 'destination/details/:id', component: DestinationDetailsComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
