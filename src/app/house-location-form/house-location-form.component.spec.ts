import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLocationFormComponent } from './house-location-form.component';

describe('HouseLocationFormComponent', () => {
  let component: HouseLocationFormComponent;
  let fixture: ComponentFixture<HouseLocationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseLocationFormComponent]
    });
    fixture = TestBed.createComponent(HouseLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
