import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  td: any = new Date();
  ngOnInit(): void {
    this.td = this.td.getFullYear();
  }
}
