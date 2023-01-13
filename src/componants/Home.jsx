import React from 'react';


function Home() {
  return (
    <section className="flex flex-col justify-between items-center space-y-8 lg:space-y-20 p-10 md:p-20 lg:p-32">
          <div className="-rotate-3 px-10 pt-12 md:pt-0 lg:-rotate-12 ">
            <h1 className="text-4xl text-red-600">Sonia Rachline</h1>
            <h3 className="text-2xl text-red-800">Rédactrice Journaliste</h3>
            <p className="text-xl text-slate-100 max-w-4xl pt-5">Sonia Rachline est l'auteure de deux romans Les Petits Succès sont un désastre et David Bowie n'est pas mort (Robert Laffont, 2012 et 2017).</p>
          </div>
          <div className="-rotate-3 px-10 lg:-rotate-12">
            <h2 className="text-4xl text-red-600">Sonia David</h2>
            <h3 className="text-2xl text-red-800">Écrivain</h3>
            <p className="text-xl text-slate-100 max-w-4xl pt-5">Sonia David, de son vrai nom, Sonia Rachline, est rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
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