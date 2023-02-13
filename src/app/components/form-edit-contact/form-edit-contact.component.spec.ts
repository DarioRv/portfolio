import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditContactComponent } from './form-edit-contact.component';

describe('FormEditContactComponent', () => {
  let component: FormEditContactComponent;
  let fixture: ComponentFixture<FormEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
