import Image from 'next/image';
import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets';
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div id='about'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
        >
            <motion.h4
                className='text-center mb-2 text-lg'
                initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
            >
                Introduction
            </motion.h4>
            <motion.h2
                className='text-center text-5xl '
                initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
            >
                About me

            </motion.h2>
            <motion.div
                className='flex w-full flex-col lg:flex-row  gap-20 my-20 '
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
            >
                <motion.div className='w-full sm:w-80 rounded-3xl max-w-none'
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
                >
                    <Image src={assets.divyansh_image} alt='divyansh_image' className='object-cover h-120 w-full rounded-3xl' />
                </motion.div>
                <motion.div className='flex-1'
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className='max-w-3xl '>
                        I am a passionate MERN Stack Developer with a strong focus on building scalable and user-centric web applications.My core expertise lies in MongoDB, Express.js, React, and Node.js, allowing me to bridge the gap between complex backend logic and seamless frontend experiences.
                    </p>
                    <p className='max-w-3xl'>
                        Beyond coding, I enjoy working on projects that push me to learn new technologies and improve system performance.
                    </p>
                    <p className='mb-8 max-w-3xl '>
                        I bridge the gap between a vision and a finished product through clean and thoughtful development. Focused on the MERN stack, I'm dedicated to building high-performance web apps and staying ahead of industry trends to solve complex problems efficiently.
                    </p>
                    <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li key={index} className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 lightHover hover:-translate-y-1 duration-500'
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700' >{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 className='my-6 text-gray-700'
                        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                    >
                        Tools I use
                    </motion.h4>
                    <motion.ul className='flex flex-wrap items-center gap-3 sm:gap-5'
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About;