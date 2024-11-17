'use client'

import scss from "../../styles/projectPage.module.scss"
import { loginUserAction } from "@/app/data/actions/auth-actions";
import { useActionState , useState} from "react";
import { useRouter } from 'next/navigation';
import { SubmitButton } from '@/app/components/elements/submit-button'
import Image from 'next/image'

export function LoginForm() {
    var INITIAL_STATE = { data: null, };
    var [formState, formAction] = useActionState(loginUserAction, INITIAL_STATE);
    const [isLoading, setIsLoading] = useState(false);
    localStorage.clear();

    console.log('Form State: ', formState)
    if (formState.data) {
        if (formState.data.token) {
            var router = useRouter();
            localStorage.setItem('token', formState.data.token);

            var queryData = formState.data.user;

            history.pushState(queryData, "", "/pages/dashboard");
            router.push("/pages/dashboard");
        }
    }


    return (
        <div className={scss.page}>
            <div className={scss.container}>
                <Image className={scss.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
                <form action={formAction}>
                    <div className={scss.inputBox}>
                        <input id="email" type="email" name="email" placeholder="user@example.com" required></input>
                    </div>
                    <div className={scss.inputBox}>
                        <input id="password" type="password" name="password" placeholder="Password" required></input>
                    </div>
                    <SubmitButton />
                </form>
            </div>
        </div >
    )
}

//<div className={scss.loadingOverlay} hidden={!isLoading}>Loading...</div>