/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cookies from 'js-cookie'

const LayoutDashboard = (props) => {

    const [dataUser, setDataUser] = useState(JSON.parse(Cookies.get('user') ?? null))

    return (
        <>
            <main className="container mx-auto bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <Sidebar />
                    <div className="flex flex-col w-full md:space-y-4">
                    <header className="w-full px-5 bg-sky-900 h-16 z-40 flex items-center justify-between text-white border-l">
                    <h1 className="text-bold">Hallo, Selamat datang {dataUser?.name}</h1>
                    </header>
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        {props.children}
                    </div>
                    </div>
                </div>
                </main>
        </>
    )
}

export default LayoutDashboard