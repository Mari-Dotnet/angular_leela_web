import { Component, inject } from '@angular/core';
import { MainService } from '../service/main.service';
import { ExperimentService } from '../service/experiment.service';

@Component({
  selector: 'app-dependency-use-value-exist',
  standalone: true,
  imports: [],
  templateUrl: './dependency-use-value-exist.component.html',
  styleUrl: './dependency-use-value-exist.component.css',
  //providers: [{provide: MainService, useExisting: ExperimentService}]
  providers: [{provide: MainService, useValue: {name:"mari",age:29}}]
//  useValue: {name:"mari",age:29}
})
export class DependencyUseValueExistComponent {
ms= inject(MainService);
es=inject(ExperimentService);
constructor() {
  console.log(this.ms=== this.es);
  console.log(this.ms);
  console.log(this.es);
}
}
