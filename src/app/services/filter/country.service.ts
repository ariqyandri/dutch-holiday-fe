import { Injectable } from '@angular/core';
import { countries } from './countries';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends DataService {
  constructor() {
    super(countries);
  }
}
