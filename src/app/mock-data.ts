import { Assignment, Member, StudentAssignment } from "./models/models";

export const mockAssignments: Assignment[] = [
    { guid: "96a9cc13-ae25-40cb-ae0c-e0e6376b95cc", courseName: "SQL", lmsInstanceName: "CodeValue moodle", lmsProviderName: "moodle", ltiName: "Production Connect Azure Functions", partitionKey: "CodeValue moodle", rowKey: "3_23", timestamp: "2019-05-08T11:16:47.6890576+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-08T11%3A16%3A47.6890576Z'\"", dueDate: new Date(2019, 10, 1) },
    { guid: "a073f0fb-cf60-4268-ae44-f101aaee02db", courseName: "SQL", lmsInstanceName: "CodeValue moodle", lmsProviderName: "moodle", ltiName: "Muhannad Was Here :)", partitionKey: "CodeValue moodle", rowKey: "3_26", timestamp: "2019-05-07T18:01:14.7262341+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-07T18%3A01%3A14.7262341Z'\"", dueDate: new Date(2019, 10, 1) },
    { guid: "ca8fc2cd-54ef-4246-a16b-9e7505e9c120", courseName: "C# Advanced", lmsInstanceName: "CodeValue moodle", lmsProviderName: "moodle", ltiName: "Azure LTI", partitionKey: "CodeValue moodle", rowKey: "6_27", timestamp: "2019-05-07T17:41:42.4245525+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-07T17%3A41%3A42.4245525Z'\"", dueDate: new Date(2019, 10, 1) },
    { guid: "3b2a1952-1220-44e1-b8cd-aaf10d3a230f", courseName: "C# Advanced", lmsInstanceName: "CodeValue moodle", lmsProviderName: "moodle", ltiName: "C# Production External Tool", partitionKey: "CodeValue moodle", rowKey: "6_30", timestamp: "2019-05-12T10:44:29.5283714+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-12T10%3A44%3A29.5283714Z'\"", dueDate: new Date(2019, 10, 1) },
    { guid: "11cb7aa3-03b4-479a-a187-fb86f8d915ca", courseName: "Microsoft Education Hub", lmsInstanceName: "CvMoodleDev", lmsProviderName: "moodle", ltiName: "Azure Tool", partitionKey: "CvMoodleDev", rowKey: "3_5", timestamp: "2019-05-06T11:53:37.9054713+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-06T11%3A53%3A37.9054713Z'\"", dueDate: new Date(2019, 10, 1) },
    { guid: "cbc0dd30-5fb5-4e20-9a38-2cb36d3d439a", courseName: "Microsoft Education Hub", lmsInstanceName: null, lmsProviderName: null, ltiName: "Local Connect", partitionKey: "CvMoodleDev", rowKey: "3_6", timestamp: "2019-05-06T11:38:11.9950308+00:00", description: "Description of the assignment", eTag: "W/\"datetime'2019-05-06T11%3A38%3A11.9950308Z'\"", dueDate: new Date(2019, 10, 1) }
]

export const mockMembers: Member[] = [
    { role: ["Instructor"], userId: 5, familyName: "Kugel", givenName: "Svea", email: "kluempie@codevalue.net", status: "Active" },
    { role: ["Instructor"], userId: 6, familyName: "Segal", givenName: "Amir", email: "Amir@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 7, familyName: "Pshul", givenName: "Alex", email: "Alex@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 8, familyName: "Kaplunsky", givenName: "Danny", email: "Danny@codevalue.net", status: "Not Active" },
    { role: ["Learner"], userId: 9, familyName: "Malka", givenName: "Idan", email: "Idan@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 10, familyName: "Vaknin", givenName: "Amichai", email: "Amichai@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 11, familyName: "Yaffe", givenName: "Itay", email: "Itay@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 12, familyName: "Mansour", givenName: "Yarin", email: "Yarin@codevalue.net", status: "Active" },
    { role: ["Learner"], userId: 13, familyName: "Zaher", givenName: "Suzan", email: "Suzan@codevalue.net", status: "Not Active" },
]

export const mockStudentsAssignments: StudentAssignment[] = [

    { id: 10, name: "Amichai Vaknin", email: "Amichai@codevalue.net", group: "B", submissionTime: new Date(), status: "Flegged", grade: 78, progressValue: 80, isCheated: true, budget: 150, consumed: 120 },

    { id: 7, name: "Alex Pshul", email: "Alex@codevalue.net", group: "D", submissionTime: new Date(), status: "Pending", grade: 98, progressValue: 47, isCheated: false, budget: 150, consumed: 88.93 },

    { id: 12, name: "Yarin Mansour", email: "Yarin@codevalue.net", group: "C", submissionTime: new Date(), status: "On Going", grade: 76, progressValue: 75, isCheated: false, budget: 150, consumed: 56 },

    { id: 5, name: "Suzan Zaher", email: "Suzan@codevalue.net", group: "A", submissionTime: new Date(), status: "Submission", grade: 93, progressValue: 85, isCheated: false, budget: 150, consumed: 17 },

    { id: 7, name: "Amir Segal", email: "Amir@codevalue.net", group: "A", submissionTime: new Date(), status: "Flegged", grade: 55, progressValue: 45, isCheated: false, budget: 150, consumed: 100 },

    { id: 9, name: "Idan Malka", email: "Idan@codevalue.net", group: "A", submissionTime: new Date(), status: "Submission", grade: 74, progressValue: 84, isCheated: false, budget: 150, consumed: 90 },

    { id: 11, name: "Itay yaffe", email: "Itay@codevalue.net", group: "A", submissionTime: new Date(), status: "Submission", grade: 74, progressValue: 84, isCheated: false, budget: 150, consumed: 90 },

    { id: 8, name: "Danny Kaplunsky", email: "Danny@codevalue.net", group: "D", submissionTime: new Date(), status: "Submission", grade: 93, progressValue: 66, isCheated: false, budget: 150, consumed: 145 },




]
