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
import { Router } from '@angular/router';
import { HomeComponent, OtherComponent } from 'company-custom-components';
import * as React from 'react';

import * as ReactDOM from 'react-dom';

const containerElementName = 'myReactComponentContainer';

@Component({
  selector: 'app-my-component',
  template: `<span #${containerElementName}></span>`,
  encapsulation: ViewEncapsulation.None,
})
export class MyComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  
  @Input() public page: any;
  @Output() public linkClick = new EventEmitter<void>();
  @ViewChild(containerElementName, { static: false }) containerRef!: ElementRef;


  constructor(
    private router: Router
  ) {
    this.gotolink = this.gotolink.bind(this);
  }

  public gotolink(link: any) {
    if (this.linkClick) {
      this.linkClick.emit();
      // this.render();

      console.log("From Angular: " + link);
      this.router.navigate([`react/${link}`]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    console.log(this.page);
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    if(this.containerRef) {
      switch(this.page) {
        case "home":
          ReactDOM.render(<HomeComponent gotolink={this.gotolink} />, this.containerRef.nativeElement);
          break;
          case "other":
            ReactDOM.render(<OtherComponent gotolink={this.gotolink} />, this.containerRef.nativeElement);
            break;
          default:
            ReactDOM.render(<HomeComponent gotolink={this.gotolink} />, this.containerRef.nativeElement);
          }
    }
  }
}