import React from 'react';


function Home() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2">
        <div className="">
          <h1 className="text-4xl text-red-600">Sonia Rachline</h1>
          <p className="">Sonia Rachline est l'auteure de deux romans Les Petits Succès sont un désastre et David Bowie n'est pas mort (Robert Laffont, 2012 et 2017).</p>
        </div>
        <div className="">
          <h2 className="">Sonia David</h2>
          <p className="">Sonia David, de son vrai nom, Sonia Rachline, est rédactrice journaliste, notamment pour 'Vogue' depuis 25 ans</p>
        </div>
      </div>
      {/* Section loop marquee text */}
      <div class="relative flex overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="mx-4 text-4xl">Marquee Item 1</span>
          <span class="mx-4 text-4xl">Marquee Item 2</span>
          <span class="mx-4 text-4xl">Marquee Item 3</span>
          <span class="mx-4 text-4xl">Marquee Item 4</span>
          <span class="mx-4 text-4xl">Marquee Item 5</span>
        </div>
        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="mx-4 text-4xl">Marquee Item 1</span>
          <span class="mx-4 text-4xl">Marquee Item 2</span>
          <span class="mx-4 text-4xl">Marquee Item 3</span>
          <span class="mx-4 text-4xl">Marquee Item 4</span>
          <span class="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>

    </section>
  )
}

export default Home