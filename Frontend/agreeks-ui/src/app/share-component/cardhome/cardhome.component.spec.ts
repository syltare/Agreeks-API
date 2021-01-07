import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhomeComponent } from './cardhome.component';

describe('CardhomeComponent', () => {
  let component: CardhomeComponent;
  let fixture: ComponentFixture<CardhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
