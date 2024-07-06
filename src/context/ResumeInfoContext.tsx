import { PersonalDetail } from "@/interfaces/PersonalDetail.interfaces";
import { createContext } from "react";

interface ResumeInfoContextProps {
    resumeInfo: PersonalDetail | null;
    setResumeInfo: (resumeInfo: PersonalDetail) => void;

}
export const ResumeInfoContext = createContext<ResumeInfoContextProps | null>(null)