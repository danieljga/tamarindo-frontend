import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCheckSuppliers]'
})
export class CheckSuppliersDirective implements OnInit {

  @Input() date: Date = new Date();

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const time = new Date().getTime() - new Date(this.date).getTime();
    const days = time / (1000 * 3600 * 24);
    if(days < 30){
      this.renderer.setProperty(this.elRef.nativeElement, 'innerHTML', 'Nuevo');
      this.renderer.addClass(this.elRef.nativeElement, 'new');
    }
  }

}
