import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  constructor(private CS: CookieService, private router: Router) {}

  logout(): void {
    this.CS.deleteAll();
    this.router.navigate(['/']);
  }

}
