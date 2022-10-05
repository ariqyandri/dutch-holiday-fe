import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/filter/country.service';
import { DepartureService } from '../services/filter/departure.service';
import { PeriodService } from '../services/package/period.service';


@Component({
  selector: 'package-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private countriesData: CountryService,
    private airportsData: DepartureService,
    private periodData: PeriodService,
    private router: Router,
    private route: ActivatedRoute // private formBuilder: FormBuilder
  ) {}

  airports: any;
  countries: any;
  today:string = '';
  tomorrow: string = '';

  from: any;

  submit(f: any) {
    this.router.navigate(['/packages'], {
      queryParams: f,
    });
  }

  onChange(f: any) {}

  todayChange(from: any) {
    let td = new Date(from);
    this.tomorrow = this.periodData.getTomorrow(td);
  }

  ngOnInit(): void {
    this.airports = this.airportsData.getAll();
    this.countries = this.countriesData.getAll();
    this.today = this.periodData.getToday();
    // this.tomorrow = this.periodData.getTomorrow();
    this.from = this.tomorrow;
    // this.route.queryParamMap.subscribe((queryParam) => {
    //   if (queryParam.get('depart') || queryParam.get('country')) {
    //     // console.log(this.formBuilder);
    //   }
    // });
    // Here subscribe to the query params to give initial value to the form , if there is
  }
}
