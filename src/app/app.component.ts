import { Component, LOCALE_ID, Inject, OnDestroy } from "@angular/core";

import { LocalStorageService } from "./services/local-storage.service";
import { TranslateService } from './services/translate.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  languageList = [
    { code: "en", label: "English" },
    { code: "he", label: "עברית" }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string, private translate: TranslateService) {
    translate.use('en').then(() => {

    });

  }
}
