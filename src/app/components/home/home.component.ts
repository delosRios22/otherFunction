import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, est.
  </p>
  <app-clases></app-clases>

  <p [appResaltado]="'blue'">Lorem ipsum dolor sit amet.</p>
  <app-ng-switch></app-ng-switch>`,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
