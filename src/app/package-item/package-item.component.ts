import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss'],
})
export class PackageItemComponent implements OnInit {
  @Input('package') package: any;
  @Input('page') page?: any;
  @Input('duration') duration?: any;

  constructor() {}

  ngOnInit(): void {
  }
}
