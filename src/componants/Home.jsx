import React from 'react';



function Home() {
  return (
    <section className='flex flex-col justify-between items-center '>
      <div className="">
        <div className="lg:flex justify-between items-center m-1 lg:border lg:m-20 rounded-2xl shadow-lg">
          {/* Text */}
          <div className="flex flex-col text-center p-10 space-y-5">
            <h1 className=" text-red-600  font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia David
            </h1>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
            <h1 className="text-red-600 font-display text-5xl md:text-6xl tracking-tight text-transparent">
              Sonia Rachline
            </h1>
            <p className="text-4xl text-slate-50">
              Text.....4-6 ligne
            </p>
          </div>
        </div>
      </div>
      

      
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
            </div>  

    </section>
  )
}

export default Home