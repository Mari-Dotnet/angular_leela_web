import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appHighlight]',
})
export class HighlightDirective {
@Input() appHighlight: string = 'yellow';
@Input() defaultColor: string = '';
constructor(private el: ElementRef) {
}
ngOnInit() {
    this.highlight(this.defaultColor);
}
@HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
}

@HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
}

highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
}
}