import { TestBed } from '@angular/core/testing';

import { ContactServicesService } from './contact-service.service';

describe('ContactServiceService', () => {
  let service: ContactServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
