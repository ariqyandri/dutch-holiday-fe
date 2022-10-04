import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  package: any;
  constructor(private route: ActivatedRoute, private service: PackageService) {}

  ngOnInit(): void {

    // Iterates EVERYTIME route changes
    this.route.paramMap.subscribe((params) => {
      this.package = this.service.get(params.get('id'));
    });
  }
}
