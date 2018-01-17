import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'app/services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: SessionStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.get('user')}`
      }
    });
    return next.handle(request);
  }
}