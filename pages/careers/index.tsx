import React from 'react'
import Image from 'next/image'
import { MdComputer } from '@react-icons/all-files/md/MdComputer'
import { BiPen } from '@react-icons/all-files/bi/BiPen'
import { AiOutlineFileWord } from '@react-icons/all-files/ai/AiOutlineFileWord'
import { BsPersonPlus } from '@react-icons/all-files/bs/BsPersonPlus'
import { HiOutlineTranslate } from '@react-icons/all-files/hi/HiOutlineTranslate'
import { AiOutlineCustomerService } from '@react-icons/all-files/ai/AiOutlineCustomerService'
import { FaChalkboardTeacher } from '@react-icons/all-files/fa/FaChalkboardTeacher'
import { FaHandHoldingUsd } from '@react-icons/all-files/fa/FaHandHoldingUsd'
import { AiOutlineDatabase } from '@react-icons/all-files/ai/AiOutlineDatabase'
import { FaRegObjectUngroup } from '@react-icons/all-files/fa/FaRegObjectUngroup'
import { AiOutlineCalculator } from '@react-icons/all-files/ai/AiOutlineCalculator'
import { GrResources } from '@react-icons/all-files/gr/GrResources'
import { VscLaw } from '@react-icons/all-files/vsc/VscLaw'
import { RiHealthBookLine } from '@react-icons/all-files/ri/RiHealthBookLine'
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome'
import { BsCalendar } from '@react-icons/all-files/bs/BsCalendar'
import { MdSupervisorAccount } from '@react-icons/all-files/md/MdSupervisorAccount'
import { FcSalesPerformance } from '@react-icons/all-files/fc/FcSalesPerformance'
import { FaUniversity } from '@react-icons/all-files/fa/FaUniversity'
import { AiOutlineEdit } from '@react-icons/all-files/ai/AiOutlineEdit'

const index = () => {
    return (
        <div className='mb-28'>

            {/* Desktop */}
            <div className='flex justify-center mt-8'>
                <div className='hidden lg:block'>
                    <Image
                        width={900}
                        height={500}
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl"
                        src="/images/cardCompressed2.jpg"
                        alt="Careers Card"
                    />
                </div>
            </div>

            {/* Tablet & Mobile */}
            <div className='flex justify-center md:mt-6'>
                <div className='lg:hidden '>
                    <Image
                        width={500}
                        height={300}
                        className="absolute top-0 bottom-0 left-0 right-0 md:rounded-3xl"
                        src="/images/cardCompressed2.jpg"
                        alt="Careers Card"
                    />
                </div>
            </div>

            <div>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left font-Poppins dark:text-amber-400">
                    Career Opportunities
                </h1>
            </div>

            <div className='flex flex-wrap justify-center gap-10 mt-8 dark:text-black lg:mx-56'>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Software Development</h2>
                            <p>Many software developers work remotely, as long as they have access to a reliable internet connection and a computer with the necessary software.</p>
                            <MdComputer className='mx-auto mt-2' size={80} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Graphic Design</h2>
                            <p>Graphic designers can work from anywhere as long as they have a computer and access to design software.</p>
                            <BiPen className='mx-auto mt-2' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Writing</h2>
                            <p>Writers can work remotely as freelancers, writing articles, blog posts, or even full-length books.</p>
                            <AiOutlineFileWord className='mx-auto mt-8' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Virtual Assistance</h2>
                            <p>Virtual assistants can work remotely, helping businesses and individuals with tasks like scheduling, email management, and social media management.</p>
                            <BsPersonPlus className='mx-auto mt-3' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Translation</h2>
                            <p>Translators can work remotely, translating written documents or providing interpretation services for video calls.</p>
                            <HiOutlineTranslate className='mx-auto mt-8' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Customer Service</h2>
                            <p>Customer service representatives can work remotely, providing support over the phone, email, or chat.</p>
                            <AiOutlineCustomerService className='mx-auto mt-12' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Online Teaching</h2>
                            <p>Teachers can work remotely, teaching classes online to students all over the world.</p>
                            <FaChalkboardTeacher className='mx-auto mt-12' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Marketing</h2>
                            <p>Marketers can work remotely, managing social media accounts, running email campaigns, and developing marketing strategies.</p>
                            <FaHandHoldingUsd className='mx-auto mt-5' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Data Analysis</h2>
                            <p>Data analysts can work remotely, analyzing data and providing insights to help businesses make better decisions.</p>
                            <AiOutlineDatabase className='mx-auto mt-5' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Project Management</h2>
                            <p>Project managers can work remotely, managing teams and projects from anywhere in the world.</p>
                            <FaRegObjectUngroup className='mx-auto mt-10' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Accounting</h2>
                            <p>Accountants can work remotely, managing financial records, preparing taxes, and providing financial advice.</p>
                            <AiOutlineCalculator className='mx-auto mt-10' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Human Resources</h2>
                            <p>Human resources professionals can work remotely, managing employee benefits, recruiting, and handling employee relations.</p>
                            <GrResources className='mx-auto mt-6' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Legal</h2>
                            <p>Lawyers and legal professionals can work remotely, drafting legal documents, providing legal advice, and representing clients in court through teleconferencing.</p>
                            <VscLaw className='mx-auto mt-4' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Healthcare</h2>
                            <p>Healthcare professionals can work remotely, providing telemedicine services, such as remote consultations, monitoring, and diagnosis.</p>
                            <RiHealthBookLine className='mx-auto mt-9' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Architecture and Engineering</h2>
                            <p>Architects and engineers can work remotely, designing plans, creating blueprints, and overseeing construction projects through remote collaboration.</p>
                            <AiOutlineHome className='mx-auto mt-3' size={70} />
                        </div>
                    </div>
                </div>


                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Event and Planning</h2>
                            <p>Event planners can work remotely, coordinating events through virtual tools and platforms.</p>
                            <BsCalendar className='mx-auto mt-10' size={62} />
                        </div>
                    </div>
                </div>



                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Public Relations</h2>
                            <p>Public relations professionals can work remotely, managing social media accounts, writing press releases, and developing media strategies.</p>
                            <MdSupervisorAccount className='mx-auto mt-4' size={70} />
                        </div>
                    </div>
                </div>


                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Sales</h2>
                            <p>Sales representatives can work remotely, managing accounts, prospecting, and closing deals through remote communication.</p>
                            <FcSalesPerformance className='mx-auto mt-3' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Education</h2>
                            <p>Educators can work remotely, developing curricula, creating instructional materials, and teaching classes online.</p>
                            <FaUniversity className='mx-auto mt-5' size={70} />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div>
                    <div className="pt-6 overflow-hidden shadow-xl rounded-xl h-72 w-80 bg-gradient-to-l from-yellow-300 to-amber-400 hover:from-amber-400 hover:to-yellow-300">
                        <div className="px-6">
                            <h2 className="mb-2 text-lg font-bold text-center font-OpenSans">Editing and Proofreading</h2>
                            <p>Editors and proofreaders can work remotely, editing and proofreading written materials such as books, articles, and reports.</p>
                            <AiOutlineEdit className='mx-auto mt-5' size={70} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat GPT */}
            <div className='mt-12 text-center'>
                <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-remoteLightBrown">
                    From ChatGPT: Optimizing Language Model for Dialogue
                </p>
            </div>
        </div>
    )
}

export default index