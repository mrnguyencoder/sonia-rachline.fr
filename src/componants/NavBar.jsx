import React from 'react';
import Logo from '../assets/textsonia.png';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars2Icon } from '@heroicons/react/24/outline';

function NavBar() {
    const links = [
        { to: '/', label: 'Accueil', },
        { to: '/publications', label: 'Publications', },
        { to: '/contact', label: 'Contact',},
      ]
  return (
    <nav className='flex justify-between p-3 shadow-sm bg-slate-800 text-red-600'>
        <Link to="/" className="">
            <img className='h-10 md:h-14 hover:animate-pulse' src={Logo} alt="Sonia Rachline" />
        </Link>
        <div className="hidden md:flex items-center text-xl space-x-5 text-red-600 pr-4">
            <Link to="/" className="hover:animate-pulse" >Accueil</Link>
            <Link to="/publications" className="hover:animate-pulse" >Publications</Link>
            <Link to="/contact" className="hover:animate-pulse" >Contact</Link>
        </div>
        {/* Menu mobile */}
        <Menu as="div" className="md:hidden text-right">
            <Menu.Button>
                <Bars2Icon className='h-10 hover:animate-pulse'/>
            </Menu.Button>
            <Menu.Items className="flex flex-col text-2xl space-y-8 p-8">
                {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.to}>
                    {({ active }) => (
                    <Link
                        to={link.to}
                        className={`${
                        active && 'rounded-xl bg-gray-700 px-4 py-2 transition ease-in-out duration-500 hover:animate-pulse'
                        }`}
                    >         
                        {link.label}
                    </Link>
                    )}
                </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>


    </nav>
  )
}

export default NavBar