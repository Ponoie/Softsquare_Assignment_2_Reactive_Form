import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormStyle]',
  standalone: true
})

export class FormStyleDirective {
  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');

    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
    this.renderer.setStyle(this.el.nativeElement, 'color', '');

  }
}
