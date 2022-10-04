import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('title')
  title!: string;

  params!: any;
  query!: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.events);

    let observables = {
      params: this.route.paramMap,
      query: this.route.queryParamMap,
    };
    this.router.events.subscribe((e) => {
      
    });
    combineLatest(observables).subscribe((combined) => {});
  }
}
