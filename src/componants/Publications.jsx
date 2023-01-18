import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/book1.jpeg';
import img2 from '../assets/book2.jpeg';
import img3 from '../assets/book3.jpeg';
import img4 from '../assets/book4.jpeg';
import img5 from '../assets/book5.jpeg';
import img6 from '../assets/book6.jpeg';
import img7 from '../assets/book7.jpeg';
import img8 from '../assets/book8.jpeg';
import img9 from '../assets/book9.jpeg';
import img10 from '../assets/boo10.jpeg';
import img11 from '../assets/boo11.jpeg';
import img12 from '../assets/boo12.jpeg';
import img13 from '../assets/boo13.jpeg';
import img14 from '../assets/boo14.jpeg';
import img15 from '../assets/boo15.jpeg';

const books = [
  {
    id: 1,
    title: `David-Bowie-nest-pas-mort`,
    name: `David Bowie n’est pas mort`,
    editeur: `Robert Laffont`,
    datePublished: `2017`,
    resume: `Ma mère est morte. Mon père est mort. David Bowie est mort. Ce ne sont pas uniquement de mauvaises nouvelles. "
    À un an d'intervalle, Anne, Hélène et Émilie perdent leur mère, puis leur père. Entre les deux, David Bowie lui aussi disparaît. Dans l'enfance d'Hélène, la " soeur du milieu ", le chanteur a eu une importance toute particulière, dont le souvenir soudain ressurgit.`,
    image: img1 ,
    buyLink: `https://www.amazon.fr/David-Bowie-nest-pas-mort/dp/2221200284`,
  },
  {
    id: 2,
    title: `les-petits-succes-sont-un-desastre`,
    name: `Les petits succès sont un désastre`,
    editeur: `Robert Laffont`,
    datePublished: `05/01/2012`,
    resume: `Quand elle ne traduit pas (c’est son métier), le passe-temps favori de Rose est de « (se) faire des romans » sur tout ce qui l’entoure, de préférence avec la « Pap’ Team », ses amis et voisins qu’elle retrouve régulièrement au Papillon, leur bistrot de Montmartre. Dans ses tiroirs traînent des dizaines de débuts d’histoires, toutes inachevées. Le jour où elle reçoit 60 000 euros en gagnant un jeu-concours sur Internet, Rose décide de se lancer (enfin !) et de prendr...`,
    image: img2,
    buyLink: `https://www.amazon.fr/petits-succ%C3%A8s-sont-d%C3%A9sastre/dp/2221126017`,
  },
  {
    id: 3,
    title: `claude-Brouet-Journaliste-de-mode`,
    name: `Claude Brouet, Journaliste de mode`,
    editeur: `Regard`,
    datePublished: `22/09/2022`,
    resume: `Claude Brouet a consacré sa vie à la mode. Et la mode, elle, l'a depuis longtemps consacrée " grande Dame ", voire " papesse " de la profession. son parcours l'a conduite des salons Haute-Couture où travaillait sa mère, a directrice du style d'Hermès,...`,
    image: img3 ,
    buyLink: `https://www.amazon.fr/Claude-Brouet-Journaliste-Sonia-Rachline/dp/2841054160/ref=cm_cr_arp_d_product_top?ie=UTF8`,
  },
  {
    id: 4,
    title: `Lido-Plumes-stass-et-Emotions`,
    name: `Lido, Plumes stass et Emotions`,
    editeur: `Flammarion `,
    datePublished: `12/10/2021`,
    resume: `Glamour parisien et fascinante histoire : entrez dans la légende du Lido, le plus prestigieux des cabarets !`,
    image: img4,
    buyLink: `https://www.amazon.fr/Lido-Plumes-%C3%A9motions-Sonia-Rachline/dp/2080244493/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=220TSIDKGFKDY&keywords=lido%2C+plume+strass+et+emotions&qid=1674077481&s=books&sprefix=lido%2C+plumes+stass+et+emotions%2Cstripbooks%2C183&sr=1-1`,
  },
  {
    id: 5,
    title: `Karl-Lagerfeld-deA-à-Z`,
    name: `Karl Lagerfeld de A à Z`,
    editeur: `Gallimard`,
    datePublished: `26/09/2019`,
    resume: `C comme Chanel, E comme éventail, P comme publicité, Y comme Yves Saint Laurent... Sous la forme ludique d'un abécédaire, cet ouvrage brosse le portrait du créateur de génie qu'était Karl Lagerfeld.`,
    image: img5,
    buyLink: `https://www.amazon.fr/Karl-Lagerfeld-%C3%A0-Sonia-Rachline/dp/2742460721/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11TD2NYQPPIK4&keywords=Karl+Lagerfeld+de+A+%C3%A0+Z&qid=1674078051&s=books&sprefix=karl+lagerfeld+de+a+%C3%A0+z%2Cstripbooks%2C175&sr=1-1`,
  },
  {
    id: 6,
    title: ``,
    name: `C’est le Printemps la Martinière`,
    editeur: ``,
    datePublished: `2015`,
    resume: ``,
    image: img6,
    buyLink: ``,
  },
  {
    id: 7,
    title: `Vogue Covers`,
    name: `Vogue Covers`,
    editeur: `Regard`,
    datePublished: `2015`,
    resume: `Ramsay`,
    image: img7,
    buyLink: ``,
  },
  {
    id: 8,
    title: `Vogue à la Mer`,
    name: `Vogue à la Mer`,
    editeur: `Ramsay`,
    datePublished: `2008`,
    resume: ``,
    image: img8,
    buyLink: ``,
  },
  {
    id: 9,
    title: `Le Monde de –M-`,
    name: `Le Monde de –M-`,
    editeur: ` Le Seuil`,
    datePublished: `2005`,
    resume: ``,
    image: img9,
    buyLink: ``,
  },
  {
    id: 10,
    title: `Melissa - Marco Palmieri`,
    name: `Melissa - Marco Palmieri`,
    editeur: `Gallimard Jeunesse`,
    datePublished: `2010`,
    resume: ``,
    image: img10,
    buyLink: ``,
  },
  {
    id: 11,
    title: `Mélancolique Rodéo - Jean Michel Jarre`,
    name: `Mélancolique Rodéo - Jean Michel Jarre`,
    editeur: `Robert Laffont`,
    datePublished: `2019`,
    resume: ``,
    image: img11,
    buyLink: ``,
  },
  {
    id: 12,
    title: ``,
    name: `Collaborations-What Is Left Unspoken, Love`,
    editeur: `Collaborations: DelMonico Books & High Museum of Art`,
    datePublished: `2022`,
    resume: ``,
    image: img12,
    buyLink: ``,
  },
  {
    id: 13,
    title: `Collaborations-Marithé+François-Girbaud`,
    name: `Collaborations: Marithé+François Girbaud`,
    editeur: `La Martinière`,
    datePublished: `2012`,
    resume: ``,
    image: img13,
    buyLink: ``,
  },
  {
    id: 14,
    title: `Collaborations-Maison-Martin-Margiela`,
    name: `Collaborations: Maison Martin Margiela `,
    editeur: `Rizzoli`,
    datePublished: `2009`,
    resume: ``,
    image: img14,
    buyLink: ``,
  },
  {
    id: 15,
    title: `Collaborations-vingt-ans-de-systeme-de-mode`,
    name: `Collaborations: Vingt ans de système de mode`,
    editeur: `IFM-Regard`,
    datePublished: `2008`,
    resume: ``,
    image: img15,
    buyLink: ``,
  },

]


