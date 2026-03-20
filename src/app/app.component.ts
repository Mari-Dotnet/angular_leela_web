import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import profileComponents from './profile.component';
import hostcomponents from './host.component';
import countercomponent from './counter/counter.component';
import { GetterinputComponent } from './getterinput/getterinput.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverClikComponent } from './hover-clik/hover-clik.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CheckedlifecycleComponent } from './checkedlifecycle/checkedlifecycle.component';
import { BindingComponent } from './binding/binding.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import {CommonModule} from '@angular/common';
import { of } from 'rxjs';
import { gridpipe } from './grid.pipe';
import { lengthpipe } from './length.pipe';
import { isactiveheroPipe } from './isactivehero.pipe';
import { HighlightDirective } from './highlight.directive';
import { HaspermissionDirective } from './haspermission.directive';
import { DynamiclistDirective } from './dynamiclist.directive';
import { ShowifDirective } from './showif.directive';
import { RepeatTimesDirective } from './repeat-times.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { Animal, IsDogDirectiveDirective } from './is-dog-directive.directive';
import { DemodirectiveDirective, demourl } from './demodirective.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,profileComponents,hostcomponents,countercomponent,CommonModule,
            GetterinputComponent,PanelComponent,CardComponent,HoverClikComponent,
            LifecycleComponent,CheckedlifecycleComponent,BindingComponent,
            ControlflowComponent,gridpipe,lengthpipe,isactiveheroPipe,HighlightDirective,HaspermissionDirective,DynamiclistDirective,
            ShowifDirective,RepeatTimesDirective,FormsModule,IsDogDirectiveDirective,DemodirectiveDirective
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
animal:Animal={name:"Tom",type:"dog",breed:"Golden Retriever"}; // Example animal object
demostring="Hello from app component";
demourlmodel:demourl={url:"https://www.example.com/video",video:true};
  isvisible=true;
  headertitle:string = 'angular';
  count:number=5;
  title:{name:string} = {name:" Learn Angular basics"}
  receivedDataFromChild:number=0
  receivedStringFromChild='';
  showhook:boolean=true;
  fontsize=16;
  user:[{name:string,isactive:boolean}]=[{name:"Marimuthu",isactive:true}];
  birthdate=new Date();
  userlist$=of([
    {name:"Marimuthu",age:30,isactive:true},
    {name:"Kumar",age:25,isactive:false},
    {name:"Sundar",age:28,isactive:true}
  ]);
  emptylist=[{name:"Marimuthu"},{name:"Kumar"},{name:"Sundar"}];

  svgcolor='rgb(255,0,0)';
  dataReceived(data:number){
 this.receivedDataFromChild=data;
  }

  stringreceived(data:string){
    this.receivedStringFromChild=data;
  }
  changeTitle(){
    //this.title.name="Changed title";
    this.title={name:"Changed title"};
  }
  tooglehook(){
  this.showhook=!this.showhook;
  }
  updateCounter(){
    this.count++;
  }
 addHero(name: string, isactive: boolean) {
  if (name.trim()) {
    this.user.push({ name: name.trim() ,isactive:isactive});
  }
}
phoneclick(value:string){
console.log("Phone clicked with value:", value);
}
changeColor(){
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
this.svgcolor = `rgb(${r},${g},${b})`;
}

}