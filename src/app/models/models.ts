export interface StudentAssignment {
    id: number,
    name: string,
    email: string,
    group?: string,
    submissionTime: Date,
    status: string,
    grade: number,
    progressValue: number,
    isCheated: boolean,
    budget: number,
    consumed: number
}

export interface Assignment {
    guid: string,
    courseName: string,
    lmsInstanceName: string,
    lmsProviderName: string,
    ltiName: string,
    partitionKey: string,
    rowKey: string,
    timestamp: string,
    description: string,
    dueDate: Date,
    eTag: string
}

export interface Member {
    userId: number,
    givenName: string,
    familyName: string,
    email: string,
    role: string[],
    status: string
}

