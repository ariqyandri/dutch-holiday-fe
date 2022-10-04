import { Injectable } from '@angular/core';
import { packages } from './packages';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  packages = packages;

  getAll() {
    return this.packages;
  }

  getFiltered(params: any) {
    return this.packages.filter((p: any) => {
      return (
        p.depart.find((d: any) => {
          return d.id === parseInt(params.depart);
        }) && p.country.id === parseInt(params.country)
      );
    });
  }

  get(id: any) {
    return this.packages.find((p: any) => {
      return p.id === parseInt(id);
    });
  }

  constructor() {}
}
