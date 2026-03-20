import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getterinput',
  standalone: true,
  imports: [],
  templateUrl: './getterinput.component.html',
  styleUrl: './getterinput.component.css'
})
export class GetterinputComponent  {
  private _title=""
@Input()
get title1(){
  return this._title
}
set title1(value:string){
  this._title=value.trim().toUpperCase()
}
}
