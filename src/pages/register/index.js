import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState(
        {
            name: "",
            img_url: "",
            email: "",
            password: ""
        }
    )

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setInput({...input, [name]: value})
    }

    const handleRegister = (e) => {
        e.preventDefault()

        let {name, img_url, email, password} = input;
        console.log(email, password);
        
        axios.post(`https://dev-example.sanbercloud.com/api/register `,{name, img_url, email, password})
        .then((res) => {
            alert('Register Berhasil')
            navigate('/login')
        })
        .catch((err) => {
            alert(err);
        })
    }

  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-sky-900">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                            Buat Akun
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Nama</label>
                                    <input onChange={handleInput} value={input.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">URL Gambar Profile</label>
                                    <input onChange={handleInput} value={input.img_url} type="url" name="img_url" id="image_url" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image url" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                                    <input onChange={handleInput} value={input.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input onChange={handleInput} value={input.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sky-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-sky-500 hover:bg-sky-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Daftar</button>
                                <p className="text-sm font-light text-white dark:text-gray-400">
                                    Sudah punya akun? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Masuk disini</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Register