import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
    return (
        <div>
            <Head>
                <title>About / Remote</title>
                <meta
                    name="description"
                    content="About: Remote"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="About: Remote" />
                <meta property="og:description" content="About: Remote" />
                {/* Sitemap */}
            </Head>
            <div>
                {/* Desktop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                    }}
                    className='flex justify-center mt-8'>
                    <div className='hidden lg:block'>
                        <Image
                            width={1200}
                            height={600}
                            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl"
                            src="/images/remoteWorkAppPresentation.png"
                            alt="Remote Work App Presentation"
                        />
                    </div>
                </motion.div>

                {/* Tablet & Mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                    }}
                    className='md:mt-6'>
                    <div className='flex justify-center mx-auto w-80 md:w-full lg:hidden'>
                        <Image
                            width={700}
                            height={400}
                            className="absolute top-0 bottom-0 left-0 right-0 mx-auto md:rounded-3xl"
                            src="/images/remoteWorkAppPresentation.png"
                            alt="Remote Work App Presentation"
                        />
                    </div>
                </motion.div>

                {/* 
            <div>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left font-Poppins dark:text-neutral-400">
                    About
                </h1>
            </div> */}
            </div>
        </div>
    )
}

export default index