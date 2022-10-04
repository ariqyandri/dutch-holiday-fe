import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'package-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}
  options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];

  submit(f: any) {
    console.log(f);
  }

  submit2() {
    this.router.navigate(['/posts'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
  ngOnInit(): void {
  }

}
