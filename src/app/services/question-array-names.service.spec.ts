import { TestBed } from '@angular/core/testing';

import { QuestionArrayNamesService } from './question-array-names.service';

describe('QuestionArrayNamesService', () => {
  let service: QuestionArrayNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionArrayNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
