import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreateJobVacancy = () => {

    const {Id} = useParams()
    const navigate = useNavigate()
    const [currentId, setCurrentId] = useState(-1);
    const [fetchStatus, setFetchStatus] = useState(true);

    const[dataJob, setDataJob]  = useState(
        {
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: "",
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: ""
        }
    )

    useEffect(() => {
        if(Id !== undefined){
            axios.get(` https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
            .then(res => {
                let data = res.data;
                console.log(data);
                let {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max} = data;
                setDataJob({title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max});
                setCurrentId(res.data.id);
            })
            .catch(err => {
                alert(err);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchStatus, setFetchStatus])

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setDataJob({...dataJob, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let {title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max} = dataJob

        if(currentId === -1){
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`,
            {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max},
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
            .then((res) => {
                navigate('/dashboard/data-loker')
            })
            .catch((err) => {
                alert(err);
            })
        }else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`,
            {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max},
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
            )
            .then((res) => {
                navigate('/dashboard/data-loker')
            })
            .catch((err) => {
                alert(err);
            })
            setCurrentId(-1);
        }
    }

    return (
        <>
        <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="bg-slate-200 w-3/4 mx-auto mb-20 p-5 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title : </label>
                            <input onChange={handleInput}value={dataJob.title} name="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">job_description : </label>
                            <input onChange={handleInput}value={dataJob.job_description} name="job_description" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job_description..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">job_qualification : </label>
                            <input onChange={handleInput}value={dataJob.job_qualification} name="job_qualification" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job_qualification..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">job_type : </label>
                            <input onChange={handleInput}value={dataJob.job_type} name="job_type" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job_type..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">job_tenure : </label>
                            <input onChange={handleInput}value={dataJob.job_tenure} name="job_tenure" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job_tenure..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">job_status : </label>
                            <input onChange={handleInput}value={dataJob.job_status} name="job_status" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="job_status..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">company_name : </label>
                            <input onChange={handleInput}value={dataJob.company_name} name="company_name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company_name..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">company_image_url : </label>
                            <input onChange={handleInput}value={dataJob.company_image_url} name="company_image_url" type="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company_image_url..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">company_city : </label>
                            <input onChange={handleInput}value={dataJob.company_city} name="company_city" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company_city..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">salary_min : </label>
                            <input onChange={handleInput}value={dataJob.salary_min} name="salary_min" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="salary_min..." required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">salary_max : </label>
                            <input onChange={handleInput}value={dataJob.salary_max}  name="salary_max" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="salary_max..." required />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>

        </>
    )
}

export default CreateJobVacancy