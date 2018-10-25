import { TestBed } from '@angular/core/testing';

import { Restaurant2Service } from './restaurant2.service';

describe('Restaurant2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Restaurant2Service = TestBed.get(Restaurant2Service);
    expect(service).toBeTruthy();
  });
});
