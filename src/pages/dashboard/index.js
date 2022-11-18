import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

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

  return (
    <>
    <section className="max-w-screen-xl bg-sky-300 dark:bg-gray-800 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
          Bingung cari kerja di masa pamdemi ini? Cari di CariKerja.com aja
        </h2>
      </div>
      <div className="mt-10 text-center justify-center">
        <div className="mt-10 sm:mt-0">
          <p className="text-5xl font-extrabold leading-none text-white">
            {dataJob?.length}
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-white">
            Pekerjaan menunggumu
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Dashboard