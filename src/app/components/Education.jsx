import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = () => {
    return (
        <div id='education' className='w-full px-[12%] py-10 scroll-mt-20 mb-30'>
            <motion.h2 className='text-center text-5xl '
                initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
            >Education
            </motion.h2>
            <div className='flex flex-col lg:flex-row w-full justify-between gap-4 '>
                <motion.div className='flex flex-col gap-4 justify-between  mt-25 max-w-2xl border-l border-gray-400'
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
                >
                    <div className='flex flex-wrap w-full'>
                        <motion.div className='hidden lg:flex flex-col items-center w-10 '
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <motion.div className='flex-1 w-full px-4'
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className='font-semibold text-gray-500'>2024 - 2027</h3>
                            <h3 className='text-xl'>Bachelor of Computer Applications in AI & IOT, <span className='ml-3'> 9.63 CGPA</span></h3>
                            <h4 className='text-md'>ICFAI University Jaipur</h4>
                            <h4 className='text-zinc-500'>Focusing on software development, data structures, and full stack engineering.</h4>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap w-full'
                    >
                        <motion.div className='hidden lg:flex flex-col items-center w-10'
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <motion.div className='flex-1 w-full px-4 '
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className='font-semibold text-gray-500'>2020 - 2022</h3>
                            <h3 className='text-xl'>Senior Secondary, <span className='ml-3'> 87.80%</span></h3>
                            <h4>Vidhya Sagar Senior Secondary School</h4>
                            <h4 className='text-zinc-500'>Studied Physics, Chemistry, and Biology.</h4>
                        </motion.div>
                    </div>
                    <div className='flex flex-wrap w-full'>
                        <motion.div className='hidden lg:flex flex-col items-center w-10 '
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className='mt-2 w-4 h-4 rounded-full bg-gray-500'></div>
                        </motion.div>
                        <motion.div className='flex-1 w-full px-4'
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className='font-semibold text-gray-500'>2019 - 2020</h3>
                            <h3 className='text-xl'>Secondary, <span className='ml-3'> 85.60%</span></h3>
                            <h4>Pearl Central Academy</h4>
                            <h4 className='text-zinc-500'>Studied Science, Mathematics, Information Technology,etc.</h4>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className='flex-1 mt-25 h-full flex justify-end'
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Image src={"/student_image01.png"} alt='' height={500} width={500} />
                </motion.div>
            </div>
        </div>
    )
}

export default Education