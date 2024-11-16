'use client'

import scss from "../../styles/projectPage.module.scss"
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export function ClientDashboard() {

    const router = useRouter();

    const token = localStorage.getItem('token');

    var userData = history.state;
    console.log('History State: ', userData)

    if (!token) {
        router.push('/pages/auth/login');
        return null;
    }

    return (
        <div className={scss.page}>
            <div className={scss.container}>
                <div className={scss.dashboard}>
                    <div className={scss.dashboardItem}>
                        <h3>Email</h3>
                        <p id="user-email">{userData.email}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>First Name</h3>
                        <p id="user-firstname">{userData.firstname}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>Last Name</h3>
                        <p id="user-lastname">{userData.lastname}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>Created At</h3>
                        <p id="user-createdat">{userData.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}