import { Injectable } from '@angular/core';
import { PeriodService } from '../package/period.service';
import { CountryService } from './country.service';
import { DepartureService } from './departure.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(
    private departure: DepartureService,
    private country: CountryService,
    private period: PeriodService
  ) {}

  filter: any = {
    departure: this.departure.getAll(),
    countries: this.country.getAll(),
    arrival: this.period.getTomorrow(),
    duration: 1,
    minPrice: 0,
    maxPrice: 1,
  };

  getAll() {
    return this.filter;
  }

  getFilter(key: string) {
    return this.filter[key];
  }
}
