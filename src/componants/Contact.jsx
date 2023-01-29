import React from 'react';
import logo from '../assets/logoSoniaRachline.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';


function Contact() {
  return (
    <section className="text-red-700 h-screen" >
      <h2 className="text-center tracking-widest text-4xl lg:text-6xl py-10">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8">
        <div className="flex flex-col justify-center items-center space-y-8 py-6">
          <a href="tel:33782885224"
              className="flex space-x-3 text-5xl md:text-2xl hover:scale-110">
              <PhoneIcon className="md: h-10 flex-shrink-0 text-red-600" aria-hidden="true" />
              <span className="text-2xl lg:text-5xl ">+33 6 85 42 19 93</span>
          </a>
          <a href="mailto:srachline@orange.fr"
              className="flex space-x-3 text-xl md:text-2xl hover:scale-110">
              <EnvelopeIcon className="md: h-10 flex-shrink-0 text-red-600" aria-hidden="true" />
              <span className="text-2xl lg:text-5xl">srachline@orange.fr</span>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="sonia rachline" className='h-[70%] hover:animate-pulse' />
        </div>
      </div>

    </section>
  )
}

export default Contact