import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, } from "@angular/router";
import { CanActivate } from "@angular/router";
import { Store } from "@ngxs/store";
import { LocalStorageService } from "./services/local-storage.service";
import { TranslateService } from './services/translate.service';
import { AuthService } from './services/auth.service';
import { SetUser, GetAssignmentInitialData } from './store/app-start/app-start.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AppGuard implements CanActivate {
  coursename: string;
  username: string;
  constructor(private localStorageService: LocalStorageService, private router: Router, private translate: TranslateService, private store: Store, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    if (route.queryParamMap.get("assignmentGuid")) {
      console.log("setting assignment guid");
      this.translate.use("en");
      this.localStorageService.setItem("assignmentGuid", route.queryParamMap.get("assignmentGuid"));
      this.localStorageService.setItem("memberId", route.queryParamMap.get("userId"));
    }
    this.store.dispatch(new GetAssignmentInitialData());
    this.store.dispatch(new SetUser());
    return this.authService.isTeacher().pipe(
      map(response => {
        if (response) {
          this.router.navigateByUrl("/student");
        }
        else {
          this.router.navigateByUrl("/");
        }

        return !response;
      })
    );
  }
}
