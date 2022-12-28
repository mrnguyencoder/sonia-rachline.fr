import React from 'react';
import Logo from '../assets/logoSoniaRachline.png';

function NavBar() {
  return (
    <nav className='flex justify-between p-3'>
        <div className="">
            <img className='h-10' src={Logo} alt="Sonia Rachline" />
        </div>
        <div className="flex text-xl space-x-3">
            <p className="">À Propos</p>
            <p className="">Articles</p>
            <p className="">Livres</p>
            <p className="">Contact</p>
        </div>
    </nav>
  )
}

export default NavBar