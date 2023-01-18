import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/book1.jpeg';
import img2 from '../assets/book2.jpeg';

const books = [
  {
    id: 1,
    title: `david-bowie-nest-pas-mort`,
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
  // {
  //   id: 3,
  //   title: `claude-brouet-journaliste-de-mode`,
  //   name: `Claude Brouet, Journaliste de mode`,
  //   editeur: `Regard`,
  //   datePublished: ``,
  //   resume: ``,
  //   image: ,
  //   buyLink: ``,
  // },
  // {
  //   id: 4,
  //   title: ``,
  //   name: ``,
  //   editeur: ``,
  //   datePublished: ``,
  //   resume: ``,
  //   image: ,
  //   buyLink: ``,
  // },
  // {
  //   id: 5,
  //   title: ``,
  //   name: ``,
  //   editeur: ``,
  //   datePublished: ``,
  //   resume: ``,
  //   image: ,
  //   buyLink: ``,
  // },
  // {
  //   id: 6,
  //   title: ``,
  //   name: ``,
  //   editeur: ``,
  //   datePublished: ``,
  //   resume: ``,
  //   image: ,
  //   buyLink: ``,
  // },

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