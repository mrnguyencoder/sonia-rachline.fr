import React from 'react';
import book1 from '../assets/book1.jpeg';


const livre = [
    {
      name: 'Claude Brouet Journaliste de mode',
      title: `Claude Brouet a consacré sa vie à la mode. Et la mode, elle, l'a depuis longtemps consacrée " grande Dame ", voire " papesse " de la profession. son parcours l'a conduite des salons Haute-Couture où travaillait sa mère, a directrice du style d'Hermès, puis à la direction mode des deux plus grands magazines féminins de l'après-guerre, et Marie-Claire.`,
      date: 'Sep 22, 2022',
      image: {book1},
      detail: 'https://www.amazon.com/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=sr_1_1?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-1',
      buy: '+1-202-555-0170',
    },
    {
      name: 'Claude Brouet Journaliste de mode',
      title: '',
      date: 'Sep 22, 2022',
      image: {book1},
      detail: 'https://www.amazon.com/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=sr_1_1?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-1',
      buy: '+1-202-555-0170',
    },
    
  ]
function Livres() {
      
  return (
    <section id="livres" className='p-6 '>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-slate-50">
        { livre.map(() => (
         <li key={livre.name} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="">
                    <p className="text-red ">{livre.name}</p>
                    <p className="">{livre.title}</p>
                    <p className="">{livre.date}</p>
                    <img alt=""className="">{livre.image}</img>
                    <div className="">
                        <a href="#" className="">{livre.detail}</a>
                        <a href="#" className="">{livre.buy}</a>
                    </div>
                </div>
            </div>
         </li>
        ))}
        </ul>
    </section>
  )
}

export default Livres;