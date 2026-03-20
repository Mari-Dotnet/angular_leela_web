import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamiclist]',
  standalone: true
})
export class DynamiclistDirective {
@Input() appDynamiclist!:any[];
  constructor(
      private templateRef:TemplateRef<any>,
      private viewContainer:ViewContainerRef) {
  }
ngOnInit(){
  this.viewContainer.clear();
  for(let item of this.appDynamiclist){
    const context={$implicit:item};
    this.viewContainer.createEmbeddedView(this.templateRef,context);
  }
}

}
