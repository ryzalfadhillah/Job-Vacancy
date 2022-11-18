import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DataJobVancancy = () => {
    
    const navigate = useNavigate()
    const [dataJob, setDataJob] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res) => {
        setDataJob(res.data.data)
        setFetchStatus(false);
        })
        .catch((err) => {
        alert(err);
        })
    },[fetchStatus, setFetchStatus])

    const convertToIDR = (event) => {
        if(event === 0){
            return "Unpaid"
        }else {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(event);
        }
    }

    const handleDesc =(params, max) => {
        if(params === null) {
        return ""
        }else{
        return params.slice(0, max) + "..."
        }
    }

    const handleDelete = (e) => {
        let Id = e.target.value
        
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            setFetchStatus(true);
        })
        .catch((err) => {
            alert(err);
        })
    }

    const handleEdit = (e) => {
        let Id = e.target.value
        navigate(`/dashboard/edit/${Id}`)        
    }

    return (
        <>
            {/* component */}
            <div className="overflow-x-auto w-full">
            <table className="border-collapse text-sm">
            <thead>
                <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Pekerjaan</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Deskripsi</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Kualifikasi</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Tipe</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Kontrak</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Perusahaan</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Link Gambar</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Kota</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Min. Gaji</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Max. Gaji</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody>
                {dataJob != null && dataJob.map((res, index) => {
                    return (
                        <>
                        <tr key={res.id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {res.title}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {handleDesc(res.job_description,20)}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {handleDesc(res.job_qualification, 20)}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {res.job_type}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {res.job_tenure }
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {res.company_name}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {handleDesc(res.company_image_url, 20)}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {res.company_city }
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {convertToIDR(res.salary_min )}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                            {convertToIDR(res.salary_max )}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">{res.job_status}</span>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                <button onClick={handleEdit} value={res.id} className="text-blue-400 hover:text-blue-600 underline">Edit</button>
                                <button onClick={handleDelete} value={res.id} className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</button>
                            </td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
            </table>
            </div>
        </>
    )
}

export default DataJobVancancy