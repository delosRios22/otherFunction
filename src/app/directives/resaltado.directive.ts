import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') colorNuevo: string;

  constructor(private ele: ElementRef) {
    console.log('Directiva')
    // ele.nativeElement.style.backgroundColor = 'red';
   }

   @HostListener('mouseenter') mouseEntro(){
     this.resaltar(this.colorNuevo || 'yellow')
   }

   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null)
  }

  private resaltar( color:string ){
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
