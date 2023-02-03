import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEducationComponent } from './form-edit-education.component';

describe('FormEditEducationComponent', () => {
  let component: FormEditEducationComponent;
  let fixture: ComponentFixture<FormEditEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
