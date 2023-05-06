import { TestBed } from '@angular/core/testing';

import { GyikService } from './gyik.service';

describe('GyikService', () => {
  let service: GyikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GyikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
