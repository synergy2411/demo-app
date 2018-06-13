import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { APP_ROUTES } from './app.routing';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './service/login-gaurd.service';
import { AnimatedComponent } from './animated/animated.component';
import { TestableComponent } from './testable/testable.component';

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
    ObservableDemoComponent,
    PagenotfoundComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    AnimatedComponent,
    TestableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    BrowserAnimationsModule
  ],
  providers: [ DataService, LoginGaurdService,
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
