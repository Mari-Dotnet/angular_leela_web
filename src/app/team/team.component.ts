import { Component, Inject, InjectionToken } from '@angular/core';
import { MyService } from '../service/myservice.service';

const myServiceToken=new InjectionToken<MyService>('service'); // creating token for service

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  providers: [{
    provide:  myServiceToken,
    useExisting: MyService
  }]
})
export class TeamComponent {
constructor(private myService: MyService,
  @Inject(myServiceToken) private myService2: MyService
){ 
  console.log(this.myService.getId());
  console.log(this.myService2.getId());
}
  
}

