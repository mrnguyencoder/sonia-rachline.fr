import React from 'react';
import Logo from '../assets/textsonia.png';
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

function NavBar() {
    const links = [
        { href: '/', label: 'Accueil', },
        { href: '/publications', label: 'Publications', },
        { href: '/contact', label: 'Contact',},
      ]
  return (
    <nav className='flex justify-between p-3 shadow-sm bg-stone-800 text-red-700'>
        <Link to="/" className="">
            <img className='h-10 md:h-14 hover:scale-110 transition duration-700' src={Logo} alt="Sonia Rachline" />
        </Link>
        <div className="hidden md:flex items-center text-2xl space-x-5 text-red-600 pr-4">
            <Link to="/" className="hover:animate-pulse" >Accueil</Link>
            <Link to="/publications" className="hover:animate-pulse" >Publications</Link>
            <Link to="/contact" className="hover:animate-pulse" >Contact</Link>
        </div>
        {/* Menu mobile */}
        <Menu as="div" className="md:hidden text-right">
            <Menu.Button>
                <Bars3Icon className='h-10 hover:scale-110 translate duration-300 hover:bg-transparent'/>
            </Menu.Button>
            <Menu.Items className="flex flex-col text-2xl space-y-8 pt-4 pr-3 hover:bg-transparent">
                {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                    <Link
                        to={link.href}
                        className={`${
                        active ? 'hover:scale-105 transition duration-300' : ' text-red-600'
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