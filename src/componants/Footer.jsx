import React from 'react';
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Logo from '../assets/logoSoniaRachline.png';



function Footer() {
  return (
    <footer className='flex flex-col bg-stone-800 px-4 text-gray-400'>
      <div className="flex justify-between items-center p-4">
        <Link to="/"><img src={Logo} alt="sonia rachline" className='h-10 md:h-14 lg:h-20 hover:scale-110' /></Link>
        <div className="flex flex-col items-center space-y-2">
          <Link to="mentions-legales" className='text-slate-300 hover:scale-105 text-xs md:text-lg'>Mentions Légales</Link>
          <div className="md:flex space-x-3">
            <p className="hover:text-red-600 text-xs md:text-lg">
              ©{new Date().getFullYear()} Sonia Rachline
            </p>
            <a href="https://nguyendev.fr/"
                className="text-xs md:text-lg hover:text-[#61dbfb]"
                rel='noreferrer' target="_blank">
              Made by Nguyen Dev
             </a>
          </div>
        </div>
        <div className="text-3xl md:text-5xl flex space-x-2">
            <a href="https://www.facebook.com/sonia.david.92" 
              className=""
              rel='noreferrer' target="_blank">
              <FiFacebook className=' hover:text-[#3b5998]'/>
            </a>
            <a href="https://www.linkedin.com/in/sonia-rachline-64776630/?originalSubdomain=fr" 
              className=""
              rel='noreferrer' target="_blank">
              <FiLinkedin className=' hover:text-[#0e76a8]'/>
            </a>
          </div>
      </div>

    </footer>
  )
}

export default Footer