import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-app-component',
  templateUrl: './react-app-component.component.html',
  styleUrls: ['./react-app-component.component.scss']
})
export class ReactAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async loadDynamicScript(): Promise<any> {
    // @ts-ignore
    await import('../../../../../main.react.js');
  }

  ngAfterViewInit(): void {
    console.log("View Init");
    this.loadDynamicScript();
    
  }

}
