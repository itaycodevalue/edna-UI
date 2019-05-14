import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Member } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  membersUrl: string = "https://assignmentsmanager.azurewebsites.net/api/assignments/" + this.localStorageService.getItem("assignmentGuid") + "/members/";
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  getMembers() {
    return this.http.get<Member[]>(this.membersUrl)
  }

  getMember(memberId: string): Observable<Member> {
    return this.http.get<Member>(this.membersUrl + memberId)
  }
}
