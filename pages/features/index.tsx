import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
    return (
        <div>
            <Head>
                <title>Features / Remote</title>
                <meta
                    name="description"
                    content="Features: Remote"
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Features: Remote" />
                <meta property="og:description" content="Features: Remote" />
                {/* Sitemap */}
            </Head>
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
                        width={900}
                        height={500}
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl"
                        src="/images/remoteWorkFeatureCompressed.jpg"
                        alt="Remote Work Feature"
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
                className='flex justify-center md:mt-6'>
                <div className='lg:hidden w-80 md:w-auto'>
                    <Image
                        width={500}
                        height={300}
                        className="absolute top-0 bottom-0 left-0 right-0 rounded-3xl md:rounded-3xl"
                        src="/images/remoteWorkFeatureCompressed.jpg"
                        alt="Remote Work Feature"
                    />
                </div>
            </motion.div>



            <div className='sm:mx-8 md:mx-20 lg:mx-24'>
                <h1 className="flex justify-center mt-6 text-2xl font-bold md:mt-3 lg:mt-0 lg:text-left font-Poppins dark:text-amber-400">
                    Features
                </h1>

                <div className='flex justify-center'>
                    <div className="mx-4 mt-4 mb-12 md:mx-16 lg:mt-4 lg:mx-0 md:max-w-2xl lg:max-w-4xl font-Poppins">
                        <p className='text-justify text-md'>
                            1. <span className="font-semibold dark:text-remoteLightBrown">Flexibility</span>: Remote work offers more flexibility to employees in terms of when and where they work. This allows them to better balance their personal and professional responsibilities.
                        </p>

                        <p className='text-justify text-md'>
                            2. <span className="font-semibold dark:text-remoteLightBrown">Cost-saving</span>: Remote work eliminates the need for a physical office space, which can save employers money on rent, utilities, and other overhead costs.
                        </p>

                        <p className='text-justify text-md'>
                            3. <span className="font-semibold dark:text-remoteLightBrown">Increased Productivity</span>: Studies have shown that remote workers are often more productive than their in-office counterparts, due to fewer distractions and a more comfortable working environment.
                        </p>

                        <p className='text-justify text-md'>
                            4. <span className="font-semibold dark:text-remoteLightBrown">Expanded talent pool</span>: When companies allow remote work, they can hire from a larger pool of candidates, since they are not limited by geographic location.
                        </p>

                        <p className='text-justify text-md'>
                            5. <span className="font-semibold dark:text-remoteLightBrown">Improved work-life balance</span>: Remote work can help employees avoid long commutes and spend more time with their families or pursuing hobbies and other interests.
                        </p>

                        <p className='text-justify text-md'>
                            6. <span className="font-semibold dark:text-remoteLightBrown">Environmental benefits</span>: Remote work reduces carbon emissions and the use of resources associated with traditional office environments, which is better for the environment.
                        </p>

                        <p className='text-justify text-md'>
                            7. <span className="font-semibold dark:text-remoteLightBrown">Better health</span>: Remote work can help employees avoid exposure to illnesses and reduce stress associated with commuting and office politics.
                        </p>

                        <p className='text-justify text-md'>
                            8. <span className="font-semibold dark:text-remoteLightBrown">Global collaboration</span>: Remote work enables collaboration among team members who are located in different parts of the world, which can lead to more diverse perspectives and ideas.
                        </p>

                        <p className='text-justify text-md'>
                            9. <span className="font-semibold dark:text-remoteLightBrown">Enhanced technology use</span>: Remote work requires the use of advanced technology tools and applications, which can help employees become more tech-savvy and efficient in their work.
                        </p>

                        <p className='text-justify text-md'>
                            10. <span className="font-semibold dark:text-remoteLightBrown">Improved employee retention</span>: Offering remote work options can help employers attract and retain top talent, as many employees consider flexibility in their work arrangements a valuable benefit.
                        </p>

                        {/* Chat GPT */}
                        <p className="mt-4 text-xs font-ShareTechMono md:text-sm text-zinc-400 dark:text-zinc-600">
                            From ChatGPT: Optimizing Language Model for Dialogue
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index