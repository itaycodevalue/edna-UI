import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { MemberService } from './member.service';
import { Store } from '@ngxs/store';
import { AppStartStateSelectors } from '../store/app-start/app-start.selectors';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Member } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private memberService: MemberService, private http: HttpClient, private localStorageService: LocalStorageService, private store: Store) { }

  isTeacher(): Observable<boolean> {
    return this.store.select(AppStartStateSelectors.getUserType).pipe(
      filter(data => !!data),
      map((userTypes: string[]) => userTypes.includes("Learner"))
    );

  }


}
