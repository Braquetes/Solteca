import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.css']
})
export class VentanillaComponent implements OnInit {

  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    const cookie = this.CS.check('access_token');
    const client = this.CS.get('client');
    if (cookie){
    if (client === 'administrador'){
      this.router.navigate(['/menu']);
      }
    }
  }

  logout(): void{
    this.CS.deleteAll();
    this.router.navigate(['/']);
  }

}
