import React from 'react';
import Logo from '../assets/textsonia.png';
import { Menu } from '@headlessui/react';
import { FcAbout, FcBusinesswoman, FcMenu, FcNews, FcReadingEbook } from "react-icons/fc";

function NavBar() {
    
  return (
    <nav className='flex justify-between p-3 shadow-sm bg-slate-900'>
        <div className="">
            <img className='h-10 ' src={Logo} alt="Sonia Rachline" />
        </div>
        <div className="hidden md:flex text-2xl space-x-3">
            <p className="">À Propos</p>
            <p className="">Articles</p>
            <p className="">Livres</p>
            <p className="">Contact</p>
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
                            <a
                            className={`${active && ''}`}
                            href="/"
                            >
                            À Propos
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcNews className='text-3xl '/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && ''}`}
                            href="/"
                            >
                            Articles
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcReadingEbook className='text-4xl '/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && ''}`}
                            href="/"
                            >
                            Livres
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xl cursor-pointer hover:bg-slate-200">
                        <FcBusinesswoman className='text-3xl'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && ''}`}
                            href="/"
                            >
                            Contact
                            </a>
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