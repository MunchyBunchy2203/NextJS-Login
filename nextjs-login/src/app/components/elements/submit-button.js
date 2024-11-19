'use client'

import { useFormStatus } from 'react-dom'
import scss from '@/app/styles/projectPage.module.scss'
import Image from 'next/image'

export function SubmitButton({label}) {
    const { pending } = useFormStatus()

    return (
        <div>
            <button disabled={pending} className={scss.successButton}>{label}</button>
            <span className={scss.loadingSpan}>{pending ? <Image src="/loadingWheel.svg" alt="Loading..." width={30} height={30} priority/> : ''}</span>
        </div>
    )
}