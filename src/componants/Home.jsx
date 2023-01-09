import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { CiLocationOn } from "react-icons/ci";
import { BsVectorPen } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
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


function Home() {
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
            <div className="flex space-x-3 justify-center items-center text-slate-50">
              <p className="flex flex-col justify-center items-center"><CiLocationOn className='text-yellow-400 text-lg' />Paris </p>
              <p className="flex flex-col justify-center items-center"><BsVectorPen className='text-blue-400 text-lg' /> Expérience: 28 ans</p>
              <p className="flex flex-col justify-center items-center"><GiSandsOfTime className='text-green-400 text-lg'/> Répond en: 24h</p>
            </div>
            <p className="text-slate-100 text-xl lg:text-2xl tracking-widest
                        text-transparent bg-gradient-to-r from-yellow-200 via-green-400 to-lime-200 bg-clip-text">
                          Auteure | Ghostwriter | Rédactrice
            </p>
            {/* Disclosure begin */}
            {/* Disclosure finished */}
          </div>
          {/* logo */}
        </div>
      </div>
      
      {/*section2 Video */}
      <div className="py-8 lg:py-16">
        <iframe className='w-full aspect-video rounded-md' width="560" height="315" src="https://www.youtube.com/embed/Yk4gwtdeUr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      {/*section3 logo collaboration */}
      <div className="space-y-3">
        <p className="my-4 text-center text-xl uppercase text-slate-400 tracking-widest">Collaboration</p>
        <div className="overflow-x-hidden">
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
          {/* <div className="flex animate-marquee text-xl text-slate-50 whitespace-no-wrap">
            <p className="">Vogue Chine</p>
            <p className="">Vogue Japon</p>
            <p className="">MarieC laire</p>
            <p className="">AD</p>
            <p className="">Air france Madame</p>
            <p className="">Hermès</p>
            <p className="">Le Printemps</p>
            <p className="">Les Galeries Lafayette</p>
            <p className="">Rémy Martin</p>
            <p className="">Habitat</p>
            <p className="">Christofle</p>
            <p className="">Louis Vuitton</p>
            <p className="">Nina Ricci Parfums</p>
            <p className="">Arche</p>
            <p className="">Lancôme</p>
            <p className="">L’Oréal professionnel</p>
            <p className="">Voyageurs du Monde</p>
            <p className="">Balmain</p>
            <p className="">Veuve Clicquot</p>
            <p className="">Cheval Blanc</p>
            <p className="">Dior Beauté</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Home