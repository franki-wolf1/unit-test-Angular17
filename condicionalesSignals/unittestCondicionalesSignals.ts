
// conditional.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { ConditionalService } from './conditional.service';

describe('ConditionalService', () => {
  let service: ConditionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionalService);
  });

  it('should follow the correct path based on signal value', () => {
    service.evaluateCondition();
    expect(service.getResultSignal()()).toEqual('PathA');

    service.getConditionSignal().set(false);
    service.evaluateCondition();
    expect(service.getResultSignal()()).toEqual('PathB');
  });
});
