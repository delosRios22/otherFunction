import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p [ngStyle]="{'color': 'blue'}">
      css works!
    </p>
  `,
  styles: [
    `p {
      color: red !important;
      font-size: 20px;
    }`
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
