import { AuthService } from './auth.service';
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if(!user){
          console.log('not user');

          return next.handle(request)
        }
        console.log('user');
        const modifiedRequest = request.clone({
          params: new HttpParams().set('auth', user.token)
        })
        return next.handle(modifiedRequest)
      })
    )
    return next.handle(request)
  }
}
