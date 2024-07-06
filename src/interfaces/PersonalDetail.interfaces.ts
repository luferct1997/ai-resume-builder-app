export interface PersonalDetail {
    firstName: string;
    lastName: string;
    jobTitle: string;
    address: string;
    phone: string;
    email: string;
    themeColor: string;
    summery: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
}
export interface Skill {
    id: number;
    name: string;
    rating: number;
}
export interface Education {
    id: number;
    universityName: string;
    startDate: string;
    endDate: string;
    degree: string;
    major: string;
    description: string;
}
export interface Experience {
    id: number;
    title: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workSummery: string;
}