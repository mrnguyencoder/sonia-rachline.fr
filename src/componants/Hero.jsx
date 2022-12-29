import React from 'react';
import Logo from '../assets/herosonia.png';
import partner1 from '../assets/p1.png';
import partner2 from '../assets/p2.png';
import partner3 from '../assets/p3.png';
import partner4 from '../assets/p4.png';
import partner5 from '../assets/p5.png';

function Hero() {
  return (
    <section id="home" className=''>
      <div className="md:flex justify-between items-center px-20">
        <div className="flex flex-col text-center p-10 space-y-3">
          <h1 className="text-4xl text-green-700">
            Sonia Rachline
          </h1>
          <p className="text-xl text-blue-600">Rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
          <p className="text-slate-700">Écrivaine | Enseignante</p>
        </div>
        <div className="p-8">
          <img src={Logo} alt="Sonia Rachline" className='rounded-md shadow-lg' />
        </div>
      </div>
      <div className="">
        <p className="">Partners</p>
        <div className="flex h-8">
          <img src={partner1} alt="" className="" />
          <img src={partner2} alt="" className="" />
          <img src={partner3} alt="" className="" />
          <img src={partner4} alt="" className="" />
          <img src={partner5} alt="" className="" />
        </div>
      </div>
    </section>
  )
}

export default Hero