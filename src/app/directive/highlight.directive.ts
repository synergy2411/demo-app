import { Directive, 
    ElementRef, 
    Input, 
    HostListener, 
    HostBinding} from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{
    @Input('defaultColor') defaultColor : string;
    @HostBinding('style.backgroundColor') backgroundColor : any;

    @HostListener('mouseenter') mouseenter(eventdata){
        //this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
        this.backgroundColor = this.defaultColor;
    }
    @HostListener('mouseleave') mouseleave(eventdata){
        //this.elRef.nativeElement.style.backgroundColor = 'transparent';
        this.backgroundColor = 'transparent';
    }

    constructor(private elRef : ElementRef){
        console.log(this.elRef.nativeElement);
        this.elRef.nativeElement.style.backgroundColor = 'transparent';
    }


}