import { Member } from 'src/app/models/user';

export class GetCourseName {
    static readonly type = "[App Start] Get Course Name";
    constructor(public payload: string) { }
}

export class SetUsername {
    static readonly type = "[App Start] Get User Name";
    constructor(public payload: string) { }
}

export class SetUserType {
    static readonly type = "[App Start] Get User Type";
    constructor(public payload: string[]) { }
}


export class GetAssignmentInitialData {
    static readonly type = "[App Start] Get Assignment Initial Data";
}

export class SetUser {
    static readonly type = "[App Start] Set User";

}

export class SetAssignmentName {
    static readonly type = "[App Start] Set Assignment Name";
    constructor(public payload: string) { }
}