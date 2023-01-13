import React from 'react';
import Logo from '../assets/textsonia.png';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { BackspaceIcon, Bars2Icon, BookOpenIcon, ChatBubbleBottomCenterIcon, HomeIcon } from '@heroicons/react/24/outline';

function NavBar() {
    const links = [
        { to: '/', label: 'Accueil', icon: 'Home' },
        { to: '/publications', label: 'Publications', icon: 'BookOpen' },
        { to: '/contact', label: 'Contact', icon: 'ChatBubbleBottomCenter' },
      ]
  return (
    <nav className='flex justify-between p-3 shadow-sm bg-slate-800 text-red-600'>
        <Link to="/" className="">
            <img className='h-10 hover:animate-pulse' src={Logo} alt="Sonia Rachline" />
        </Link>
        <div className="hidden md:flex items-center text-xl space-x-5 text-red-600 pr-4">
            <Link to="/" className="hover:animate-pulse" >Accueil</Link>
            <Link to="/publications" className="hover:animate-pulse" >Publications</Link>
            <Link to="/contact" className="hover:animate-pulse" >Contact</Link>
        </div>
{/* Menu mobile */}
        {/* <div className="md:hidden text-3xl flex justify-center items-center text-right">
            <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <Bars2Icon className='h-10'/>
                </Menu.Button>     
                <Menu.Items className="absolute space-y-4 text-base p-4 right-0 w-64 origin-top-right rounded-md bg-gray-800 shadow-lg">
                    <div className="flex items-center justify-center space-x-4 text-2xl cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-2xl transition ease-in-out duration-500 ">
                        <HomeIcon className='h-8'/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/"
                            className={`${active && ''}`}
                            >
                            Accueil
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-2xl cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-2xl transition ease-in-out duration-500">
                        <BookOpenIcon className='h-8'/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/publications"
                            className={`${active && ''}`}
                            >
                            Publications
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-2xl cursor-pointer hover:bg-gray-700 px-4 py-2 rounded-2xl transition ease-in-out duration-500">
                        <ChatBubbleBottomCenterIcon className='h-8'/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/contact"
                            className={`${active && ''}`}
                            >
                            Contact
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
        </div> */}
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