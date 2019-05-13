import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { PublishDialogComponent } from "../publish-dialog/publish-dialog.component";
import { TranslateService } from 'src/app/services/translate.service';
import { Select } from '@ngxs/store';
import { AssignmentsStateSelectors } from 'src/app/store/assignments/assignments.selectors';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/student-assignment.model';

@Component({
  selector: "app-app-body",
  templateUrl: "./app-body.component.html",
  styleUrls: ["./app-body.component.css"]
})
export class AppBodyComponent {

}
