import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-controlflow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
a=10;
b=16;
users$=of([1,23,4,5]);
items=[1,2,3,4,5];
noitems=[]
userrole='admin';
}
