// async.service.spec.ts
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('should update signal after async operation', fakeAsync(() => {
    expect(service.getAsyncSignal()()).toEqual('initial');
    service.fetchData();
    tick(1000);
    expect(service.getAsyncSignal()()).toEqual('asyncData');
  }));
});
