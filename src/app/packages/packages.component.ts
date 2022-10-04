import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PackageService } from '../package.service';

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

      // I could also use combined['query'].get('depart') which is the ideal situation
      if (
        this.route.snapshot.queryParamMap.get('depart') &&
        this.route.snapshot.queryParamMap.get('country')
      ) {
        this.packages = this.service.getFiltered({
          depart: this.route.snapshot.queryParamMap.get('depart'),
          country: this.route.snapshot.queryParamMap.get('country'),
        });
      } else {
        this.packages = this.service.getAll();
      }
    });
  }
}
