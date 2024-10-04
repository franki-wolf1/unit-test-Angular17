// presenter.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { PresenterService } from './presenter.service';

describe('PresenterService', () => {
  let service: PresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenterService);
  });

  it('should call method and update signal state', () => {
    expect(service.getPresenterSignal()()).toEqual(0);
    service.incrementSignal();
    expect(service.getPresenterSignal()()).toEqual(1);
  });

  it('should reset signal value', () => {
    service.incrementSignal();
    service.resetSignal();
    expect(service.getPresenterSignal()()).toEqual(0);
  });
});
