import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomStudentsComponent } from './classroom-students.component';

describe('ClassroomStudentsComponent', () => {
  let component: ClassroomStudentsComponent;
  let fixture: ComponentFixture<ClassroomStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
