import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Resume } from "@/interfaces/resume.interfaces";
import { createNewResume } from "@/services/resume.services";
import { useUser } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

interface DialogCreateResumeProps {
    openDialog: boolean;
    setOpenDialog: (open: boolean) => void;
}
export const DialogCreateResume = ({ openDialog, setOpenDialog }: DialogCreateResumeProps) => {
    const [resumeTitle, setResumeTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()
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
                navigation('/dashboard/resume/' + newResume.data.attributes.uuid + '/edit');
            }
        } catch {
            setLoading(false)
        }
    }
    return (
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
    )
}
