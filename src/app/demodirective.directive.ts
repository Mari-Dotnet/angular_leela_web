import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface demourl{
  url:string;
  video:boolean;
}

export interface democontext{
  $implicit:number;
  demo:string;
  url:demourl
}

@Directive({
  selector: '[appdemo]',
  standalone: true
})
export class DemodirectiveDirective {
@Input()  appdemo !: string;
@Input('appdemoUrl') appdemoUrl!: demourl;  // Alias the input
  constructor(private templateRef: TemplateRef<democontext>, private viewContainer: ViewContainerRef  ) { }

  ngOnInit(){
    const context={
      $implicit: 1,
      demo: this.appdemo,
      url: this.appdemoUrl
    };

    this.viewContainer.createEmbeddedView(this.templateRef, context);
  }

  static ngTemplateContextGuard(directive: DemodirectiveDirective,context:unknown): context is democontext{
    return true;
  }
}
