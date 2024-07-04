import { Resume } from "@/interfaces/resume.interfaces"
import { axiosClient } from "./config"

export const CreateNewResume = async (resume: Resume) => {
    console.log(resume)
    try {
        const res = await axiosClient.post('/user-resumes', {
            data: resume
        })
        return res.data
    } catch {
        console.log('Error creating new resume')
    }
}