'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import scss from "../app/styles/projectPage.module.scss"

export default function Home() {
    return (
        <div className={scss.page}>
            <div className={scss.container}>
                <div className={scss.headerDiv}>
                    <h1>Welcome to the NextJS Assessment Login Page</h1>
                </div>

                <Link
                    href="/pages/auth/login"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                    <button className={scss.successButton}>
                        <span>Go to Log In</span>
                    </button>

                </Link>

            </div>
        </div>

    )

}
