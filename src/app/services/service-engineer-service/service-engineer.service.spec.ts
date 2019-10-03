import { TestBed } from '@angular/core/testing';

import { ServiceEngineerService } from './service-engineer.service';

describe('ServiceEngineerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEngineerService = TestBed.get(ServiceEngineerService);
    expect(service).toBeTruthy();
  });
});
