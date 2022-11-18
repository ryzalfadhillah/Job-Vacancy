import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const layoutlanding = (props) => {
    return (
        <>
            <Navigation />
            <div className='p-5 lg:p-0 container mx-auto'>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default layoutlanding