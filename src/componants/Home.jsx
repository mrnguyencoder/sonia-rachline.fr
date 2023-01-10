import React from 'react';


function Home() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 text-center p-8">
        <div className="">
          <h1 className="text-4xl text-red-600 p-8">Sonia Rachline</h1>
          <p className="text-xl text-slate-100 px-6">Sonia Rachline est l'auteure de deux romans Les Petits Succès sont un désastre et David Bowie n'est pas mort (Robert Laffont, 2012 et 2017).</p>
        </div>
        <div className="">
          <h2 className="text-4xl text-red-600 p-8">Sonia David</h2>
          <p className="text-xl text-slate-100 px-6">Sonia David, de son vrai nom, Sonia Rachline, est rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
        </div>
      </div>
      {/* Section loop marquee text */}
      <div class="relative flex overflow-x-hidden text-red-700">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="mx-3 text-3xl">Sonia David</span>
          <span class="mx-3 text-3xl">Sonia Rachline</span>
          <span class="mx-3 text-3xl">ROMANS - PSEUDONYME SONIA DAVID</span>
          <span class="mx-3 text-3xl">GHOSTWRITING</span>
          <span class="mx-3 text-3xl">David Bowie n’est pas mort, Robert Laffont, 2017</span>
        </div>
        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mx-3 text-3xl">Les petits succès sont un désastre, Robert Laffont, 2012</span>
          <span class="mx-3 text-3xl">Mélancolique Rodéo - Jean Michel Jarre, Robert Laffont 2019</span>
          <span class="mx-3 text-3xl">Claude Brouet, Journaliste de mode, éditions du Regard, 2022</span>
          <span class="mx-3 text-3xl">Lido, Plumes stass et Emotions, Flammarion 2021</span>
          <span class="mx-3 text-3xl">Karl Lagerfeld de A à Z, Gallimard, 2019</span>
        </div>
      </div>

    </section>
  )
}

export default Home