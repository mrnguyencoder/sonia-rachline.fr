import React from 'react';
import logo from '../assets/logoSoniaRachline.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';


function Contact() {
  return (
    <section className="text-red-600 bg-gradient-to-t-primary-blue-400 " >
      <h2 className="text-center text-3xl lg:text-6xl py-10">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center items-center space-y-6 py-8">
          <a href="tel:33782885224"
              className="flex space-x-3 text-lg md:text-xl lg:text-2xl ">
              <PhoneIcon className="md: h-10 flex-shrink-0 text-green-500" aria-hidden="true" />
              <span className="md:animate-pulse text-xl lg:text-4xl ">0685421993</span>
          </a>
          <a href="mailto:srachine@orange.fr"
              className="flex space-x-3 text-lg md:text-xl lg:text-2xl ">
              <EnvelopeIcon className="md: h-10 flex-shrink-0 text-green-500" aria-hidden="true" />
              <span className="md:animate-pulse text-xl lg:text-4xl">srachine@orange.fr</span>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="sonia rachline" className='p-10 md:p-20 lg:p-30' />
        </div>
        {/* <form 
            action="https://formsubmit.co/your@email.com" method="POST"
            className='flex flex-col space-y-4 px-10 pb-10 md:px-20 lg:px-60'>
           <input type="text" name="nom" placeholder='votre nom et prénom' className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900' /> 
           <input type="number" placeholder='telephone ' name="phone" id="" className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900' />
           <input type="email" name="email" placeholder='email'  id="" className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900'/>
           <textarea name="message" id="" cols="30" rows="10" placeholder='message' className='px-6 py-4 outline-none rounded-lg bg-slate-200 border-b border-slate-500 hover:border-slate-900'></textarea>
           <div className="flex justify-center">
            <button type="submit" className='bg-emerald-600 px-6 py-3 text-slate-100 text-lg rounded-full w-36 ring-2 ring-teal-400 hover:bg-emerald-700'>Envoyer</button>
            </div>
        </form> */}
      </div>

    </section>
  )
}

export default Contact