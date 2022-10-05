import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY > 50) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'azure');
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0px 0px 14px -3px rgba(0, 0, 0, 0.33)');
    }else{
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0px 0px 14px -3px rgba(0, 0, 0, 0)');


    }
  }
}
