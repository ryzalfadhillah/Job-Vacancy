import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const UbahPassword = () => {

    const [input, setInput] = useState(
        {
            current_password: "",
            new_password : "",
            new_confirm_password: ""
        }
    )

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setInput({...input, [name]: value})
    }

    const handleRegister = (e) => {
        e.preventDefault()

        let {current_password, new_password , new_confirm_password} = input;
        console.log(current_password, new_password , new_confirm_password);
        
        axios.post(`https://dev-example.sanbercloud.com/api/change-password `,
        {current_password, new_password , new_confirm_password}, 
        {headers: {"Authorization" : "Bearer " + Cookies.get('token')}})
        .then((res) => {
            alert('Ubah Pasword Berhasil')
        })
        .catch((err) => {
            alert(err);
        })
    }

    console.log(Cookies.get('token'))

  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-sky-900">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                            Ubah Pasword
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password Lama</label>
                                    <input onChange={handleInput} value={input.current_password} type="password" name="current_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password Baru</label>
                                    <input onChange={handleInput} value={input.new_password} type="password" name="new_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Masukan Ulang Password Baru</label>
                                    <input onChange={handleInput} value={input.new_confirm_password} type="password" name="new_confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-sky-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ubah</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default UbahPassword