import React from 'react';



function Home() {
  return (
    <section className='flex flex-col justify-between items-center '>
      {/*section1 Text and logo */}
      <div className="">
        {/* Flex for lg screen */}
        <div className="lg:flex justify-between items-center m-1 lg:border lg:m-20 rounded-2xl shadow-lg">
          {/* Text */}
          <div className="flex flex-col text-center p-10 space-y-5">
            <h1 className=" text-red-600  font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia David
            </h1>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <h1 className="text-red-600 font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia Rachline
            </h1>
            {/* <div className="flex space-x-3 justify-center items-center text-slate-50">
              <p className="flex flex-col justify-center items-center"><CiLocationOn className='text-yellow-400 text-lg' />Paris </p>
              <p className="flex flex-col justify-center items-center"><BsVectorPen className='text-blue-400 text-lg' /> Expérience: 28 ans</p>
              <p className="flex flex-col justify-center items-center"><GiSandsOfTime className='text-green-400 text-lg'/> Répond en: 24h</p>
            </div> */}
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            {/* <p className="text-slate-100 text-xl lg:text-2xl tracking-widest
                        text-transparent bg-gradient-to-r from-yellow-200 via-green-400 to-lime-200 bg-clip-text">
                          Auteure | Ghostwriter
            </p> */}
            {/* Disclosure begin */}
            {/* Disclosure finished */}
          </div>
          {/* logo */}
        </div>
      </div>
      
      {/*section2 Video */}
      {/* <div className="py-8 lg:py-16">
        <iframe className='w-full aspect-video rounded-md' width="560" height="315" src="https://www.youtube.com/embed/Yk4gwtdeUr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}
      
      {/*section3 logo collaboration */}
      <div class="flex overflow-x-hidden">
                <div class="py-8 animate-marquee whitespace-nowrap text-red-500">
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
                    <span class="text-xl mx-2">Sonia David</span>
                    <span class="text-xl mx-2">Sonia Rachline</span>
 
                </div>
                {/* <div class="absolute top-0 py-8 animate-marquee3 whitespace-nowrap text-yellow-300">
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
                </div> */}
            </div>  

    </section>
  )
}

export default Home