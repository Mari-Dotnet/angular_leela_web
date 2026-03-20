import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export const isDog=(animal:Animal):animal is dog=>{
 return typeof (animal as dog).breed !=="undefined";
}
export interface cat{
  name:string;
  type:"cat";
}

export interface dog{
  name:string
  breed:string
  type:"dog";
}
export type Animal=cat|dog ;

@Directive({
  selector: '[appIsDog]',
  standalone: true
})
export class IsDogDirectiveDirective {


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  
  @Input()  set appIsDog(animal:Animal){
    if(isDog(animal)){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }   

}
