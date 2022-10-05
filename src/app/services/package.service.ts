import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { packages } from './packages';

@Injectable({
  providedIn: 'root',
})
export class PackageService extends DataService {
  constructor() {
    super(packages);
  }
  packages: any = packages;

  getFiltered(params: any) {
    return this.packages.filter((p: any) => {
      return (
        p.depart.find((d: any) => {
          return d.id === parseInt(params.depart);
        }) && p.country.id === parseInt(params.country)
      );
    });
  }
}
