'use client'

import scss from "../../styles/projectPage.module.scss"
import { loginUserAction } from "@/app/data/actions/auth-actions";
import { useActionState } from "react";
import { useRouter } from 'next/navigation'

export function LoginForm() {
    var INITIAL_STATE = { data: null, };
    var [formState, formAction] = useActionState(loginUserAction, INITIAL_STATE);
    localStorage.clear();

    if (formState.data) {
        console.log("## will render on client ##");
        console.log(formState);
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
            <form action={formAction}>
                <div className={scss.container}>
                    <div className={scss.inputBox}>
                        <input id="email" type="email" name="email" placeholder="user@example.com" required></input>
                    </div>
                    <div className={scss.inputBox}>
                        <input id="password" type="password" name="password" placeholder="Password" required></input>
                    </div>
                    <div >
                        <button type="submit" className={scss.successButton}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}