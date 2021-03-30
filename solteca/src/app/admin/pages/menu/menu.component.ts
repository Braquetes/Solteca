import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.CS.deleteAll();
    this.router.navigate(['/']);
  }

}
