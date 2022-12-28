import React from 'react';
import Logo from '../assets/logoSoniaRachline.png';
import { Menu } from '@headlessui/react';

function NavBar() {
  return (
    <nav className='flex justify-between p-3'>
        <div className="">
            <img className='h-10' src={Logo} alt="Sonia Rachline" />
        </div>
        <div className="hidden md:flex text-xl space-x-3">
            <p className="">À Propos</p>
            <p className="">Articles</p>
            <p className="">Livres</p>
            <p className="">Contact</p>
        </div>
{/* Menu right */}
        <div className="text-4xl  flex justify-center items-center text-right">
            <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <BiUser className='text-slate-500'/>
                </Menu.Button>     
                <Menu.Items className="absolute space-y-4 text-slate-600 text-base p-4 text-left right-0 mt-3 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="flex justify-between items-center text-xl">
                        <FiUser className='text-3xl text-red-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection Candidate
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <FaUserTie className='text-3xl text-blue-600'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection entreprise
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <HiOutlineUserGroup className='text-3xl text-lime-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Particulier Employeur
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