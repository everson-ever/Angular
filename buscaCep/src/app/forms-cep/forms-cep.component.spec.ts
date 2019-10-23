import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCepComponent } from './forms-cep.component';

describe('FormsCepComponent', () => {
  let component: FormsCepComponent;
  let fixture: ComponentFixture<FormsCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
