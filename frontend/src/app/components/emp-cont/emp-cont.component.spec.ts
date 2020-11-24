import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContComponent } from './emp-cont.component';

describe('EmpContComponent', () => {
  let component: EmpContComponent;
  let fixture: ComponentFixture<EmpContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
