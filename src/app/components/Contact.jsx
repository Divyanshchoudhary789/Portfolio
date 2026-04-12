import React, { useState } from 'react'
import { motion, scale } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "d55b15fc-23dd-4d6f-9b68-734b48a96550");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };



  return (
    <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer_bg_color.png)] bg-no-repeat bg-center bg-size-[90%_auto]'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg'
        initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2 className='text-center text-5xl'
        initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get in touch
      </motion.h2>
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        Whether you have a question or just want to say hi, use the form below. I'll try my best to get back to you!
      </motion.p>

      <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }} />
          <motion.input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} />
        </div>
        <motion.textarea rows="6" name='message' required placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-2'
          initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}
        ></motion.textarea>
        <motion.p className='w-full text-center mb-4'
          initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
        >{result}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
          type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
          Submit now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </motion.button>
      </motion.form>

    </motion.div >
  )
}

export default Contact