import { PlusSquare } from 'lucide-react'
import React from 'react'

export const AddResume = () => {
    return (
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'>
            <div>
                <PlusSquare />
            </div>
        </div>
    )
}
