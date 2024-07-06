import { PersonalDetail } from '@/interfaces/PersonalDetail.interfaces';
import React from 'react'

interface PersonalDetailPreviewProps {
    resumeInfo: PersonalDetail | undefined;

}
export const PersonalDetailPreview = ({ resumeInfo }: PersonalDetailPreviewProps) => {
    const colorTheme = {
        color: resumeInfo?.themeColor
    }
    const borderTheme = {
        borderColor: resumeInfo?.themeColor
    }
    return (
        <div>
            <h2 style={colorTheme} className='font-bold text-xl text-center'>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <h2 style={colorTheme} className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
            <h2 style={colorTheme} className='text-center font-normal text-xs'>{resumeInfo?.address} </h2>
            <div className='flex justify-between'>
                <h2 style={colorTheme} className='font-normal text-xs'>{resumeInfo?.phone}</h2>
                <h2 style={colorTheme} className='font-normal text-xs'>{resumeInfo?.phone}</h2>
            </div>
            <hr className='border-[1.5px] my-2' style={borderTheme} />
        </div>
    )
}
