import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import Logo from '../assets/textsonia.png';

function NavBar() {
  const [showLinks, setShowLinks] = React.useState(false);
  const links = [
    { href: '/', label: 'Accueil', },
    { href: '/publications', label: 'Publications', },
    { href: '/contact', label: 'Contact',},
  ];

  return (
    <nav className='flex justify-between p-3 shadow-sm bg-slate-900 text-red-700'>
      <Link to="/" className="">
        <img className='h-10 w-12 md:h-14 md:w-16 hover:scale-110 transition duration-700' src={Logo} alt="Sonia Rachline" />
      </Link>
      <div className="hidden md:flex items-center text-2xl space-x-5 text-red-600 pr-4">
        <Link to="/" className="hover:animate-pulse" >Accueil</Link>
        <Link to="/publications" className="hover:animate-pulse" >Publications</Link>
        <Link to="/contact" className="hover:animate-pulse" >Contact</Link>
      </div>
      {/* Menu mobile */}
      <div className="md:hidden">
        <Bars3Icon 
          className='h-10 hover:scale-110 hover:text-red-300 translate duration-300' 
          onClick={() => setShowLinks(!showLinks)} 
        />
        {showLinks && (
          <div className="absolute flex flex-col right-0 shadow-lg text-2xl space-y-8 p-6 bg-red-800 mr-1 rounded-2xl">
            {links.map(link => (
              <Link 
                key={link.href} 
                to={link.href} 
                className="text-red-100 hover:scale-110 transition duration-500"
                onClick={() => setShowLinks(false)} 
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
