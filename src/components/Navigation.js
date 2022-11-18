import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navigation = () => {
    return (
        <>

            <Navbar
            fluid={false}
            rounded={true}
            >
                <div className="border-b py-5 container flex flex-wrap justify-between items-center mx-auto">
                    <Navbar.Brand>
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-500">
                        CariKerja.com
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                            <Link to="/job-vacancy" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Job Vacancy</Link>
                        </li>
                        {Cookies.get('token') &&
                            <li>
                                <Link to="/dashboard" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
                            </li>
                        }
                        {!Cookies.get('token') && 
                            <li>
                                <Link to="/login" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                            </li>
                        }
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </>
    )
}

export default Navigation