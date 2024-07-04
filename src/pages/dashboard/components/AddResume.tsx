import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid'
import { createNewResume } from '@/services/resume.services'
import { useUser } from '@clerk/clerk-react'
import { Resume } from '@/interfaces/resume.interfaces'
export const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const { user } = useUser();
    const onCreate = async () => {
        const uuid = uuidv4();
        const resume: Resume = {
            title: resumeTitle,
            resumeId: uuid,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName
        }
        try {
            setLoading(true)
            const newResume = await createNewResume(resume)
            if (newResume) {
                setLoading(false)
            }
        } catch {
            setLoading(false)
        }
    }
    return (
        <div>
            <div onClick={() => setOpenDialog(true)} className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'>
                <PlusSquare />
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            Add a title your new resume
                            <Input className='my-2' placeholder='Ex.Full Stack resume' onChange={(e) => setResumeTitle(e.target.value)} />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant='ghost'>Cancel</Button>
                            <Button disabled={!resumeTitle || loading} onClick={() => onCreate()}>
                                {loading ? <Loader2 className='animate-spin' /> : 'Create'}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
