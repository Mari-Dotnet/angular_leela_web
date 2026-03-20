import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHaspermission]',
  standalone: true
})
export class HaspermissionDirective {
@Input() appHaspermission!:string;
  constructor(private templateRef:TemplateRef<any>,
              private viewContainer:ViewContainerRef
  ) { }

  ngOnInit(){
    const haspermission=this.appHaspermission==="admin";
    if(haspermission){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

}
