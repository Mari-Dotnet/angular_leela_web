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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,profileComponents,hostcomponents,countercomponent,
            GetterinputComponent,PanelComponent,CardComponent,HoverClikComponent,
            LifecycleComponent,CheckedlifecycleComponent,BindingComponent,
            ControlflowComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headertitle:string = 'angular';
  count:number=25;
  title:{name:string} = {name:" Learn Angular basics"}
  receivedDataFromChild:number=0
  receivedStringFromChild='';
  showhook:boolean=true;
  fontsize=16;
  user={name:"Marimuthu"}
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
}