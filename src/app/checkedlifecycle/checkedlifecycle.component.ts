import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkedlifecycle',
  standalone: true,
  imports: [],
  templateUrl: './checkedlifecycle.component.html',
  styleUrl: './checkedlifecycle.component.css'
})
export class CheckedlifecycleComponent {
@ViewChild('inputField') inputElement !:ElementRef;
@ViewChild('scrollcontainer') scr !:ElementRef;

/**
 *
 */
constructor() {
console.log("constructor called");
}
items=['Angular','React','Vue'];

ngOnInit(){
  console.log("ngOnInit called");
}
ngDoCheck(){
  console.log("ngDoCheck called");
}

ngAfterContentInit(){
  console.log("ngAfterContentInit called");
}

ngAfterViewInit(){
  console.log("ngAfterViewInit called");
this.inputElement.nativeElement.focus();
}
addItem(){
//this.items.push(this.inputElement.nativeElement.value);
//this.inputElement.nativeElement.value='';
this.items.push("C#"+this.items.length)
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called");
  this.scrollToBottom();
}
scrollToBottom(){
  this.scr.nativeElement.scrollTop=this.scr.nativeElement.scrollHeight;
}

ngAfterContentChecked(){
  console.log("ngAfterContentChecked called");
}

}