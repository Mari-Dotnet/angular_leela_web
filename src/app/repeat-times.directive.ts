import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]',
  standalone: true
})
export class RepeatTimesDirective {
@Input() set appRepeatTimes(times: number) {
  this.viewContainer.clear();
  for (let i = 0; i < times; i++) {
    this.viewContainer.createEmbeddedView(this.templateRef, { index: i });
  }
}
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef  ) { }

}
