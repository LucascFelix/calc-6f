import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalc6Component } from './form-calc6.component';

describe('FormCalc6Component', () => {
  let component: FormCalc6Component;
  let fixture: ComponentFixture<FormCalc6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCalc6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCalc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
