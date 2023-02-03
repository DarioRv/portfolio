import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditProjectComponent } from './form-edit-project.component';

describe('FormEditProjectComponent', () => {
  let component: FormEditProjectComponent;
  let fixture: ComponentFixture<FormEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
