import { Component, Optional } from '@angular/core';
import { ChilddiComponent } from "../childdi/childdi.component";
import { ParentChildService } from '../service/myparentchild.service';

@Component({
  selector: 'app-parentdi',
  standalone: true,
  imports: [ChilddiComponent],
  templateUrl: './parentdi.component.html',
  styleUrl: './parentdi.component.css',
  providers: [ParentChildService]
})
export class ParentdiComponent {
  // constructor(@Optional() private parentchildservice: ParentChildService) {
  //   console.log("Parent DI Service: ", this.parentchildservice);    
  // }
}
