import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/book1.png';
import img2 from '../assets/book2.jpeg';
import img3 from '../assets/book3.jpeg';
import img4 from '../assets/book4.jpeg';
import img5 from '../assets/book5.jpeg';
import img6 from '../assets/book6.jpeg';
import img7 from '../assets/book7.jpeg';
import img8 from '../assets/book8.jpeg';
import img9 from '../assets/book9.jpeg';
import img10 from '../assets/book10.jpeg';
import img11 from '../assets/book11.jpeg';
import img12 from '../assets/book12.jpeg';
import img13 from '../assets/book13.jpeg';
import img14 from '../assets/book14.jpeg';
import img15 from '../assets/book15.jpeg';

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
    title: `Claude-Brouet-Journaliste-de-mode`,
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
    title: `Cest-le-Printemps`,
    name: `C’est le Printemps`,
    editeur: `La Martinière`,
    datePublished: `03/12/2015`,
    resume: `Coffret 3 ouvrages : Du grand art, Un modèle de mode, Un mode d'avance.
    Icône du grand magasin parisien et incarnation d’un luxe et d’une modernité à la française, le Printemps constitue depuis des générations un haut lieu de la mode, de la beauté et du style.`,
    image: img6,
    buyLink: `https://www.editionsdelamartiniere.fr/livres/cest-le-printemps/`,
  },
  {
    id: 7,
    title: `Vogue-Covers`,
    name: `Vogue Covers`,
    editeur: `Ramsay`,
    datePublished: `20/09/2015`,
    resume: ``,
    image: img7,
    buyLink: `https://www.lebateaulivre.fr/livre/8636389-vogue-covers-sonia-rachline-ramsay`,
  },
  {
    id: 8,
    title: `Vogue-à-la-Mer`,
    name: `Vogue à la Mer`,
    editeur: `Ramsay`,
    datePublished: `10/04/2008`,
    resume: `A l'occasion du 4ème festival international de la photographie de mer organisé à Vannes du 18 avril au 18 mai 2008, Vogue plonge dans ses archives pour donner à voir les clichés des plus grands photographes de mode inspirés par le bord de mer pour le magazine : George Hoyningen-Huene, Peter Lindbergh, Henry Clarke,...`,
    image: img8,
    buyLink: `https://www.amazon.fr/Vogue-%C3%A0-Mer-Collectif/dp/2841149412`,
  },
  {
    id: 9,
    title: `Le-Monde-de–M-`,
    name: `Le Monde de –M-`,
    editeur: `Le Seuil`,
    datePublished: `21/10/2005`,
    resume: `Derrière la lettre « M » se cache le petit-fils d’Andrée Chedid, le fils de Louis Chedid, un musicien, un chanteur, un artiste. Mais aussi l’une des vedettes les plus importantes de la chanson française d’aujourd’hui qui vend des centaines de milliers de disques et qui remplit les salles de concert...sans céder à la vulgarité du show bizz ! Le Monde de M c’est la lente maturité d’un artiste - ses influences, ses amitiés.`,
    image: img9,
    buyLink: `https://www.babelio.com/livres/David-Le-monde-de-M/48907`,
  },
  {
    id: 10,
    title: `Melissa-Marco-Palmieri`,
    name: `Melissa - Marco Palmieri`,
    editeur: `Gallimard Jeunesse`,
    datePublished: `16/09/2010`,
    resume: `Melissa, une petite chienne, raconte son quotidien et ses expériences à l'hôtel de la gazelle d'Or, au Maroc, où elle a vécu la grande majorité de sa vie. Le ton est simple, direct. C'est l'innocence pleine de bon sens du regard de Melissa qui donne le ton (faussement) naïf de l'ouvrage et doit inciter le lecteur à s'interroger sur le monde tel qu'il est...`,
    image: img10,
    buyLink: `https://www.amazon.fr/M%C3%A9lissa-Marco-Palmieri/dp/2070634035/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VOGE3CZO6CKK&keywords=Melissa+-+Marco+Palmieri&qid=1674129633&s=books&sprefix=melissa+-+marco+palmieri%2Cstripbooks%2C200&sr=1-1`,
  },
  {
    id: 11,
    title: `Mélancolique-Rodéo-Jean-Michel-Jarre`,
    name: `Mélancolique Rodéo - Jean Michel Jarre`,
    editeur: `Robert Laffont`,
    datePublished: `03/10/2019`,
    resume: `De Jean-Michel Jarre on connaît le musicien, pionnier de l'électro à l'influence majeure sur la jeune génération, et inventeur de concerts-spectacles devant des foules records. Mais on ne connaît pas le cheminement du petit garçon lyonnais qui bricolait des magnétophones devenu star planétaire. La vie de ce fils d'une grande résistante et d'un père multi-oscarisé est un roman qu'aucun romancier n'aurait pu imaginer : sans cesse bousculée par l'inattendu. À l'image de ces Mémoires...`,
    image: img11,
    buyLink: `https://www.amazon.fr/M%C3%A9lancolique-Rod%C3%A9o-Jean-Michel-JARRE/dp/2221239334/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H2CN3VSCOSZ9&keywords=M%C3%A9lancolique+Rod%C3%A9o+-+Jean+Michel+Jarre&qid=1674129751&s=books&sprefix=m%C3%A9lancolique+rod%C3%A9o+-+jean+michel+jarre%2Cstripbooks%2C103&sr=1-1`,
  },
  {
    id: 12,
    title: `Collaborations-What-Is-Left-Unspoken-Love`,
    name: `What Is Left Unspoken, Love`,
    editeur: `DelMonico Books & High Museum of Art`,
    datePublished: `06/07/2022`,
    resume: `This volume features more than 35 diverse and multigenerational artists, exploring themes that grapple with some of the most firmly rooted concepts of love, including the union of two people and their co-belonging in a shared destiny, the ties that bind family and friends, and loving practice that comes from action, intention and commitment to promote the worth and well-being of community.`,
    image: img12,
    buyLink: `https://www.artbook.com/9781636810737.html`,
  },
  {
    id: 13,
    title: `Collaborations-Marithé+François-Girbaud`,
    name: `Marithé+François Girbaud`,
    editeur: `La Martinière`,
    datePublished: `08/11/2012`,
    resume: `Reconnus comme les révolutionnaires du jean, Marithé et François Girbaud n ont eu de cesse deréinventer ce vêtement, depuis leurs débuts dans les années 1960, jusqu à aujourd hui. Dès leurrencontre, Marithé Bachellerie et François Girbaud ont l idée de laver et relaver jusqu à l usure de lafibre les jeans dans la laverie Saint-Jean à Saint-Germain-des-Prés,...`,
    image: img13,
    buyLink: `https://www.amazon.fr/Marith%C3%A9-Fran%C3%A7ois-Girbaud-pierre-lumi%C3%A8re/dp/2732454885/ref=sr_1_13?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1RSNS2M1GHPOR&keywords=sonia+rachline&qid=1674128712&s=books&sprefix=sonia+rachline%2Cstripbooks%2C142&sr=1-13`,
  },
  {
    id: 14,
    title: `Collaborations-Maison-Martin-Margiela`,
    name: `Maison Martin Margiela`,
    editeur: `Rizzoli`,
    datePublished: `01/10/2009`,
    resume: `Graduating from Antwerp’s Royal Academy of Fine Arts in the 1980s, Martin Margiela (and his contemporaries in the Antwerp Six) transformed global fashion with his aggressive restatement of traditional fashion design and a polemical approach to luxury trends. Working first with the house of Gaultier, Margiela absorbed the radical design of Japanese deconstruction, making it wholly his own with the founding of his own label in 1988...`,
    image: img14,
    buyLink: `https://www.amazon.fr/Maison-Martin-Margiela/dp/0847831884b`,
  },
  {
    id: 15,
    title: `Collaborations-vingt-ans-de-systeme-de-mode`,
    name: `Vingt ans de système de mode`,
    editeur: `IFM-Regard`,
    datePublished: `04/12/2008`,
    resume: `À l'occasion de ses vingt ans, l'Institut Français de la Mode fait le point sur les évolutions d'un système de la mode riche et complexe, dont les stratégies et enjeux sont autant de modèles pour l'ensemble des industries de création. Ecrit par l'ensemble du corps professoral et des experts de l'Ifm, cet ouvrage comprend cinq chapitres principaux : la mode et la création, la marque et l'image, la distribution et la vie du point de vente, la mondialisation du secteur, et enfin, les transversalités et croisements entre mode, art, design, parfum, gastronomie ou art de vivre.`,
    image: img15,
    buyLink: `https://www.amazon.fr/Mode-Fashion-syst%C3%A8me-mode-bilingue/dp/2914863187`,
  },

]

