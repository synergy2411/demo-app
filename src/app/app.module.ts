import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipe/countrycode.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DataService } from './service/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './service/auth.interceptor';
import { LoggerInterceptor } from './service/logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    SigninComponent,
    SignupComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ DataService, 
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptor,
      multi : true 
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true 
    }
      
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
