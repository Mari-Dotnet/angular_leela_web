import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-clik',
  standalone: true,
  imports: [],
  templateUrl: './hover-clik.component.html',
  styleUrl: './hover-clik.component.css',
  host: {
   '[id]': 'otherId',
    '[class.hovered]': 'ishovered',
    '(mouseenter)': 'divMouseEnter()',
    '(mouseleave)': 'OnMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class HoverClikComponent {
  /*
  //below is used to add class to the element of the component when the condition is true

  @HostBinding('class.hovered') ishovered = false;

//hostlistener is used to listen to the event of the element of the component and perform the action when the event is triggered
@HostListener('click') onClick(){
console.log('clicked');
}
@HostListener('mouseenter') OnMouseEnter(){
  this.ishovered = true;
}
@HostListener('mouseleave') OnMouseLeave(){
  this.ishovered = false;
}

*/

// below is the property and method used to mettion on decorator of the component to add class to the element of the component when the condition is true and listen to the event of the element of the component and perform the action when the event is triggered
// below is used to add class to the element of the component when the condition is true
ishovered = false;
otherId='testing';
onClick(){
console.log('clicked');
}
divMouseEnter(){
  this.ishovered = true;
}
OnMouseLeave(){
  this.ishovered = false;
}

}
