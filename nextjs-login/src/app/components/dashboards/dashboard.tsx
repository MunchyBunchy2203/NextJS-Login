'use client'

import scss from "../../styles/projectPage.module.scss"
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image'

export function ClientDashboard() {

    const router = useRouter();

    const token = localStorage.getItem('token');

    var userData = history.state;
    console.log('History State: ', userData)

    if (!token) {
        router.push('/pages/auth/login');
        return null;
    }

    function logoutClick() {
        localStorage.clear();
        router.push('/pages/auth/login');
        return null;
    }

    return (
        <div className={scss.page}>
            <div className={scss.container}>
                <Image className={scss.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

                <div className={scss.headerDiv}>
                    <h1>User Information Dashboard</h1>
                </div>
                <div className={scss.dashboard}>
                    <div className={scss.dashboardItem}>
                        <h3>Email</h3>
                        <p id="user-email">{userData.email}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>Name</h3>
                        <p id="user-name">{userData.firstname} {userData.lastname}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>Age</h3>
                        <p id="user-age">{userData.age}</p>
                    </div>
                    <div className={scss.dashboardItem}>
                        <h3>Current Residence</h3>
                        <p id="user-residence">{userData.residenceCountry} - {userData.residenceCity}</p>
                    </div>

                </div>
                <div >
                    <button onClick={logoutClick} className={scss.successButton}>Logout</button>
                </div>
            </div>
        </div>
    )
}