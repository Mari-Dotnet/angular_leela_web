import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
  providers:[LoggerService]
})
export class BindingComponent {
  private logger= inject(LoggerService);
@Input() size=0;
@Output() sizeChange = new EventEmitter<number>();
isDisabled: boolean = true;
//constructor(private logger: LoggerService) {}
checkname(event:MouseEvent) {
  console.log("check event name",event);
}
onkeydown(event:KeyboardEvent) {
  console.log("check event name",event);
}
increment(){
    console.log("increment");
  this.resize(1);
}
decrement(){
  console.log("decrement");
   this.resize(-1);
}

resize(value:number){
console.log("size value",value);
const sizeValue = this.size + value;
console.log("size value",sizeValue);
this.sizeChange.emit(sizeValue);
}

}