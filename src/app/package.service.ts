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

  constructor() {}
}
