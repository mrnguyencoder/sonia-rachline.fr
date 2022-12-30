import React from 'react';
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Logo from '../assets/logoSoniaRachline.png';


function Footer() {
  return (
    <footer className='flex flex-col bg-slate-900 text-white'>
      <div className="flex justify-between items-center p-8">
        <div className=''>
          <div>
            <img src={Logo} alt="" className='h-20 hover:bg-slate-100' />
          </div>
        </div>
        <div className="space-y-3 ">
          <p className='hover:text-green-700'>Mentions Légales </p>
          <p className='hover:text-yellow-500'>Politique De Confidentialité</p>
        </div>
        <div className="text-3xl flex flex-col space-y-3">
            <a href="https://www.linkedin.com/in/sonia-rachline-64776630/?originalSubdomain=fr" 
              className=""
              rel='noreferrer' target="_blank">
              <FiLinkedin className='text-[#0e76a8] hover:text-slate-50'/>
            </a>
            <a href="https://www.facebook.com/sonia.david.92" className=""
              rel='noreferrer' target="_blank">
              <FiFacebook className='text-[#3b5998] hover:text-slate-50'/>
            </a>
          </div>
      </div>
      <div className="text-center pb-6">
        <div className="hover:text-slate-500">© 2022 Sonia Rachline | 
        <a
          href="https://nguyencoder.com/"
          rel='noreferrer' target="_blank"
          className="text-slate-400 pl-3 hover:text-slate-50"
        >
          Developed by nguyencoder
        </a></div>
        
      </div>
    </footer>
  )
}

export default Footer