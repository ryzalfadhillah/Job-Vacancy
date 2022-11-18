import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className="bg-white rounded dark:bg-gray-900">
                <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Temukan pekerjaan impian mu sekarang!!!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Jelajahi pekerjaan paling menarik berdasarkan minat dan bakat Anda hanya di <span className="text-sky-900">CariKerja.com</span></p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://amorfatimedia.com/image/uploads/2022/03/ilustrasi-lowongan-pekerjaan-bulan-juni-2020jpg.jpg" alt="mockup" />
                    </div>                
                </div>
            </section>
        </>
    )
}

export default HeroSection