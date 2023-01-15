import React from 'react';
import logo from '../assets/logoSoniaRachline.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';


function Contact() {
  return (
    <section className="text-red-600" >
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
      </div>
    </section>
  )
}

export default Contact