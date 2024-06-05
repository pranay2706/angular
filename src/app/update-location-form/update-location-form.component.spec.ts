import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationFormComponent } from './update-location-form.component';

describe('UpdateLocationFormComponent', () => {
  let component: UpdateLocationFormComponent;
  let fixture: ComponentFixture<UpdateLocationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLocationFormComponent]
    });
    fixture = TestBed.createComponent(UpdateLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
