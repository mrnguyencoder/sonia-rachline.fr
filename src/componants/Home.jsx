import React from 'react';


function Home() {
  return (
    <section className="flex flex-col justify-between items-center space-y-8 lg:space-y-20 p-10 md:p-20 lg:p-32">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="-rotate-3 px-10 pt-16 md:pt-0">
            <h1 className="text-4xl text-red-600 hover:animate-ping">Sonia Rachline</h1>
            <h3 className="text-2xl text-red-800">Rédactrice Journaliste</h3>
            <p className="text-xl text-slate-100 max-w-4xl pt-5">Des ouvrages d’ici, d’ailleurs, d’art. Des livres portraits, des biographies.</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2">Des « Il », des « Elle », des « Eux », et même parfois des « Je ».</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2">Une écriture qui s’immisce au fil d’histoires et d’univers singuliers.</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2">Un style au service des autres, partenariats avec des éditeurs, des maisons, des personnalités. Le plaisir de la découverte.</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2">Et du travail de groupe.</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2"></p>
          </div>
          <div className="-rotate-3 px-10">
            <h2 className="text-4xl text-red-600 hover:animate-ping">Sonia David</h2>
            <h3 className="text-2xl text-red-800">Écrivain</h3>
            <p className="text-xl text-slate-100 max-w-4xl pt-5">Deux romans. Un troisième en devenir. Une petite oeuvre au long cours.</p>
            <p className="text-xl text-slate-100 max-w-4xl pt-2">À la recherche de réponses. À la poursuite de ce que l’on oublie. Des récits de vrai et de faux.</p>
          </div>
        </div>
      </div>
      {/* Section loop marquee text */}
      <div class="flex overflow-x-hidden text-red-700 w-screen">
        <div class="py-12 animate-marquee whitespace-nowrap text-3xl">
          <span class="mx-6">Sonia David:</span>
          <span class="mx-6">David Bowie n’est pas mort, 2017</span>
          <span class="mx-6">Les petits succès sont un désastre, 2012</span>
          <span class="mx-6">Ghostwriting:</span>
          <span class="mx-6">Mélancolique Rodéo - Jean Michel Jarre, 2019</span>
          <span class="mx-6">Melissa - Marco Palmieri, 2010</span>
          <span class="mx-6">Sonia Rachline:</span>
          <span class="mx-6">Claude Brouet, Journaliste de mode, 2022</span>
          <span class="mx-6">Lido, Plumes stass et Emotions, 2021</span>
          <span class="mx-6">Karl Lagerfeld de A à Z, 2019</span>
          <span class="mx-6">C’est le Printemps la Martinière, 2015</span>
          <span class="mx-6">Vogue Covers, 2015</span>
          <span class="mx-6">Vogue à la Mer, 2008</span>
          <span class="mx-6">Le Monde de –M-, 2005</span>
        </div>
      </div>
    </section>
  )
}

export default Home