import { Product } from './../models/product';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[clothStyle]'
})
export class ClothStyleDirective implements OnInit {

  @Input() product:Product = {
    id: 0,
    reference: ''
  };

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if(this.product.reference.includes('Tela')){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#0b3680');
		  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }
  }

}