function Publications() {
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <section className="">
      {selectedBook ? (
        <div className="lg:flex p-8">
          <div className="flex flex-col justify-center items-center text-red-600 space-y-4 text-xl max-w-4xl">
            <h2 className="text-4xl">{selectedBook.name}</h2>
            <p className="">Éditeur: {selectedBook.editeur}</p>
            <p className="">Date de publication: {selectedBook.datePublished}</p>
            <p className="">Resume: {selectedBook.resume}</p>
            <a href={selectedBook.buyLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-6 py-2 shadow-lg bg-sky-900 rounded-full hover:animate-pulse">Buy now</a>
          </div>
          <div className="p-8">
            <img src={selectedBook.image} alt={selectedBook.name}
              className="rounded-xl"/>
          </div>
        </div>
      ) : (
        <div className="text-red-600">
          <h2 className="text-center text-4xl py-5">Publications</h2>
          <ul className='p-8 text-xl flex flex-col space-y-4'>
            {books.map(book => (
              <Link key={book.id}
                  onClick={() => setSelectedBook(book)}
                  to={`/publications/${book.title}`}>
                {book.name}
              </Link>
            ))}
          </ul>
        </div>
      )};
    </section>
    // <section className="">
    //   <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-xl text-center text-slate-50 p-10 md:p-20 lg:p-30">
    //     <div className="space-y-3 rotate-2 p-8">
    //       <h2 className="text-red-600 text-4xl py-4">Sonia David</h2>
    //       <Link to="/PublicationDetails/" className="">David Bowie n’est pas mort, Robert Laffont, 2017</Link>
    //       <p className="">Les petits succès sont un désastre, Robert Laffont, 2012</p>
    //     </div>
    //     <div className="space-y-3 -rotate-2 p-8">
    //       <h2 className="text-red-600 text-4xl py-4">Sonia Rachline</h2>
    //       <p className="">Claude Brouet, Journaliste de mode, éditions du Regard, 2022</p>
    //       <p className="">Lido, Plumes stass et Emotions, Flammarion 2021</p>
    //       <p className="">Karl Lagerfeld de A à Z, Gallimard, 2019</p>
    //       <p className="">C’est le Printemps la Martinière, 2015</p>
    //       <p className="">Vogue Covers, Ramsay, 2015</p>
    //       <p className="">Vogue à la Mer, Ramsay, 2008</p>
    //       <p className="">Le Monde de –M-, Le Seuil, 2005</p>
    //     </div>
    //     <div className="space-y-3 rotate-2 p-8">
    //       <h2 className="text-red-600 text-4xl py-4">Ghostwriting</h2>
    //       <p className="">Melissa - Marco Palmieri, Gallimard Jeunesse, 2010</p>
    //       <p className="">Mélancolique Rodéo - Jean Michel Jarre, Robert Laffont 2019</p>
    //     </div>
    //     <div className="space-y-3 -rotate-2 p-8">
    //       <h2 className="text-red-600 text-4xl py-4">Collaborations</h2>
    //       <p className="">What Is Left Unspoken, Love, DelMonico Books & High Museum of Art, 2022</p>
    //       <p className="">Marithé+François Girbaud, La Martinière, 2012</p>
    //       <p className="">Maison Martin Margiela, éditions Rizzoli, 2009</p>
    //       <p className="">Vingt ans de système de mode, éditions IFM-Regard? 2008</p>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Publications;