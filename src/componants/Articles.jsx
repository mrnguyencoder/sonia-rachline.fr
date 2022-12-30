import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

function Articles() {
    const articles = {
        2022: [
        {
            id:1,
            name:`Show’s over for famed cabaret at Lido in Paris`,
            source: `Press Herald`,
            public: `28 mai 2022`,
            title:`“When the Lido reopened after World War II, people wanted to have fun. The Clerico brothers who bought the place wanted to make it a high-end venue. They invented the concept of dinner shows, which inspired other venues,” said Sonia Rachline, author of a book about the Lido.`,
            link: `https://www.pressherald.com/2022/05/28/shows-over-for-famed-cabaret-at-lido-in-paris/`,
            image: img1,
        },
        {
            id:2,
            name:`Lido, Main jaune, Bus Palladium : derrière les fermetures, quel ...`,
            source: `RadioFrance`,
            public: `11 août 2022`,
            title:`Sonia Rachline commence : "Je me limiterais à dire que c'est la fin d'un lieu de fête parisien. Le genre du cabaret n'est pas lié qu'au tourisme...`,
            link: `https://www.radiofrance.fr/franceculture/podcasts/le-temps-du-debat-d-ete/le-temps-du-debat-du-jeudi-11-aout-2022-4791526`,
            image: img3,
        },
        {
            id:3,
            name:`«J’étais seins nus, bien sûr» : à Paris, le Lido tire le rideau sur une épopée de 76 ans`,
            source: `Le Parisien`,
            public: `29 Juil 2022`,
            title:`Les filles dansent en talons hauts, rappelle Sonia Rachline. On peut faire un musée avec les costumes du Lido. Un string du Lido n'a rien à...`,
            link: `https://www.leparisien.fr/paris-75/jetais-seins-nus-bien-sur-a-paris-le-lido-tire-le-rideau-sur-une-epopee-de-76-ans-29-07-2022-YYVNMKGS3RAEZFS5NGBDS37ZFU.php`,
            image: img4,
        },
        {
            id:4,
            name:`Comment faire un magazine de mode ?`,
            source: `L'Obs`,
            public: `27 Novembre 2022`,
            title:`« Claude Brouet, journaliste de mode », par Claude Brouet (avec Sonia Rachline), Editions du Regard. Cet article est réservé aux abonnés...`,
            link: `https://www.nouvelobs.com/editos-et-chroniques/20221127.OBS66444/comment-faire-un-magazine-de-mode.html`,
            image: img5,
        },
        {
            id:5,
            name:`Au Lido, le rideau tombe sur soixante-quinze ans de plumes et de frous-frous`,
            source: `Le Monde`,
            public: `19 juin 2022 `,
            title:`... de football y célébrera sa victoire, raconte le livre écrit par Sonia Rachline Lido, plumes, strass et émotions (Flammarion, 2021).`,
            link: `https://www.lemonde.fr/economie/article/2022/06/18/au-lido-le-rideau-tombe-sur-soixante-quinze-ans-de-plumes-et-de-frous-frous_6130977_3234.html`,
            image: img7,
        },
    ],
        2021: [
        {
            id:1,
            name:`Les plus belles expositions à voir en France cet été`,
            source: `Vogue`,
            public: `28 juillet 2021`,
            title:`Peinture, sculpture, photographie… Tour d’horizon des plus belles expositions piquées aux quatre coins de la France cet été, à noter tout de suite dans son programme de vacances.`,
            link: `https://www.vogue.fr/culture/article/expositions-a-voir-en-france-cet-ete-2021`,
            image: img6,
        },
  
    ],
        2020: [
       
    ],
        2019: [
        {
            id:1,
            name:`Peter Lindbergh s'est éteint. Retour sur l'interview sans filtre qu'il accordait à Vogue Hommes en 2016`,
            source: `Vogue`,
            public: `04 Septembre 2019`,
            title:`Le célèbre photographe allemand, dont les clichés en noir et blanc ont contribué à asseoir la notoriété, nous a quittés ce mardi 3 septembre 2019 à l'âge de 74 ans.`,
            link: `https://www.vogue.fr/vogue-hommes/culture/diaporama/peter-lindbergh-supermodel-rotterdam-interview/37786`,
            image: img2,
        },
       
    ],
    }
  return (
    <section id="articles" className="h-full mx-4 md:mx-8 lg:mx-28" aria-label="articles">
        <div className="my-16 text-center">
            <p className="text-4xl lg:text-6xl py-5 inline bg-gradient-to-r from-blue-700 via-slate-50 to-red-600 bg-clip-text font-display  tracking-tight text-transparent">Les articles actualités</p>
        </div>
      {Object.keys(articles).map((year) => (
        <div key={year} className="px-4 rounded-lg relative">
          <div className="px-6 py-1 text-slate-50">
            <p>Année: {year}</p>
          </div>
          <ul role="list" className="relative z-0 divide-y divide-gray-200">
            {articles[year].map((date) => (
              <li key={date.id} className="text-slate-50 border rounded-2xl shadow-sm">
                <div className="relative flex items-center space-x-3 px-6 py-5 hover:bg-slate-700 hover:rounded-2xl">
                    <div className="flex">
                      <div className="p-4 md:p-10 lg:p-20 space-y-3 ">
                          <p className="text-xl font-bold md:text-3xl lg:text-5xl">{date.name}</p>
                          <p className="md:text-xl lg:text-2xl">{date.title}</p>
                          <p className="italic text-right">{date.public}</p>
                          <div className="flex space-x-5 text-slate-700 font-bold">
                            <a href={date.link} className=""
                                rel='noreferrer' target="_blank">
                                <p className="border px-6 py-1 rounded-full  bg-green-400">Lire</p>
                            </a>
                              <p className="border px-6 py-1 rounded-full ring-1 bg-amber-300">{date.source}</p>
                          </div>
                      </div>
                      <div className="py-8">
                        <img src={date.image} alt="" className='rounded-lg max-w-xs md:max-w-sm lg:max-w-lg' />
                     </div>
                    </div>
                    
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Articles