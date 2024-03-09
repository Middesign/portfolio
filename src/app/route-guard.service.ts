import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GenerictemplateService } from './generictemplate.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private generictemplateHttp: GenerictemplateService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.generictemplateHttp.isAuthenticated()) {
      this.router.navigate(['/password']);
      return false;
    }
    localStorage.removeItem('currentPath');
    return true;
  }
}
