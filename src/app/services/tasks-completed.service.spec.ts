import { TestBed } from '@angular/core/testing';

import { TasksCompletedService } from './tasks-completed.service';

describe('TasksCompletedService', () => {
  let service: TasksCompletedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksCompletedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
