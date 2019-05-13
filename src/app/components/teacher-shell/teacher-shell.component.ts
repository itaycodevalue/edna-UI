import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material";
import { PublishDialogComponent } from "../publish-dialog/publish-dialog.component";
import { TranslateService } from 'src/app/services/translate.service';
import { Select } from '@ngxs/store';
import { AssignmentsStateSelectors } from 'src/app/store/assignments/assignments.selectors';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/student-assignment.model';
@Component({
  selector: 'app-teacher-shell',
  templateUrl: './teacher-shell.component.html',
  styleUrls: ['./teacher-shell.component.css']
})
export class TeacherShellComponent implements OnInit {

  assignments: Assignment[];
  publishDialogRef: MatDialogRef<PublishDialogComponent>;
  @Select(AssignmentsStateSelectors.getAssignments) assignments$: Observable<Assignment[]>;
  constructor(private dialog: MatDialog, private translate: TranslateService) { }

  ngOnInit() {
    this.assignments$.subscribe(data => {
      this.assignments = data
    })
  }
  openPublishDialog() {
    this.publishDialogRef = this.dialog.open(PublishDialogComponent, {
      data: { assignments: this.assignments }
    });
    this.publishDialogRef.afterClosed().subscribe();
  }
  handlePreviewClick() {
    this.translate.use('he').then(() => {

    });
  }

}
