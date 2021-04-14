import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-void',
  templateUrl: './header-void.component.html',
  styleUrls: ['./header-void.component.css']
})
export class HeaderVoidComponent implements OnInit {
  @Input() ruta: any;
  constructor() { }

  ngOnInit(): void {
  }

}
