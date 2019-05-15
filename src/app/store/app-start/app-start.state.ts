import { AppStartStateModel } from "./app-start.model";
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { GetCourseName, SetUsername, GetAssignmentInitialData, SetUser, SetAssignmentName, SetUserType } from './app-start.actions';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AssignmentsService } from 'src/app/services/assigments.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SetMembers, SetNoOfStudents, SetNoOfTeachingAssistants, SetNoOfProjectGroups, SetTotalConsumed } from '../assignments/assignments.actions';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/models/user';
import { MemberService } from 'src/app/services/member.service';

@State<AppStartStateModel>({
    name: "AppStart",
    defaults: {
        courseName: "",
        username: "",
        error: "",
        userType: null,
        assignmentName: "",
        user: null
    }
})
export class AppStartState {
    constructor(private localStorageService: LocalStorageService, private assignmentsService: AssignmentsService, private store: Store, private http: HttpClient, private memberService: MemberService) { }
    @Action(GetAssignmentInitialData)
    getAssignmentInitialData(ctx: StateContext<AppStartStateModel>) {
        if (ctx.getState().courseName) {
            return ctx.getState();
        }
        else {
            return this.assignmentsService.getAssignmentData(this.localStorageService.getItem("assignmentGuid")).pipe(
                tap(data => {
                    console.log(data)
                    this.store.dispatch(new GetCourseName(data.courseName));
                    this.store.dispatch(new SetAssignmentName(data.ltiName))
                }),
                catchError(err =>
                    of(ctx.patchState({ error: err }))
                )
            )
        }
    }
    @Action(SetAssignmentName)
    setAssignmentName({ patchState }: StateContext<AppStartStateModel>,
        { payload }: SetAssignmentName) {
        patchState({
            assignmentName: payload
        });
    }
    @Action(GetCourseName)
    getCourseName(
        { patchState }: StateContext<AppStartStateModel>,
        { payload }: GetCourseName
    ) {
        patchState({
            courseName: payload
        });
    }

    @Action(SetUsername)
    getUserName(
        ctx: StateContext<AppStartStateModel>,
        { payload }: SetUsername
    ) {
        ctx.patchState({
            username: payload
        });
    }

    @Action(SetUserType)
    getUserType(
        { patchState }: StateContext<AppStartStateModel>,
        { payload }: SetUserType
    ) {
        patchState({
            userType: payload
        });
    }

    @Action(SetUser)
    SetUser(ctx: StateContext<AppStartStateModel>) {
        if (ctx.getState().user) {
            return ctx.getState();
        }
        else {
            return this.memberService.getMember(this.localStorageService.getItem("memberId")).pipe(
                tap(data => {
                    const state = ctx.getState();
                    ctx.setState({ ...state, user: data });
                    this.store.dispatch(new SetUsername(`${data.givenName}  ${data.familyName}`));
                    this.store.dispatch(new SetUserType(data.role));
                }),
                catchError(err =>
                    of(ctx.patchState({ error: err }))
                )
            )
        }


    }
}

