import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-general',
  templateUrl: './preferences-general.component.html',
  styleUrls: ['./preferences-general.component.css']
})
export class PreferencesGeneralComponent implements OnInit {
  isEditMode: boolean;
  constructor() { }

  ngOnInit() {
    this.isEditMode = false;
  }

  saveGeneralDetails(e) {

  }

}