const authors = [
  {
    id: 1,
    name: "Sonia David",
    bookIds: [1, 2]
  },
  {
    id: 2,
    name: "Sonia Rachline",
    bookIds: [3, 4, 5, 6, 7, 8, 9]
  },
  {
    id: 3,
    name: "Ghostwriting",
    bookIds: [10, 11]
  },
  {
    id: 4,
    name: "Collaborations",
    bookIds: [12, 13, 14, 15]
  },
]


function Publications() {
  const [selectedBook, setSelectedBook] = useState(null);
  const groupedBooks = books.reduce((acc, book) => {
    const author = authors.find(author => author.bookIds.includes(book.id));
    if (!acc[author.id]) {
        acc[author.id] = {
            author: author,
            books: [book]
        }
    } else {
        acc[author.id].books.push(book);
    }
    return acc;
}, {});

  return (
    <section className="">
      {selectedBook ? (
        <div className="lg:flex p-8">
          <div className="flex flex-col justify-center items-center text-red-600 space-y-4 text-xl max-w-3xl">
            <h2 className="text-4xl">{selectedBook.name}</h2>
            <p className="">Éditeur: {selectedBook.editeur}</p>
            <p className="">Date de publication: {selectedBook.datePublished}</p>
            <p className="px-6">Resume: {selectedBook.resume}</p>
            <div className="flex space-x-5">
              <button onClick={() => setSelectedBook(null)} className="">Retour à la liste des livres</button>
              <a href={selectedBook.buyLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-6 py-2 shadow-lg bg-sky-900 rounded-full hover:animate-pulse">Lien d'achat du livre</a>
            </div>
            
          </div>
          <div className="p-8 flex justify-center items-center">
            <img src={selectedBook.image} alt={selectedBook.name}
              className="rounded-xl h-[80%]"/>
          </div>
        </div>
      ) : (
        <div className="text-red-600">
          <h2 className="text-center tracking-widest text-4xl py-10">Publications</h2>
          {Object.values(groupedBooks).map(group => (
          <div className=''>
            <h3 className='text-3xl text-center'>{group.author.name}</h3>
            <div className="flex justify-center items-center text-xl">
              <ul className='p-8 grid md:grid-cols-2 gap-y-2 gap-x-20 lg:gap-x-32'>
                {group.books.map(book => (
                  <li key={book.id}>
                    <Link
                      onClick={() => setSelectedBook(book)}
                      to={`/publications/${book.title}`}
                      className="hover:border-b">
                        {book.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
      )};
    </section>
  )
}

export default Publications;