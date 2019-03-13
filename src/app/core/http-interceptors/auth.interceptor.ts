import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userSvc: UserService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;
        const user = this.userSvc.getUser();
        if (!UserService.tokenIsExpired(user)) {
          const authRequest = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
          });
          return next.handle(authRequest);
        } else {
          const request = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
          });
          return next.handle(request);
        }
    }
}
