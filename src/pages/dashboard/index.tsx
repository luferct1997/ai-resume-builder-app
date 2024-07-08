import React, { useEffect, useState } from 'react'
import { AddResume } from './components/AddResume/AddResume'
import { getResumes } from '@/services/resume.services'
import { useUser } from '@clerk/clerk-react'
import { ResumeResponse } from '@/interfaces/resume.interfaces'
import { ResumeCardItem } from './components/ResumeCardItem'

const Dashboard = () => {
    const { user } = useUser()
    const [resumes, setResumes] = useState<ResumeResponse[]>([])
    useEffect(() => {
        user && getResumes(user?.primaryEmailAddress?.emailAddress).then(res => setResumes(res))
    }, [user])
    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='font-bold text-3xl'>My resume</h2>
            <p>Start Creating AI resume to your next Job role</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
                <AddResume />
                {Array.isArray(resumes) && resumes.map((resume) => <ResumeCardItem resume={resume} key={resume.id} />
                )}
            </div>
        </div>
    )
}

export default Dashboard