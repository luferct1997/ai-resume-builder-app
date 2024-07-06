import { Resume } from "@/interfaces/resume.interfaces"
import { axiosClient } from "./config"

export const createNewResume = async (resume: Resume) => {
    try {
        const res = await axiosClient.post('/user-resumes', {
            data: resume
        })
        return res.data
    } catch {
        console.log('Error creating new resume')
    }
}
export const getResumes = async (userEmail: string) => {
    console.log(userEmail)
    try {
        const res = await axiosClient.get('/user-resumes?filters[userEmail][$eq]=' + userEmail)
        return res.data.data
    } catch {
        console.log('Error fetching resumes')
    }
}