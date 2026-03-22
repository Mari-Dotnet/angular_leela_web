import { Component, Self } from '@angular/core';
import { ParentChildService } from '../service/myparentchild.service';

@Component({
  selector: 'app-childdi',
  standalone: true,
  imports: [],
  templateUrl: './childdi.component.html',
  styleUrl: './childdi.component.css',
  providers:[ParentChildService]
})
export class ChilddiComponent {
constructor(@Self() private myservice: ParentChildService){
  console.log("Child DI Service: ", this.myservice);
}
}
