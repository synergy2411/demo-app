import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { OverviewComponent } from './product/overview/overview.component';
import { LoginGaurdService } from './service/login-gaurd.service';
import { UserComponent } from './user/user.component';

export const APP_ROUTES : Routes = [
    {
        path : '',      //localhost:4200/signin
        redirectTo : 'signin',
        pathMatch : 'full'
    },{
        path : 'signin',
        component : SigninComponent
    },{
        path : 'signup',
        component : SignupComponent
    },{
        path : 'obsdemo',
        component : ObservableDemoComponent
    },{
        path : 'pipedemo',
        component : PipeDemoComponent,
        canActivate : [LoginGaurdService]
    },{
        path: 'notfound',
        component : PagenotfoundComponent
    },{
        path : 'user',
        component : UserComponent
    },{
        path : 'product',
        component : ProductComponent,
        children : [{
            path : 'overview/:id/:name',
            component : OverviewComponent
        },{
            path : 'spec',
            component : SpecificationComponent
        }]
    },{
        path : 'lazy',
        loadChildren : 'app/lazy/lazy.module#LazyModule'
    },{
        path : '**',            //localhost:4200/nowhere
        redirectTo : 'notfound',    //localhost:4200/notfound
        pathMatch : 'full'
    }

]