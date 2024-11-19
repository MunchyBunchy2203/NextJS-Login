'use client'

import { useFormStatus } from 'react-dom'
import scss from '@/app/styles/projectPage.module.scss'

export function SucessButton({label, onClick}) {
    const { pending } = useFormStatus()

    return (
        <div>
            <button onClick={onClick} disabled={pending} className={scss.successButton}>{label}</button>
            <span className={scss.loadingSpan}>{pending ? 'Loading...' : ''}</span>
        </div>
    )
}