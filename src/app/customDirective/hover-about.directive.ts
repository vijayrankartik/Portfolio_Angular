import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aboutHover]'
})
export class HoverAboutDirective{

    constructor(private element: ElementRef, private rederer: Renderer2) { }
    
    // @Input() AllEvents:{
    //     date: string, title: string, description: string
    // };

    @Input() id: string

    AllEvents = [{
        desc: "Completed schooling under CBSE board from Bosco Public School"
    },
    {
        desc: "Completed BTech in Computer Engineering from Delhi Technological University"
    },
    {
        desc: "Started working as Assciate Software Engineer at Biz2Credit"
    }
      ]

    @HostListener('mouseenter')onHover(){
        // console.log("hoverin");
        // console.log(this.id);
        const newEl = this.rederer.createElement('div')
        this.rederer.addClass(newEl, 'event')
        if(this.id === 'b1'){
            newEl.textContent = this.AllEvents[0].desc
        }
        else if(this.id === 'b2'){
            newEl.textContent = this.AllEvents[1].desc
        }
        else{
            newEl.textContent = this.AllEvents[2].desc
        }
        this.rederer.appendChild(this.element.nativeElement, newEl)
        // this.rederer.setStyle(this.element.nativeElement, 'transition', '4s')
    }
    @HostListener('mouseout')onLeave(){
        const newEl = this.element.nativeElement.querySelector('.event')
        if(newEl){
            this.rederer.removeChild(this.element.nativeElement, newEl)
        }
    }
}