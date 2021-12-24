import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unlessCustom]'
})
export class UnlessCustomDirective {

  @Input() set unlessCustom(condition: boolean) {
    if(condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}


