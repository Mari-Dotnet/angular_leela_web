import { Component,ContentChild,DestroyRef,ElementRef,Input, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
@Input() title:{name:string} = {name:''}
@Input() counter:number=0;
@ViewChild('counterValue') counterValue!:ElementRef;
@ContentChild(PanelComponent) panelComponent!:PanelComponent;
// whatever the value come from parent component
// that value only available in ngOnInit, not in constructor 
// because constructor is called before the value come from parent component but ngOnInit is called after the value come from parent component

constructor(private destroyref:DestroyRef ) {
  destroyref.onDestroy(() => {
    console.log('Lifecycle onDestroy from constructor');
  });
  console.log('Lifecycle constructor is called only once when the component is created');  
}
ngOnInit() {
  //console.log('title value in constructor is: ' + this.title);
  console.log('Lifecycle ngOnInit is called only once after the first ngOnChanges');
}

//before ngonInit ngOnChanges is called when the value come from parent component and also when the value change in parent component
ngOnChanges(changes:SimpleChanges) {
  console.log("the simpechanges value is: " + JSON.stringify(changes));
  console.log('Lifecycle ngOnChanges is called when the value come from parent component and also when the value change in parent component');
}
ngDoCheck() {
  console.log('Lifecycle ngDoCheck is called when the change detection run');
}

ngOnDestroy() {
  console.log('the title value in ngOnDestroy is: ' + this.title.name);
  console.log('Lifecycle ngOnDestroy is called when the component is destroyed');
}

ngAfterContentInit() {
console.log('Lifecycle After Content Init is called after the content is initialized');
console.log('the panel content in ngAfterContentInit is: ' + this.panelComponent);
//view child is not available in ngAfterContentInit because view is not initialized yet but content is available in ngAfterContentInit because content is initialized before view
}

ngAfterViewInit() {
  console.log('Lifecycle After View Init is called after the view is initialized');
  console.log('the counter value in ngAfterViewInit is: ' + this.counterValue.nativeElement.textContent);
  console.log('the panel content in ngAfterViewInit is: ' + this.panelComponent);
}
}

