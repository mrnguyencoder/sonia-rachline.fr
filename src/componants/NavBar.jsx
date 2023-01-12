import React from 'react';
import Logo from '../assets/textsonia.png';
import { Menu } from '@headlessui/react';
import { FcAbout, FcBusinesswoman, FcMenu, FcNews, FcReadingEbook } from "react-icons/fc";
import { Link } from 'react-router-dom';

function NavBar() {
    
  return (
    <nav className='flex justify-between p-3 shadow-sm bg-slate-800 text-red-600'>
        <div className="">
            <img className='h-10 ' src={Logo} alt="Sonia Rachline" />
        </div>
        <div className="hidden md:flex items-center text-xl space-x-5 text-red-600 pr-4">
            <Link to="/" className="hover:text-red-500" >Accueil</Link>
            <Link to="/publications" className="hover:text-green-600" >Publications</Link>
            {/* <Link to="/a-propos" className="hover:text-green-600" >À Propos</Link>
            <Link to="/articles" className="hover:text-green-600" >Articles</Link> */}
            <Link to="/contact" className="hover:text-green-600" >Contact</Link>
        </div>
{/* Menu mobile */}
        <div className="md:hidden text-3xl flex justify-center items-center text-right">
            <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <FcMenu className='text-4xl'/>
                </Menu.Button>     
                <Menu.Items className="absolute space-y-4 text-slate-600 text-base p-4 right-0 mt-1 w-64 origin-top-right rounded-md bg-slate-300 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcAbout className='text-3xl'/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/"
                            className={`${active && ''}`}
                            >
                            Home
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcAbout className='text-3xl'/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/a-propos"
                            className={`${active && ''}`}
                            >
                            À Propos
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcNews className='text-3xl '/>
                        <Menu.Item>
                        {({ active }) => (
                            <Link to="/articles"
                            className={`${active && ''}`}
                            >
                            Articles
                            </Link>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcReadingEbook className='text-4xl '/>
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
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcBusinesswoman className='text-3xl'/>
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
        </div>

    </nav>
  )
}

export default NavBar