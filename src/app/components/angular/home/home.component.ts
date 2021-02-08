import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  public page: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.page = this.route.snapshot.paramMap.get('page') ? this.route.snapshot.paramMap.get('page') : "home";
    router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd) {
        this.page = this.route.snapshot.paramMap.get('page') ? this.route.snapshot.paramMap.get('page') : "home";
      }
  });
   }

   ngOnChanges(changes: SimpleChanges): void {
    this.page = this.route.snapshot.paramMap.get('page') ? this.route.snapshot.paramMap.get('page') : "home";
  }

  ngOnInit(): void {
    console.log("Home Works!!");
  }

}
