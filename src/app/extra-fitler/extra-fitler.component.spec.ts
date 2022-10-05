import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraFitlerComponent } from './extra-fitler.component';

describe('ExtraFitlerComponent', () => {
  let component: ExtraFitlerComponent;
  let fixture: ComponentFixture<ExtraFitlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraFitlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraFitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
