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
    this.packages = this.service.getAll();

    let observables = {
      params: this.route.paramMap,
      query: this.route.queryParamMap,
    };

    combineLatest(observables).subscribe((combined) => {});
  }
}
