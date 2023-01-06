import React from 'react';
import Logo from '../assets/logoSoniaRachline.png';
import partner1 from '../assets/p1.png';
import partner2 from '../assets/p2.png';
import partner3 from '../assets/p3.png';
import partner4 from '../assets/p4.png';
import partner5 from '../assets/p5.png';
import partner6 from '../assets/p6.png';
import partner7 from '../assets/p7.png';

function Hero() {
  return (
    <section id="hero" className='flex flex-col justify-between items-center '>
      <div className="">
        <div className="lg:flex justify-between items-center m-1 lg:border lg:m-20 rounded-2xl shadow-lg">
          <div className="flex flex-col text-center p-10 space-y-5">
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia Rachline
            </h1>
            <p className="text-2xl px-3 md:3xl lg:4xl text-transparent bg-gradient-to-r from-yellow-200 via-green-400 to-lime-200 bg-clip-text tracking-wide ">Rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
            <p className="text-slate-100 text-xl lg:text-2xl tracking-widest">Auteure | Ghostwriter | Rédactrice</p>
          </div>
          <div className="px-16 md:p-26">
            <img src={Logo} alt="Sonia Rachline" className='' />
          </div>
        </div>
      </div>

      <div className="py-8 lg:py-16">
      <iframe className='w-full aspect-video rounded-md' width="560" height="315" src="https://www.youtube.com/embed/Yk4gwtdeUr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="space-y-3">
        <p className="my-4 text-center text-xl uppercase text-slate-400 tracking-widest">Collaboration</p>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap h-14">
            <img src={partner1} alt="" className="" />
            <img src={partner3} alt="" className="" />
            <img src={partner2} alt="" className="" />
            <img src={partner4} alt="" className="" />
            <img src={partner5} alt="" className="" />
            <img src={partner6} alt="" className="" />
            <img src={partner7} alt="" className="" />
          </div>
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap h-14">
            <img src={partner1} alt="" className="" />
            <img src={partner3} alt="" className="" />
            <img src={partner2} alt="" className="" />
            <img src={partner4} alt="" className="" />
            <img src={partner5} alt="" className="" />
            <img src={partner6} alt="" className="" />
            <img src={partner7} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero