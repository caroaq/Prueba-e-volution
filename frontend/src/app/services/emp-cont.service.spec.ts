import { TestBed } from '@angular/core/testing';

import { EmpContService } from './emp-cont.service';

describe('EmpContService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpContService = TestBed.get(EmpContService);
    expect(service).toBeTruthy();
  });
});
