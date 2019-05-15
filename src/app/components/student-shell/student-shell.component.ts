import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppStartStateSelectors } from 'src/app/store/app-start/app-start.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-shell',
  templateUrl: './student-shell.component.html',
  styleUrls: ['./student-shell.component.css']
})
export class StudentShellComponent implements OnInit {
  isReady: boolean;
  @Select(AppStartStateSelectors.getUsername) username$: Observable<string>;
  constructor() { }

  ngOnInit() {
    this.isReady = false;
    this.username$.subscribe(data => {
      if (data) { this.isReady = true; }
    })
  }

}
