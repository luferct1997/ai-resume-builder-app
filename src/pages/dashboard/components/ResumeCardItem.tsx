import { ResumeResponse } from '@/interfaces/resume.interfaces'
import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
interface ResumeCardItemProps {
    resume: ResumeResponse
}
export const ResumeCardItem = ({ resume }: ResumeCardItemProps) => {
    console.log(resume)
    return (
        <Link to={'/dashboard/resume/' + resume.attributes.resumeId + '/edit'}>
            <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary'>
                <Notebook />
            </div>
            <h2 className='text-center my-1'>{resume.attributes.title}</h2>
        </Link>
    )
}
