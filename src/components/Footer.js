import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="mt-5 lg:py-5 p-5 lg:p-0 container mx-auto border-t bg-white md:flex md:items-center md:justify-between md:py-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Ryzal Fadhillah. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                    </li>
                    <li>
                    <Link to="/" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer