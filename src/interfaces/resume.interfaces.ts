export interface Resume {
    title: string;
    resumeId: string;
    userEmail: string;
    userName: string;
}

export interface ResumeDetailed extends Resume {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ResumeResponse {
    id: number;
    attributes: ResumeDetailed;
}
