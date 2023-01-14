import React from 'react';
import logo from '../assets/logoSoniaRachline.png';
import { PhoneIcon } from '@heroicons/react/24/outline';


function Contact() {
  return (
    <section className="" >
      <h2 className="">Contact</h2>
      <div className="">
        <PhoneIcon  className='h-8'/>
        <abbr className="">0685421993</abbr>
      </div>

      <img src={logo} alt="" />
    </section>
  )
}

export default Contact