import { Injectable } from "@angular/core";
import { HttpInterceptor, 
    HttpEvent, 
    HttpRequest, 
    HttpHandler,
    HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){}
    intercept(req : HttpRequest<any>, next : HttpHandler ): Observable<HttpEvent<any>{
        console.log("Request Intercepted", req);
        const clonedReq = req.clone({
            params : new HttpParams().set("auth",this.authService.getToken())
        });
        
        return next.handle(clonedReq);
    }
}