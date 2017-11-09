import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmCanDeactivateGuard } from './confirm-can-deactivate.guard';

describe('ConfirmCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmCanDeactivateGuard]
    });
  });

  it('should ...', inject([ConfirmCanDeactivateGuard], (guard: ConfirmCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
