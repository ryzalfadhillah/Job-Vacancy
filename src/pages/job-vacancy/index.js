import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const JobVacancy = () => {

  const [dataJob, setDataJob] = useState(null)

  useEffect(() => {
    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
    .then((res) => {
      setDataJob(res.data.data)
    })
    .catch((err) => {
      alert(err);
    })
  },[])

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

  return (
    <>
      <div className="bg-sky-100 p-3 rounded flex flex-wrap gap-5 lg:justify-start justify-center">
      {dataJob == null && 
        <div className="text-center">
        <div role="status">
          <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      
      }
      {dataJob != null && dataJob.map((res, index) => {
        return(
          <Link to ={`/job-vacancy/${res.id}`} key={index} className="shadow-lg rounded-xl w-full max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-start w-full flex-grow">
                  <span className="block relative">
                    <img alt="profil" src={res.company_image_url} className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </span>
                  <div className="flex flex-col items-start ml-4">
                    <span className="dark:text-white text-gray-700">
                      {res.company_name}
                    </span>
                    <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                      {handleDesc(res.company_city, 30)}
                    </span>
                  </div>
                </div>
                <div className="flex-none hidden md:block ">
                  <span className="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">
                    {res.job_tenure}
                  </span>
                </div>
              </div>
              <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
                {res.title}
              </p>
              <p className="text-gray-400 font-normal text-sm">
                {handleDesc(res.job_description, 100)}
              </p>
              <div className="flex items-center rounded justify-between p-2 bg-blue-100 my-6">
                <div className="flex items-start w-full justify-between">
                  <p className="text-sm flex-grow w-full text-2xl text-gray-700">
                    {convertToIDR(res.salary_max)}
                    <span className="text-sm font-light text-gray-400">
                      /bulan
                    </span>
                  </p>
                </div>
              </div>
            </Link>
        )
      })}
      </div>
    </>
  )
}

export default JobVacancy