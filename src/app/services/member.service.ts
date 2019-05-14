import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Member } from '../models/user';
import { Observable, of } from 'rxjs';
const user: Member = {
  role: [
    "Instructor", "Learner"
  ],
  userId: 5,
  familyName: "Kugel",
  givenName: "Svea",
  email: "kluempie@googlemail.com",
  status: "Active"
}
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
