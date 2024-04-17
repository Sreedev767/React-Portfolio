import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ev70loh';
    const templateId = 'template_8btfn8j';
    const publicKey = 'IiAyIMWGWsij06yvK';
    
    const templateParams ={
      from_name: name,
      from_email: email,
      to_name: 'Sreedev v',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log('Email sent successfully!', res);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('Error sending email', err);
      });
  };

  return (
    <div id='contact' className='container  '>
      <div className='lg:flex lg:flex-wrap lg:mx-20 my-16'>

      <div className='lg:w-2/4 lg:ms-20 mb-20'>
          <motion.h2
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          className='my-12 text-center font-thin text-3xl'>Contact <span className='text-neutral-500'> Me</span></motion.h2>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          >
            <p className='lg:m-5 lg:p-8 lg:text-start text-center font-light'>Expect a quick turnaround time once you've submitted your message. I prioritize efficient communication to ensure your inquiries are addressed promptly and satisfactorily.</p>
          </motion.div>
          
        </div>

        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='lg:w-1/4 px-3 py-10 lg:px-6 lg:py-12 lg:ms-20 border border-neutral-800 rounded-2xl bg-neutral-800 bg-opacity-10'>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <input 
                  id='name'
                  type="text"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent appearance-none rounded-2xl relative block w-full px-3 py-2 my-4 border border-neutral-800 placeholder-neutral-300 text-neutral-200 focus:outline-none focus:ring-violet-700 focus:border-violet-700 focus:z-10 sm:text-sm" 
                  placeholder="Name" autoComplete="given-name"/>
              </div>
              <div>
                <input 
                  id='email'
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent appearance-none rounded-2xl relative block w-full px-3 py-2 my-4 border border-neutral-800 placeholder-neutral-300 text-neutral-200  focus:outline-none focus:ring-violet-700 focus:border-violet-700 focus:z-10 sm:text-sm"
                  placeholder="Email address" autoComplete="given-name"/>
              </div>
              <div>
                <textarea 
                  id='message'
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4" 
                  cols="4"
                  className="bg-transparent appearance-none rounded-2xl relative block w-full px-3 py-2 my-4 border border-neutral-800 placeholder-neutral-300 text-neutral-200 focus:outline-none focus:ring-violet-700 focus:border-violet-700 focus:z-10 sm:text-sm"
                  placeholder="Message" autoComplete="given-name"></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="w-full flex justify-center p-2 mt-12 border border-transparent rounded-2xl text-sm font-medium text-white bg-violet-900" 
                />
              </div>
            </div>
          </form>
        </motion.div>

      </div>
      <div className='my-20 border-t-2 border-neutral-900 pt-6'>
        <div className="text-center text-sm text-neutral-700 font-thin">2023 Sreedev.v.Portfolio
        </div>
      </div>
    </div>
  );
};

export default Contact;
