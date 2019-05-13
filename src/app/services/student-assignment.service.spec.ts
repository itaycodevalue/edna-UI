import { TestBed } from '@angular/core/testing';

import { StudentAssignmentService } from './student-assignment.service';

describe('StudentAssignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAssignmentService = TestBed.get(StudentAssignmentService);
    expect(service).toBeTruthy();
  });
});
