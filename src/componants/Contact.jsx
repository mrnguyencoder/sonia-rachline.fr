import React from 'react';
import logo from '../assets/logoSoniaRachline.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import balelio from '../assets/babelio.png';
import amazon from '../assets/amazonfr.png';
import Flammarion from '../assets/flammarion.png';
import fnac from '../assets/fnac.png';


function Contact() {
  return (
    <section className="text-red-700 lg:h-screen" >
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
          {/* <div className="grid grid-cols-2 gap-8 md:gap-20">
            <a href="https://www.amazon.fr/Sonia-Rachline/e/B004MO9HTU%3Fref=dbs_a_mng_rwt_scns_share" className="hover:scale-110" 
            rel='noreferrer' target="_blank">
              <img src={amazon} alt="amazon Sonia Rachline" className='rounded-lg h-12 w-36 ' />
            </a>
            <a href="https://editions.flammarion.com/Auteurs/rachline-sonia" className="hover:scale-110" 
            rel='noreferrer' target="_blank">
              <img src={Flammarion} alt="" className='rounded-lg h-12 w-36' />
            </a>
            <a href="https://www.fnac.com/ia833855/Sonia-Rachline" className="hover:scale-110" 
            rel='noreferrer' target="_blank">
              <img src={fnac} alt="fnac Sonia Rachline" className='rounded-lg h-12 w-36' />
            </a>
            <a href="https://www.babelio.com/auteur/Sonia-David/208280" className="hover:scale-110" 
            rel='noreferrer' target="_blank">
              <img src={balelio} alt="babelio Sonia David" className='rounded-lg h-12 w-36' />
            </a>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="sonia rachline" className='h-[70%] hover:animate-pulse' />
        </div>
      </div>

    </section>
  )
}

export default Contact