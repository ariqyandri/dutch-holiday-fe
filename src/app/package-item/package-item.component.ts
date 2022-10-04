import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input('package') package: any;

  constructor() { }

  ngOnInit(): void {
  }

}
