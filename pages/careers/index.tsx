import React from 'react'
import Image from 'next/image'

const index = () => {
    return (
        <div>

            {/* Desktop */}
            <div className='flex justify-center mt-8'>
                <div className='hidden lg:block'>
                    <Image
                        width={900}
                        height={500}
                        className=" absolute top-0 right-0 bottom-0 left-0 w-full h-full rounded-3xl"
                        src="/images/remoteWorkFeatureCompressed.jpg"
                        alt="Remote Work Feature"
                    />
                </div>
            </div>

            {/* Tablet & Mobile */}
            <div className='flex justify-center md:mt-6'>
                <div className='lg:hidden '>
                    <Image
                        width={500}
                        height={300}
                        className=" absolute top-0 right-0 bottom-0 left-0 md:rounded-3xl"
                        src="/images/remoteWorkFeatureCompressed.jpg"
                        alt="Remote Work Feature"
                    />
                </div>
            </div>

            <div>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left font-Poppins dark:text-neutral-400">
                    Careers
                </h1>
            </div>

            <div className='flex flex-wrap justify-center gap-10 mt-8 lg:mx-56 mb-36'>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden text-white shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-400">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans"></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index