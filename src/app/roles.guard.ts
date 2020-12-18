import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private autenticacionService: AutenticacionService,
              private router: Router) {}

  canActivate(): any {
    if (this.autenticacionService.getUserRole() === 'admin') {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }
  
}
