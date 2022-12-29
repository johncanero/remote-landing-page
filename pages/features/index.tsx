import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const index = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left md:text-3xl font-Montserrat text-neutral-600 dark:text-neutral-400">
                    Features
                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default index