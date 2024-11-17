'use client'

import { useFormStatus } from 'react-dom'
import scss from '@/app/styles/projectPage.module.scss'

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <div>
            <button type="submit" disabled={pending} className={scss.successButton}>Login</button>
        </div>
    )
}