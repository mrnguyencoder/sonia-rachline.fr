import React from 'react';
import Logo from '../assets/logoSoniaRachline.png';
import { Player } from 'video-react';
import partner1 from '../assets/p1.png';
import partner2 from '../assets/p2.png';
import partner3 from '../assets/p3.png';
import partner4 from '../assets/p4.png';
import partner5 from '../assets/p5.png';

function Hero() {
  return (
    <section id="hero" className='h-screen'>
      <div className="">
        <div className="md:flex justify-between items-center m-10 border rounded-2xl ">
          <div className="flex flex-col text-center p-10 space-y-3">
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Sonia Rachline
            </h1>
            <p className="text-3xl text-transparent bg-gradient-to-r from-yellow-200 via-green-400 to-lime-200 bg-clip-text tracking-wide ">Rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
            <p className="text-slate-100 text-xl tracking-widest">Écrivaine | Enseignante</p>
          </div>
          <div className="p-8">
            <img src={Logo} alt="Sonia Rachline" className='rounded-md' />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Player >
          <source src="https://www.youtube.com/watch?v=Yk4gwtdeUr8" />
        </Player>
      </div>

      <div className="space-y-3">
        <p className="text-center text-xl uppercase text-slate-400 tracking-widest">Partners</p>
        <div className="flex justify-center h-12 md:h-18 w-screen text-slate-400 ">
          <img src={partner1} alt="" className="" />
          <img src={partner3} alt="" className="" />
          <img src={partner2} alt="" className="" />
          <img src={partner4} alt="" className="" />
          <img src={partner5} alt="" className="" />
        </div>
      </div>
    </section>
  )
}

export default Hero