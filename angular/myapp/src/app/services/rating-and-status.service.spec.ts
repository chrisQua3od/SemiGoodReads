import { TestBed } from '@angular/core/testing';

import { RatingAndStatusService } from './rating-and-status.service';

describe('RatingAndStatusService', () => {
  let service: RatingAndStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingAndStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
