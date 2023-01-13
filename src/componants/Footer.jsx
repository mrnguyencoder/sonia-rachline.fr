import React from 'react';
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Logo from '../assets/logoSoniaRachline.png';



function Footer() {
  return (
    <footer className='flex flex-col bg-slate-800 px-4'>
      <div className="flex justify-between items-center p-4">
        <img src={Logo} alt="sonia rachline" className='h-20' />
        <div className="flex  flex-col items-center">
          <Link to="mentions-legales" className='text-slate-300 hover:text-green-700'>Mentions Légales</Link>
          <p className="hover:text-red-600 text-slate-400">
            ©{new Date().getFullYear()} Sonia Rachline
          </p>
        </div>
        <div className="text-3xl md:text-5xl flex space-x-3">
            <a href="https://www.facebook.com/sonia.david.92" 
              className=""
              rel='noreferrer' target="_blank">
              <FiFacebook className='text-[#3b5998] hover:text-red-700'/>
            </a>
            <a href="https://www.linkedin.com/in/sonia-rachline-64776630/?originalSubdomain=fr" 
              className=""
              rel='noreferrer' target="_blank">
              <FiLinkedin className='text-[#0e76a8] hover:text-red-700'/>
            </a>
          </div>
      </div>

    </footer>
  )
}

export default Footer