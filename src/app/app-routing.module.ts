import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { DestinationCreateComponent } from './components/destination/destination-create/destination-create.component';
import { DestinationAllComponent } from './components/destination/destination-all/destination-all.component';
import { DestinationDetailsComponent } from './components/destination/destination-details/destination-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination/create', component: DestinationCreateComponent },
  { path: 'destination/all', component: DestinationAllComponent },
  { path: 'destination/details/:id', component: DestinationDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
