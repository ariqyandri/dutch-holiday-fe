import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  packages: any;

  constructor(private route: ActivatedRoute, private service: PackageService) {}

  ngOnInit(): void {
    let observables = {
      params: this.route.paramMap,
      query: this.route.queryParamMap,
    };

    combineLatest(observables).subscribe((combined) => {
      let depart = combined['query'].get('depart');
      let country = combined['query'].get('country');
      // I could also use combined['query'].get('depart') which is the ideal situation
      if (depart && country) {
        this.packages = this.service.getFiltered({
          depart: depart,
          country: country,
        });
      } else {
        this.packages = this.service.getAll();
      }
    });
  }
}
