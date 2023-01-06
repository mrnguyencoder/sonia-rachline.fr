import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FiPlus } from 'react-icons/fi';
import Logo from '../assets/logoSoniaRachline.png';
import partner1 from '../assets/p1.png';
import partner2 from '../assets/p2.png';
import partner3 from '../assets/p3.png';
import partner4 from '../assets/p4.png';
import partner5 from '../assets/p5.jpeg';
import partner6 from '../assets/p6.png';
import partner7 from '../assets/p7.png';
import partner8 from '../assets/p8.png';
import partner9 from '../assets/p9.png';
import partner10 from '../assets/p10.png';
import partner11 from '../assets/p11.png';
import partner13 from '../assets/p13.png';
import partner14 from '../assets/p14.png';
import partner15 from '../assets/p15.png';
import partner16 from '../assets/p16.png';
import partner17 from '../assets/p17.png';
import partner18 from '../assets/p18.png';

function Hero() {
  return (
    <section id="hero" className='flex flex-col justify-between items-center '>
      {/*section1 Text and logo */}
      <div className="">
        {/* Flex for lg screen */}
        <div className="lg:flex justify-between items-center m-1 lg:border lg:m-20 rounded-2xl shadow-lg">
          {/* Text */}
          <div className="flex flex-col text-center p-10 space-y-5">
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia Rachline
            </h1>
            <p className="text-slate-100 text-xl lg:text-2xl tracking-widest
                        text-transparent bg-gradient-to-r from-yellow-200 via-green-400 to-lime-200 bg-clip-text">
                          Auteure | Ghostwriter | Rédactrice
            </p>
            {/* Disclosure begin */}
            <div className="shadow-sm rounded">
              <div className='rounded-2xl p-4'>
                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>JOURNALISTE FREE LANCE — VOGUE - 1984-2017</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  <p>Collaboratrice attitrée. Domaines: editing, rewriting, Reportages Mode, beauté, art de vivre, voyage, culture.</p>
                  <p>Piges ponctuelles: Vogue Chine, Vogue Japon, Marie Claire, AD, Air france Madame...</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>REDACTRICE FREE LANCE — DIVERS - 1984-</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  Hermès, Le Printemps, les Galeries Lafayette, Rémy Martin, Habitat, Christofle, Louis Vuitton, Nina Ricci Parfums, Arche, Lancôme, L’Oréal professionnel, Voyageurs du Monde, Balmain, Veuve Clicquot, Cheval Blanc, Dior Beauté etc...
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>ENSEIGNANTE FREE LANCE — MOD’SPE PARIS 2016 -</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  Ecriture journalistique et communication.
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>TUTRICE FREE LANCE — ECRITUREFACTORY.COM 2014 -</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  Alelier d'écriture en ligne
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

              </div>
            </div>
            {/* Disclosure finished */}
          </div>
          {/* logo */}
          <div className="px-16 md:p-26">
            <img src={Logo} alt="Sonia Rachline" className='' />
          </div>
        </div>
      </div>
      
      {/*section2 Video */}
      <div className="py-8 lg:py-16">
        <iframe className='w-full aspect-video rounded-md' width="560" height="315" src="https://www.youtube.com/embed/Yk4gwtdeUr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      {/*section3 logo collaboration */}
      <div className="space-y-3">
        <p className="my-4 text-center text-xl uppercase text-slate-400 tracking-widest">Collaboration</p>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee h-14">
            <img src={partner1} alt="" className="" />
            <img src={partner3} alt="" className="" />
            <img src={partner2} alt="" className="" />
            <img src={partner4} alt="" className="" />
            <img src={partner5} alt="" className="" />
            <img src={partner6} alt="" className="" />
            <img src={partner7} alt="" className="" />
            <img src={partner8} alt="" className="" />
            <img src={partner9} alt="" className="" />
            <img src={partner10} alt="" className="" />
            <img src={partner11} alt="" className="" />
            <img src={partner13} alt="" className="" />
            <img src={partner14} alt="" className="" />
            <img src={partner15} alt="" className="" />
            <img src={partner16} alt="" className="" />
            <img src={partner17} alt="" className="" />
            <img src={partner18} alt="" className="" />
          </div>
          <div className="flex absolute top-0 animate-marquee2 h-14">
          <img src={partner1} alt="" className="" />
            <img src={partner3} alt="" className="" />
            <img src={partner2} alt="" className="" />
            <img src={partner4} alt="" className="" />
            <img src={partner5} alt="" className="" />
            <img src={partner6} alt="" className="" />
            <img src={partner7} alt="" className="" />
            <img src={partner8} alt="" className="" />
            <img src={partner9} alt="" className="" />
            <img src={partner10} alt="" className="" />
            <img src={partner11} alt="" className="" />
            <img src={partner13} alt="" className="" />
            <img src={partner14} alt="" className="" />
            <img src={partner15} alt="" className="" />
            <img src={partner16} alt="" className="" />
            <img src={partner17} alt="" className="" />
            <img src={partner18} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero