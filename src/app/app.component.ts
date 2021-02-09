import { AfterViewInit } from '@angular/core'
import { Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
  ) {

  }

  ngOnInit(): void {
    
  }

  title = 'Shell-application';



}
