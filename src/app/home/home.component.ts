import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package/package.service';

@Component({
  selector: 'home.home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  packages!: any;

  constructor(private service: PackageService) {}

  ngOnInit(): void {
    this.packages = this.service.getAll();
  }
}
