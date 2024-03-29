import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... tutorial!
    </p>

    <button class="btn btn-danger" (click)="tamano = tamano + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fas fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
