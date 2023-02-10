import React from 'react';


function Home() {
  return (
    <section className="flex flex-col justify-between items-center space-y-8 text-red-500">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="px-2 ">
            <h2 className="text-4xl md:text-5xl text-center tracking-wider">Sonia David</h2>
            <h3 className="text-2xl md:text-3xl pt-2 text-center text-red-400">Auteure</h3>
            <p className="text-xl md:text-2xl pt-6 tracking-tight">Deux romans. Un troisième en devenir. Une petite oeuvre au long cours.</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight">À la recherche de réponses. À la poursuite de ce que l’on oublie. Des récits de vrai et de faux.</p>
          </div>
          <div className=" px-2 pt-16 md:pt-0">
            <h1 className="text-4xl md:text-5xl text-center tracking-wider">Sonia Rachline</h1>
            <h3 className="text-2xl md:text-3x pt-2 text-center text-red-400">Rédactrice Journaliste</h3>
            <p className="text-xl md:text-2xl pt-6 tracking-tight">Des ouvrages d’ici, d’ailleurs, d’art. Des livres portraits, des biographies.</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight">Des « Il », des « Elle », des « Eux », et même parfois des « Je ».</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight">Une écriture qui s’immisce au fil d’histoires et d’univers singuliers.</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight">Un style au service des autres, partenariats avec des éditeurs, des maisons, des personnalités. Le plaisir de la découverte.</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight">Et du travail de groupe.</p>
            <p className="text-xl md:text-2xl pt-2 tracking-tight"></p>
          </div>
        </div>
      </div>
      {/* Section loop marquee text */}
      <div class="flex overflow-x-hidden text-red-600 w-screen">
        <div class="py-12 animate-marquee whitespace-nowrap text-3xl">
          <span class="mx-6">David Bowie n’est pas mort</span>
          <span class="mx-6">Les petits succès sont un désastre</span>
          <span class="mx-6">Mélancolique Rodéo - Jean Michel Jarre</span>
          <span class="mx-6">Melissa - Marco Palmieri</span>
          <span class="mx-6">Claude Brouet, Journaliste de mode</span>
          <span class="mx-6">Lido, Plumes stass et Emotions</span>
          <span class="mx-6">Karl Lagerfeld de A à Z</span>
          <span class="mx-6">C’est le Printemps</span>
          <span class="mx-6">Vogue Covers</span>
          <span class="mx-6">Vogue à la Mer</span>
          <span class="mx-6">Le Monde de –M-</span>
        </div>
      </div>
    </section>
  )
}

export default Home