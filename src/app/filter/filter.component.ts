import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'package-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}
  options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];

  airports = [
    { id: 2, name: 'Schipol' },
    { id: 3, name: 'Heathrow' },
  ];
  countries = [
    { id: 7, name: 'Italy' },
    { id: 9, name: 'Spain' },
    { id: 11, name: 'Belgion' },
  ];
  // submit(f: any) {
  //   console.log(f);
  // }

  submit(f: any) {
    console.log(f)
    this.router.navigate(['/packages'], {
      queryParams: { depart: f.depart, country: f.country },
    });
  }
  ngOnInit(): void {

  }

}
