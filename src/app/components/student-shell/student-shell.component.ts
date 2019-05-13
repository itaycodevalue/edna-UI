import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-student-shell',
  templateUrl: './student-shell.component.html',
  styleUrls: ['./student-shell.component.css']
})
export class StudentShellComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {

  }

}
