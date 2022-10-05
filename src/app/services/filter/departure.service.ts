import { Injectable } from '@angular/core';
import { airports } from './airports';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class DepartureService extends DataService {
  
  constructor() {
    super(airports);
  }

}
