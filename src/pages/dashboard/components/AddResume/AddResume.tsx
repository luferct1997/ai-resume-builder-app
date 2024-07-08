import React, { useState } from 'react'
import { PlusSquare } from 'lucide-react'
import { DialogCreateResume } from './DialogCreateResume'
export const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div>
            <div onClick={() => setOpenDialog(true)} className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'>
                <PlusSquare />
            </div>
            <DialogCreateResume openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </div>
    )
}
