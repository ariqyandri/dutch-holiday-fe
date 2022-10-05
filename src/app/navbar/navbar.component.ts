import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PackageService } from '../services/package/package.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('title')
  title!: string;

  randomId!: number;

  constructor(private packages: PackageService) {}
  get_random(list: any) {
    return list[Math.floor(Math.random() * list.length)];
  }
  ngOnInit(): void {
    this.randomId = this.get_random(this.packages.getAllIds());
  }
}
