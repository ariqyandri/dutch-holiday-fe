import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeriodService {

  constructor() {
  }
  
  td = new Date();
  tm = new Date(this.td);

  getToday() {
    return this.td.toISOString().split('T')[0];
  }

  getTomorrow(ref?: any) {
    if (ref) {
      let refdate = new Date(ref);
      this.tm.setDate(refdate.getDate() + 1);
      return this.tm.toISOString().split('T')[0];
    } else {
      this.tm.setDate(this.td.getDate() + 1);
      return this.tm.toISOString().split('T')[0];
    }
  }

}
