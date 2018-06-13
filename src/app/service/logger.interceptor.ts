import { Injectable } from "@angular/core";
import { HttpInterceptor, 
    HttpEvent, 
    HttpRequest, 
    HttpHandler,
    HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{
    intercept(req : HttpRequest<any>, next : HttpHandler ): Observable<HttpEvent<any>>{
        console.log("Logger Interceptor");
        return next.handle(req)
            .do(data=>{
                console.log(data);
            });    
    }
}