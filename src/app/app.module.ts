import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { ToolbarNavigationComponent } from './components/shared/toolbar-navigation/toolbar-navigation.component';
import { SidenavNavigationComponent } from './components/shared/sidenav-navigation/sidenav-navigation.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthService } from './components/authentication/auth.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { DestinationCreateComponent } from './components/destination/destination-create/destination-create.component';
import { DestinationAllComponent } from './components/destination/destination-all/destination-all.component';
import { DestinationDetailsComponent } from './components/destination/destination-details/destination-details.component';
import { DestinationService } from './components/destination/destination.service';
import { ResponseHandlerInterceptorService } from './response-handler-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarNavigationComponent,
    SidenavNavigationComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    DestinationCreateComponent,
    DestinationAllComponent,
    DestinationDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    DestinationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
       provide: HTTP_INTERCEPTORS,
       useClass: ResponseHandlerInterceptorService,
       multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
