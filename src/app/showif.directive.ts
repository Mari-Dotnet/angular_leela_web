import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowif]',
  standalone: true
})
export class ShowifDirective {
@Input() set appShowif(condition: boolean) {
  if (condition) {
    this.viewcontainer.createEmbeddedView(this.templateRef);
  }
    else {
    this.viewcontainer.clear();
    }
}
  constructor(
      private templateRef: TemplateRef<any>,
      private viewcontainer: ViewContainerRef
    ) { }

    /*
    ngOnChanges() {
      console.log("Directive initialized with value:", this.appShowif);
      if (this.appShowif) {
        this.viewcontainer.createEmbeddedView(this.templateRef);
      }else{
        this.viewcontainer.clear();
      }
    }
      */
}
