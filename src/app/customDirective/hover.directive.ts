import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() id: string

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  @HostListener('mouseover') onHover(){
    // console.log(this.id);
    const newEl = this.rederer.createElement('img')
    this.rederer.addClass(newEl, 'newClass')
    // const newEl2 = this.rederer.createComment('a')
    // this.rederer.addClass(newEl2, 'btn')
    // newEl2.textContent = "Check Docs!"
    if(this.id === 'C++'){
      newEl.src = "/assets/cpp-logo_.png"
    }
    else if(this.id === 'CSS'){
      newEl.src = "/assets/CSS-Logo_.png"
    }
    else if(this.id === 'HTML'){
      newEl.src = "/assets/html-logo.png"
    }
    else if(this.id === 'Express'){
      newEl.src = "/assets/express-logo_.png"
    }
    else if(this.id === 'Mongoose'){
      newEl.src = "/assets/mongoose-logo_.png"
    }
    else{
      newEl.src = "/assets/angular-logo.png"
    }
    this.rederer.appendChild(this.element.nativeElement, newEl)
    // this.rederer.appendChild(this.element.nativeElement, newEl2)
    this.rederer.addClass(this.element.nativeElement, 'text-bg-info')
    this.rederer.setStyle(this.element.nativeElement, 'transition', '1s')
  }
  @HostListener('mouseout') onLeave(){
    const newEl = this.element.nativeElement.querySelector('.newClass')
    if(newEl){
        this.rederer.removeChild(this.element.nativeElement, newEl)
    }
    this.rederer.removeClass(this.element.nativeElement, 'text-bg-info')
    this.rederer.setStyle(this.element.nativeElement, 'transition', '1.5s')
  }
}
