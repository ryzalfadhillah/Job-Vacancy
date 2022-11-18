import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {

    const {Id} = useParams()
    
    const [dataJob, setDataJob] = useState(null)

    useEffect(() => {
        if(Id !== undefined){
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
            .then((res) => {
                setDataJob(res.data)
            })
            .catch((err) => {
                alert(err);
            })
        }
    },[Id])

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

    console.log(dataJob)
    
    return (
        <>
        <div>
            {/* component */}
            <style dangerouslySetInnerHTML={{__html: "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);" }} />
            <div className="min-w-screen min-h-screen bg-sky-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={dataJob?.company_image_url} className="w-full relative z-10" alt="" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                        </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{dataJob?.title}</h1>
                                <div className="flex flex-col items-start mb-4">
                                    <span className="dark:text-white text-gray-700">
                                    {dataJob?.company_name}
                                    </span>
                                    <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                                    {dataJob?.company_city}
                                    </span>
                                </div>
                                <p className="text-sm"> {dataJob?.job_description}</p>
                            </div>
                                <div>
                                
                                <span className="font-bold text-sm leading-none align-baseline">{convertToIDR(dataJob?.salary_min)} - {convertToIDR(dataJob?.salary_max)}</span>
                                </div>

                                <span className="block mt-10 w-1/3 text-center bg-sky-500 opacity-75 text-white rounded-full px-10 py-2 font-semibold cursor-default">{dataJob?.job_tenure}
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default JobDetail