import { Component, EventEmitter, Output } from '@angular/core';
import { ControlEvent } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  outputs:['dataevent:childevent']
})
export class PanelComponent {
  @Output('childevent') dataevent= new EventEmitter<number>()
  @Output('stringpass') stingevent= new EventEmitter<string>()
  counter:number=0;
sendData(){
this.counter++
this.dataevent.emit(this.counter)
this.stingevent.emit("Hello from child component") 
}
}
