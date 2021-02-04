import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  import { ExampleComponent } from 'company-custom-components';
  import * as React from 'react';
  
  import * as ReactDOM from 'react-dom';
  
  const containerElementName = 'myReactComponentContainer';
  
  @Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    encapsulation: ViewEncapsulation.None,
  })
  export class MyComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, {static: false}) containerRef!: ElementRef;
  
    // @Input() public counter = 10;
    // @Output() public componentClick = new EventEmitter<void>();
  
    constructor() {
      // this.handleDivClicked = this.handleDivClicked.bind(this);
    }
  
    // public handleDivClicked() {
    //   if (this.componentClick) {
    //     this.componentClick.emit();
    //     this.render();
    //   }
    // }
  
    ngOnChanges(changes: SimpleChanges): void {
      this.render();
    }
  
    ngAfterViewInit() {
      this.render();
    }
  
    ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }
  
    private render() {
  
      ReactDOM.render(<ExampleComponent text="BCBSM"/>, this.containerRef.nativeElement);
    }
  }