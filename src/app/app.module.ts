import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './core/services/auth.service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { DestinationService } from './core/services/destination.service';
import { ResponseHandlerInterceptorService } from './response-handler-interceptor.service';
import { SharedModule } from './components/shared/shared.module';
import { AuthenticationModule } from './components/authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,   
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    AuthenticationModule,
 
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
