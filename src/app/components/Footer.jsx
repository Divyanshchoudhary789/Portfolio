import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "motion/react"

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <motion.div className='w-15 mx-auto mb-2'
                    whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                </motion.div>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    divyanshchoudhary789@gmail.com
                </div>
                <div className='w-max mx-auto flex gap-4 mt-2 '>
                    <Link target='_blank' href={"https://www.linkedin.com/in/divyansh--choudhary/"}><FaLinkedin className='text-4xl hover:scale-90' /></Link>
                    <Link target='_blank' href={"https://github.com/Divyanshchoudhary789"}><FaGithubSquare className='text-4xl hover:scale-90' /></Link>
                    <a href="mailto:divyanshchoudhary789@gmail.com"><IoMdMail className='text-4xl hover:scale-90' /></a>
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2026 Divyansh Choudhary. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li className='text-blue-500 cursor-pointer hover:underline'><a target='_blank' href="https://github.com/Divyanshchoudhary789">Github</a></li>
                    <li className='text-blue-500 cursor-pointer hover:underline'><a target='_blank' href="https://www.linkedin.com/in/divyansh--choudhary/">Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer