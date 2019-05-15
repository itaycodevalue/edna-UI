import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppStartStateSelectors } from 'src/app/store/app-start/app-start.selectors';
import { SetUser, GetAssignmentInitialData } from 'src/app/store/app-start/app-start.actions';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent implements OnInit {
  isReady: boolean;
  constructor(private store: Store) { }
  @Select(AppStartStateSelectors.getCourseName) courseName$: Observable<string>;
  @Select(AppStartStateSelectors.getUsername) username$: Observable<string>;
  ngOnInit() {
    this.isReady = false
    this.store.dispatch(new SetUser());
    this.store.dispatch(new GetAssignmentInitialData());
    this.courseName$.subscribe(data => {
      if (data) this.isReady = true
    });
  }



}
