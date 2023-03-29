import { TestBed } from '@angular/core/testing';

import { ServiceTemplatesService } from './service-templates.service';

describe('ServiceTemplatesService', () => {
  let service: ServiceTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
