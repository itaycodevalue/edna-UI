import { Member } from 'src/app/models/user';

export class AppStartStateModel {
    courseName: string;
    username: string;
    assignmentName: string;
    error: string;
    userType: string[];
    user: Member;
}