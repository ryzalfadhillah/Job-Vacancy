import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Sidebar = () => {

    const navigate = useNavigate()

    const handleLogOut = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        navigate('/')
    }

    return (
        <>
            <div className="h-screen hidden lg:block shadow-lg relative w-80">
                <div className="bg-sky-900 h-full dark:bg-gray-700">
                    <div className="flex items-center justify-start pt-6 ml-8">
                        <p className="font-bold text-white text-xl">
                            CariKerja.com
                        </p>
                    </div>
                    <nav className="mt-6">
                        <div>
                            <label className="mx-2 text-sm font-normal text-white">Menu</label>
                            <Link to="/" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Home
                                </span>
                            </Link>
                            <Link to="/dashboard" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Dashboard
                                </span>
                            </Link>
                            <label className="mx-2 text-sm font-normal text-white">Manage Data</label>
                            <Link to="/dashboard/data-loker" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Data Loker
                                </span>
                            </Link>
                            <Link to="/dashboard/tambah-loker" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Tambah Data Loker
                                </span>
                            </Link>

                            <label className="mx-2 text-sm font-normal text-white">Manage Profile</label>

                            <Link to="/dashboard/profile" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Profile
                                </span>
                            </Link>
                            <Link to="/dashboard/ubah-password" className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Ubah Pasword
                                </span>
                            </Link>
                            <span onClick={handleLogOut} className="cursor-pointer w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-yellow-400 border-l-4 border-transparent" >
                                <span className="text-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">
                                    Log out
                                </span>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar