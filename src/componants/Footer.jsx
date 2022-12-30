import React from 'react';
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Logo from '../assets/logoSoniaRachline.png';
import MentionsLegales from './MentionsLegales';
import PolitiqueDeConfidentialite from './PolitiqueDeConfidentialite';


function Footer() {
  return (
    <footer className='flex flex-col bg-slate-900 text-white'>
      <div className="flex justify-between items-center p-8">
        <div className=''>
          <div>
            <img src={Logo} alt="" className='h-20' />
          </div>
        </div>
        <div className="space-y-3">
          <Link to="/MentionsLegales">Mentions Legales</Link>
          <Link to="/PolitiqueDeConfidentialite">Politique De Confidentialite</Link>
        </div>
        <div className="text-xl flex flex-col space-y-3">
            <FiLinkedin className=''/>
            <FiFacebook />
          </div>
      </div>
      <div className="text-center pb-6">
        <div className="">© 2022 Sonia Rachline | 
        <a
          href="https://nguyencoder.com/"
          rel='noreferrer' target="_blank"
          className="text-slate-400 pl-3"
        >
          Developed by nguyencoder
        </a></div>
        
      </div>
    </footer>
  )
}

export default Footer