import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'package-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Idealy should be another service for each
  airports = [
    { id: 2, name: 'Schipol' },
    { id: 3, name: 'Heathrow' },
  ];

  countries = [
    { id: 7, name: 'Italy' },
    { id: 9, name: 'Spain' },
    { id: 11, name: 'Belgium' },
  ];

  submit(f: any) {
    this.router.navigate(['/packages'], {
      queryParams: { depart: f.depart, country: f.country },
    });
  }

  ngOnInit(): void {
    // Here subscribe to the query params to give initial value to the form , if there is
  }
}
