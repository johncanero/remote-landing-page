import React from 'react'
import Image from 'next/image'

const index = () => {
    return (
        <div>
            {/* Desktop */}
            <div className='flex justify-center mt-8'>
                <div className='hidden lg:block'>
                    <Image
                        width={1200}
                        height={600}
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl"
                        src="/images/remoteWorkAppPresentation.png"
                        alt="Remote Work App Presentation"
                    />
                </div>
            </div>

            {/* Tablet & Mobile */}
            <div className='md:mt-6'>
                <div className='flex justify-center mx-auto w-80 md:w-full lg:hidden'>
                    <Image
                        width={700}
                        height={400}
                        className="absolute top-0 bottom-0 left-0 right-0 mx-auto md:rounded-3xl"
                        src="/images/remoteWorkAppPresentation.png"
                        alt="Remote Work App Presentation"
                    />
                </div>
            </div>

            {/* 
            <div>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left font-Poppins dark:text-neutral-400">
                    About
                </h1>
            </div> */}
        </div>
    )
}

export default index