import React from 'react';
import book1 from '../assets/book1.jpeg';
// import book2 from '../assets/book2.webp';
// import book3 from '../assets/book3.webp';
// import book6 from '../assets/book6.webp';
// import book7 from '../assets/book7.jpg';


function Publications() {
    // const livreItems = [
    //     {
    //       name: 'Claude Brouet Journaliste de mode',
    //       title: `Claude Brouet a consacré sa vie à la mode. Et la mode, elle, l'a depuis longtemps consacrée " grande Dame ", voire " papesse " de la profession. son parcours l'a conduite des salons Haute-Couture où travaillait sa mère, a directrice du style d'Hermès, puis à la direction mode des deux plus grands magazines féminins de l'après-guerre, et Marie-Claire.`,
    //       date: 'Sep 22, 2022',
    //       image: book1,
    //       detail: 'https://www.amazon.com/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=sr_1_1?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-1',
    //       buy: 'https://www.amazon.com/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=sr_1_1?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-1',
    //     },
    //     {
    //       name: `David Bowie n'est pas mort`,
    //       title: `"Ma mère est morte. Mon père est mort. David Bowie est mort. Ce ne sont pas uniquement de mauvaises nouvelles."
    //       À un an d'intervalle, Anne, Hélène et Émilie perdent leur mère, puis leur père. Entre les deux, David Bowie lui aussi disparaît. Dans l'enfance d'Hélène, la "sœur du milieu", le chanteur a eu une importance toute particulière, dont le souvenir soudain ressurgit...`,
    //       date: 'November 9, 2017',
    //       image: book7,
    //       detail: 'https://www.amazon.com/David-Bowie-nest-pas-mort/dp/B0776XBRCJ/ref=sr_1_2?crid=HECIA20KERV&keywords=sonia+david&qid=1672377998&s=books&sprefix=sonia+david%2Cstripbooks%2C103&sr=1-2',
    //       buy: 'https://www.amazon.com/David-Bowie-nest-pas-mort/dp/B0776XBRCJ/ref=sr_1_2?crid=HECIA20KERV&keywords=sonia+david&qid=1672377998&s=books&sprefix=sonia+david%2Cstripbooks%2C103&sr=1-2',
    //     },
    //     {
    //       name: 'Lido: Feathers, Jewels, and Thrills',
    //       title: `Jeremy Bauchet is back with Bluebells Forever Podcast to share about the release of the Book "LIDO: Feathers, Jewels, and Thrills" for the 75th anniversary of the Lido de Paris. The Lido has reopened with Jeremy promoted to Assistant Ballet Master alongside Jane Sansby. Jeremy is a wealth of knowledge of the Lido, Miss Bluebell, Donn Arden and Pierre Rambert. Congratulations Jeremy on your new adventures.`,
    //       date: 'Oct 15, 2021',
    //       image: book2,
    //       detail: 'https://www.amazon.com/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=sr_1_1?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-1',
    //       buy: 'https://www.amazon.com/Lido-Feathers-Thrills-Sonia-Rachline/dp/2080255193/ref=sr_1_3?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-3',
    //     },
    //     {
    //       name: 'Karl Lagerfeld de A à Z',
    //       title: `C comme Chanel, E comme éventail, P comme publicité, Y comme Yves Saint Laurent... Sous la forme ludique d'un abécédaire, cet ouvrage brosse le portrait du créateur de génie qu'était Karl Lagerfeld. Virtuose de l'allure et du vêtement, maître des métamorphoses, il a inspiré toute une génération de couturiers. Véritable esthète, il fut aussi photographe, éditeur, collectionneur d'art et a marqué son époque par sa singularité, sa force de travail et son franc-parler incomparables...`,
    //       date: 'Sep 26, 2019',
    //       image: book3,
    //       detail: 'https://www.babelio.com/livres/David-Karl-Lagerfeld-de-A-a-Z/1167627',
    //       buy: 'https://www.amazon.com/Karl-Lagerfeld-%C3%A0-Z/dp/2742460721/ref=sr_1_6?qid=1672353546&refinements=p_27%3ASonia+Rachline&s=books&sr=1-6',
    //     },
    //     {
    //       name: 'Vogue à la Mer',
    //       title: `A l'occasion du 4ème festival international de la photographie de mer organisé à Vannes du 18 avril au 18 mai 2008, Vogue plonge dans ses archives pour donner à voir les clichés des plus grands photographes de mode inspirés par le bord de mer pour le magazine : George Hoyningen-Huene, Peter Lindbergh, Henry Clarke,
    //       Helmut Newton, Bob Richardson, Franco Rubartelli, David Sims, Guy Bourdin, Mario Testino, Mario Sorrenti, Ines van Lamsweerde & Vinoodh Matadin...`,
    //       date: '10 avril 2008',
    //       image: book6,
    //       detail: 'https://www.amazon.com/Vogue-%C3%83-Mer-COLLECTIF/dp/2841149412',
    //       buy: 'https://www.amazon.fr/Vogue-%C3%A0-Mer-Collectif/dp/2841149412',
    //     },
        
    //   ];
  return (
    // <section id="Publications" className=''>
    //     <div className="my-16 text-center">
    //         <p className="text-4xl lg:text-6xl inline bg-gradient-to-r from-blue-700 via-slate-50 to-red-600 bg-clip-text font-display tracking-wider text-transparent">Les Publications</p>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-cyan-600 border-y-2 text-slate-100">
    //       <div className="border p-4 rounded-md m-2 hover:bg-cyan-700 space-y-2 ">
    //         <h2 className="text-lg text-center text-blue-800">ROMANS - PSEUDONYME SONIA DAVID</h2>
    //         <p className="">1, L’invention de la Vérité (écriture en cours - Lauréate d’une bourse du CNL)</p>
    //         <p className="">2, David Bowie n’est pas mort, Robert Laffont, 2017</p>
    //         <p className="">3, Les petits succès sont un désastre, Robert Laffont, 2012</p>
    //       </div>
    //       <div className="border p-4 rounded-md m-2 hover:bg-cyan-700 space-y-2 ">
    //         <h2 className="text-lg text-center text-blue-800">GHOSTWRITING</h2>
    //         <p className="">1,Mélancolique Rodéo - Jean Michel Jarre, Robert Laffont 2019</p>
    //       </div>
    //       <div className="border p-4 rounded-md m-2 hover:bg-cyan-700 space-y-2 ">
    //         <h2 className="text-lg text-center text-blue-800">DIVERS</h2>
    //         <p className="">1, Claude Brouet, Journaliste de mode, éditions du Regard, 2022</p>
    //         <p className="">2, Lido, Plumes stass et Emotions, Flammarion 2021</p>
    //         <p className="">3, Karl Lagerfeld de A à Z, Gallimard, 2019</p>
    //         <p className="">4, C’est le Printemps la Martinière, 2015</p>
    //         <p className="">5, Vogue Covers, Ramsay, 2015</p>
    //         <p className="">6, Vogue à la Mer, Ramsay, 2008</p>
    //         <p className="">7, Le Monde de –M-, Le Seuil, 2005</p>
    //       </div>
    //       <div className="border p-4 rounded-md m-2 hover:bg-cyan-700 space-y-2 ">
    //         <h2 className="text-lg text-center text-blue-800">COLLABORATIONS</h2>
    //         <p className="">1, Marithé+François Girbaud, La Martinière, 2012</p>
    //         <p className="">2, Maison Martin Margiela, éditions Rizzoli, 2009</p>
    //         <p className="">3, Vingt ans de système de mode, éditions IFM-Regard? 2008</p>
    //       </div>
    //     </div>
    //     {/* <ul className="grid gap-6 md:gap-10 lg:gap-20  md:grid-cols-2 lg:grid-cols-3 md:p-6">
    //     {livreItems.map((item) => (
    //         <li key={item.name} className="text-slate-50">
    //             <div className="flex shadow-lg border rounded-lg bg-slate-700 hover:bg-slate-800">
    //                 <div className="p-8 space-y-3">
    //                     <p className="text-3xl">{item.name}</p>
    //                     <p className="text-zinc-300 italic text-right">{item.date}</p>
    //                     <p className="">{item.title}</p>
    //                     <div className="flex justify-around pt-5">
    //                         <a href={item.detail} 
    //                             rel='noreferrer' target="_blank"
    //                             className="bg-teal-600 rounded-full">
    //                         <p className="text-slate-50 px-6 py-2 ">Plus Info</p>
    //                         </a>
    //                         <a href={item.buy} 
    //                             rel='noreferrer' target="_blank"
    //                             className="bg-[#ff9900] rounded-full ring-1 ring-slate-50 animate-pulse">
    //                         <p className="text-slate-50  px-6 py-2 ">Acheter</p>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <div className="mt-8 mr-2">
    //                     <img src={item.image} alt="" className='rounded-lg' />
    //                 </div>
    //             </div>
                
    //         </li>
         
    //     ))}
    //     </ul> */}
    // </section>
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 text-xl text-center text-slate-50">
        <div className="space-y-3">
          <h2 className="text-red-600 text-4xl py-4">Sonia David</h2>
          <p className="">David Bowie n’est pas mort, Robert Laffont, 2017</p>
          <p className="">Les petits succès sont un désastre, Robert Laffont, 2012</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-red-600 text-4xl py-4">Sonia Rachline</h2>
          <p className="">Claude Brouet, Journaliste de mode, éditions du Regard, 2022</p>
          <p className="">Lido, Plumes stass et Emotions, Flammarion 2021</p>
          <p className="">Karl Lagerfeld de A à Z, Gallimard, 2019</p>
          <p className="">C’est le Printemps la Martinière, 2015</p>
          <p className="">Vogue Covers, Ramsay, 2015</p>
          <p className="">Vogue à la Mer, Ramsay, 2008</p>
          <p className="">Le Monde de –M-, Le Seuil, 2005</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-red-600 text-4xl py-4">Ghostwriting</h2>
          <p className="">Mélancolique Rodéo - Jean Michel Jarre, Robert Laffont 2019</p>
        </div>
        <div className="space-y-3">
          <h2 className="text-red-600 text-4xl py-4">Collaborations</h2>
          <p className="">What Is Left Unspoken, Love, DelMonico Books & High Museum of Art, 2022</p>
          <p className="">Marithé+François Girbaud, La Martinière, 2012</p>
          <p className="">Maison Martin Margiela, éditions Rizzoli, 2009</p>
          <p className="">Vingt ans de système de mode, éditions IFM-Regard? 2008</p>
        </div>
      </div>
    </section>
  )
}

export default Publications;