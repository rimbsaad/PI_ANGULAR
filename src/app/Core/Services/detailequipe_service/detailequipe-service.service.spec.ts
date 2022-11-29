import { TestBed } from '@angular/core/testing';

import { DetailequipeServiceService } from './detailequipe-service.service';

describe('DetailequipeServiceService', () => {
  let service: DetailequipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailequipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
