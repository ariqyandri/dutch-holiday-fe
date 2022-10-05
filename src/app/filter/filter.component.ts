import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/filter/country.service';
import { DepartureService } from '../services/filter/departure.service';
import { FilterService } from '../services/filter/filter.service';
import { PeriodService } from '../services/package/period.service';

@Component({
  selector: 'package-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private filterData: FilterService,
    private router: Router,
  ) {}

  airports: any;
  countries: any;
  tomorrow: string = '';
  filter: any;

  submit(f: any) {
    this.router.navigate(['/packages'], {
      queryParams: f,
    });
  }

  ngOnInit(): void {
    this.filter = this.filterData.getAll();
    this.airports = this.filter.departure;
    this.countries = this.filter.countries;
    this.tomorrow = this.filter.arrival;
  }
}
