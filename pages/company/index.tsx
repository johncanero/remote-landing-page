/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <div className='sm:mx-8 md:mx-20 lg:mx-24'>
                <h1 className="flex justify-center mt-6 text-2xl font-bold lg:text-left font-Poppins text-neutral-600 dark:text-neutral-400">
                    Company
                </h1>

                <div className='flex justify-center'>
                    <div className="mx-8 mt-4 mb-12 md:mx-16 lg:mt-4 lg:mx-0 md:max-w-2xl lg:max-w-4xl font-Poppins">
                        <p className='text-justify text-md'>
                            Welcome to
                            <Link href="/">
                                <a>
                                    <span className="font-extrabold dark:text-amber-400">&nbsp;Remote</span>
                                </a>
                            </Link>,

                            the remote work company that's committed to providing a flexible and fulfilling work experience for our team members. We believe that remote work is the future of work, and we're proud to be leading the way in creating a culture of remote work excellence.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Our Commitment to Remote Work:
                        </p>

                        <p className='mt-3 text-justify text-md'>
                            At Remote, remote work is not just an option - it's a core part of our company philosophy. We believe that remote work allows our team members to be more productive, creative, and engaged in their work, which ultimately leads to better outcomes for our clients and our company.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>

                            Available Remote Work Options:
                        </p>

                        <p className='mt-3 text-justify text-md'>

                            We offer a variety of remote work options to fit the needs of our team members. Whether you're looking for a fully remote position, a partial remote arrangement, or a flexible remote schedule, we're here to support you in finding the right work arrangement to fit your lifestyle.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Communication and Collaboration Tools:
                        </p>

                        <p className='mt-3 text-justify text-md'>
                            We use the latest communication and collaboration tools to keep our remote team members connected and engaged. From project management software to video conferencing tools and messaging apps, we make sure that our team members have everything they need to stay connected and productive.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Remote Work Policies:
                        </p>

                        <p className='mt-3 text-justify text-md'>
                            Our remote work policies are designed to ensure that our team members have the support they need to be successful in their roles. We provide guidelines for communication, productivity, and availability, so that everyone is on the same page and working towards the same goals.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Onboarding and Training for Remote Team Members:
                        </p>


                        <p className='mt-3 text-justify text-md'>
                            We understand that starting a new remote job can be challenging, which is why we provide comprehensive onboarding and training for all of our new remote team members. We make sure that you have the tools, processes, and knowledge you need to be successful in your role.
                        </p>

                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Support for Remote Team Members:
                        </p>

                        <p className='mt-3 text-justify text-md'>
                            We provide ongoing support for our remote team members, including IT support, access to equipment, and opportunities for professional development. We believe in investing in our team members' growth and development, no matter where they're located.
                        </p>


                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Remote Team Culture:
                        </p>
                        <p className='mt-3 text-justify text-md'>
                            At Remote, we believe in fostering a positive team culture, no matter where our team members are located. We host team building activities, virtual events, and recognition programs to keep our team members connected and engaged.
                        </p>
                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Testimonials from Current Remote Team Members:
                        </p>
                        <p className='mt-3 text-justify text-md'>
                            Don't just take our word for it - hear from some of our current remote team members about their experience working at Remote. They'll tell you about the benefits of working remotely, the support they receive from our company, and the positive team culture that we've created.
                        </p>
                        <p className='mt-3 text-justify text-md dark:text-remoteLightBrown'>
                            Join the Remote Work Revolution:
                        </p>
                        <p className='mt-3 text-justify text-md'>
                            If you're ready to join the remote work revolution and work for a company that's committed to your success, Remote is the place for you. Apply today and let's start working together to create a better future for remote work.
                        </p>

                        {/* Chat GPT */}
                        <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-remoteLightBrown">
                            From ChatGPT: Optimizing Language Model for Dialogue
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index