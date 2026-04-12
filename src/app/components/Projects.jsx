import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react"
import { delay } from 'motion';

const Projects = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <motion.h2 className='text-center text-5xl '
                initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
            >Projects
            </motion.h2>
            <motion.p className='mt-20 mb-8 flex flex-col lg:flex-row'
            initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
            > <span className='text-lg mr-3 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
                    Note:</span>  <span className='text-md'>To view the live website, please visit the backend/server link first to wake up the server instance. Since it's hosted on a free tier, the server may take a few seconds to spin up after being idle.</span></motion.p>
            <div className='flex flex-col lg:flex-row w-full justify-between gap-4  '>
                <motion.div className='flex flex-col gap-4 justify-between max-w-2xl border-l border-gray-400'
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
                >
                    <motion.div className='flex flex-wrap w-full mb-10'
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div className='hidden lg:flex flex-col items-center w-10 '
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <motion.div className='flex-1 w-full px-4'
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className='text-2xl'>Synapse -<span className='ml-3'> Professional Networking Platform</span></h3>
                            <h4 className='text-lg mt-2 '>Tech Used- <span className='text-zinc-700'>Next Js, Redux -toolkit, Node Js, Express Js, MongoDB, Cloudflare R2 </span></h4>
                            <h4 className='text-zinc-500 text-md mt-1'>Synapse is a full-stack, professional networking application designed to bridge the gap between opportunities and talent by connecting with people. Built with the <span className='text-black'>MERN Stack</span> and <span className='text-black'>Next.js</span>, it offers a seamless, high-performance experience for professionals to connect, share insights, and build their digital presence.</h4>
                            <div className='w-[80%] flex justify-between h-12 mt-2 mb-4  py-2'>
                                <div className='flex items-center gap-2'>
                                    <Link target='_blank' href={"https://synapse-s4g1.onrender.com"}>
                                        <button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Live
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </button>
                                    </Link>

                                    <Link target='_blank' href={"https://synapse-backend-ujiu.onrender.com"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Server
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                    </Link>
                                </div>

                                <Link target='_blank' href={"https://github.com/Divyanshchoudhary789/Synapse"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Github <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                </button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>


                    <motion.div className='flex flex-wrap w-full'
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div className='hidden lg:flex flex-col items-center w-10'
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <div className='flex-1 w-full px-4'>
                            <h3 className='text-2xl'>Fluxus -<span className='ml-3'>Version Control System</span></h3>
                            <h4 className='text-lg mt-2 '>Tech Used- <span className='text-zinc-700'>React Js, Node Js, Express Js, MongoDB, Cloudflare R2, REST API's </span></h4>
                            <h4 className='text-zinc-500 text-md mt-1'>A complete  version control platform with an integrated CLI tool <Link className='text-blue-500 hover:underline' href={"https://www.npmjs.com/package/fluxus_cli"}><span>(Flux CLI)</span></Link>  for seamless repository management and version tracking. Fluxus is a full-stack version control platform designed to replicate GitHub's core functionality. It enables users to create repositories, manage files with nested folder structures, track commits —all from both a web interface and an integrated command-line tool.</h4>
                            <div className='w-[80%] flex justify-between h-12 mt-2 mb-4  py-2'>
                                <div className='flex items-center gap-2'>
                                    <Link target='_blank' href={"https://fluxus-1i48.onrender.com"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Live
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                    </Link>

                                    <Link target='_blank' href={"https://fluxus-backend-ym4j.onrender.com"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Server
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                    </Link>
                                </div>

                                <Link target='_blank' href={"https://github.com/Divyanshchoudhary789/fluxus"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Github <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div className='flex flex-wrap w-full'
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div className='hidden lg:flex flex-col items-center w-10 '
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <div className='flex-1 w-full px-4'>
                            <h3 className='text-2xl'>LeaseNest -<span className='ml-3'>Rental Listings and Management based Web - Application Platform</span></h3>
                            <h4 className='text-xl mt-4 mb-2'>Tech Used-</h4>
                            <h4>Frontend- <span className='text-zinc-700'>HTML, CSS, Javascript, Bootstrap, EJS, EJS-MATE</span></h4>
                            <h4>Backend- <span className='text-zinc-700'>Node Js, Express Js, REST API's</span></h4>
                            <h4>Database- <span className='text-zinc-700'>MongoDB, Cloudinary(file storage)</span></h4>
                            <h4>Additional API's- <span className='text-zinc-700'>GeoApify(Maps Service), Google Gemini API(Web Assistant Service), Razorpay Payment Gateway(Payment Service) </span> </h4>

                            <h4 className='text-zinc-500 text-md mt-4'>LeaseNest is a user-friendly web application designed to make finding and managing rental properties easy for both tenants and landlords. Built using <span className='text-black'>Node.js, MongoDB, and EJS </span> , the platform handles everything from property discovery to secure bookings. I integrated <span className='text-black'>Razorpay</span> for smooth payments and automatic refunds, along with <span className='text-black'>Google Gemini AI</span> to provide users with personalized property suggestions and instant support. The app is fully responsive, ensuring a great experience on both mobile and desktop.</h4>
                            <div className='w-[80%] flex justify-between h-12 mt-2 mb-4  py-2'>
                                <div className='flex items-center gap-2'>
                                    <Link target='_blank' href={"https://leasenest.onrender.com/"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Live
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                    </Link>

                                </div>

                                <Link target='_blank' href={"https://github.com/Divyanshchoudhary789/LeaseNest"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]'>Github <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <div className='w-[80%] flex justify-between h-12 mt-2 mb-4 pl-12 py-2'>
                        <Link target='_blank' href={"https://github.com/Divyanshchoudhary789"}><button className='flex items-center gap-1 border border-zinc-400 px-4 h-8 cursor-pointer rounded-2xl text-sm text-zinc-600 hover:scale-95 hover:text-black hover:bg-[#fcf4ff]' > See more...</button></Link>
                    </div>





                </motion.div>
                <motion.div className='flex-1 mt-25 h-full flex justify-end'
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Image src={"/project_image02.png"} alt='' height={500} width={500} />
                </motion.div>
            </div>
        </div>
    )
}

export default Projects;