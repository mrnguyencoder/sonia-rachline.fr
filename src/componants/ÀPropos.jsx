import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FiPlus } from 'react-icons/fi';
import { CiLocationOn } from "react-icons/ci";
import { BsVectorPen } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import Logo from '../assets/logoSoniaRachline.png';


function ÀPropos() {
  return (
    <section className='flex flex-col justify-between items-center '>
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
      
      {/*section3 logo collaboration */}
        <div className="space-y-3">
            <p className="my-4 text-center text-xl uppercase text-slate-400 tracking-widest">Collaboration</p>
            <div class="overflow-x-hidden">
                <div class="py-8 animate-marquee whitespace-nowrap text-yellow-300">
                    <span class="text-xl mx-2">Vogue Chine</span>
                    <span class="text-xl mx-2">Vogue Japon</span>
                    <span class="text-xl mx-2">MarieC laire</span>
                    <span class="text-xl mx-2">AD</span>
                    <span class="text-xl mx-2">Air france Madame</span>
                    <span class="text-xl mx-2">Hermès</span>
                    <span class="text-xl mx-2">Le Printemps</span>
                    <span class="text-xl mx-2">Les Galeries Lafayette</span>
                    <span class="text-xl mx-2">Rémy Martin</span>
                    <span class="text-xl mx-2">Habitat</span>
                    <span class="text-xl mx-2">Christofle</span>
                    <span class="text-xl mx-2">Louis Vuitton</span>
                    <span class="text-xl mx-2">Nina Ricci Parfums</span>
                    <span class="text-xl mx-2">Arche</span>
                    <span class="text-xl mx-2">Lancôme</span>
                    <span class="text-xl mx-2">L’Oréal professionnel</span>
                    <span class="text-xl mx-2">Voyageurs du Monde</span>
                    <span class="text-xl mx-2">Balmain</span>
                    <span class="text-xl mx-2">Veuve Clicquot</span>
                    <span class="text-xl mx-2">Cheval Blanc</span>
                    <span class="text-xl mx-2">Dior Beauté</span>
                </div>
            </div>        
        </div>
    </section>
  )
}

export default ÀPropos