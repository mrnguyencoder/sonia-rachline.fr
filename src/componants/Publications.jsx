import React, { useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
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
    id: 2,
    title: `les-petits-succes-sont-un-desastre`,
    name: `Les petits succès sont un désastre`,
    editeur: `Robert Laffont`,
    datePublished: `2012`,
    resume: `Quand elle ne traduit pas (c'est son métier), le passe-temps favori de Rose est de " (se) faire des romans " sur tout ce qui l'entoure, de préférence avec la " Pap' Team ", ses amis et voisins qu'elle retrouve régulièrement au Papillon, leur bistrot de Montmartre. Dans ses tiroirs traînent des dizaines de débuts d'histoires, toutes inachevées. Le jour où elle reçoit 60 000 euros en gagnant un jeu-concours sur Internet, Rose décide de se lancer (enfin !) et de prendre une année sabbatique pour consacrer à ses amis son premier vrai roman. Mais le livre, censé raconter la douceur de l'amitié et rendre hommage au plaisir de ce quotidien à la fois ordinaire et essentiel, aura au contraire pour conséquence de l'interrompre définitivement.`,
    image: img2,
    buyLink: `https://livre.fnac.com/a3733188/Sonia-David-Les-Petits-succes-sont-un-desastre#omnsearchpos=1`,
  },
  {
    id: 1,
    title: `David-Bowie-nest-pas-mort`,
    name: `David Bowie n’est pas mort`,
    editeur: `Robert Laffont`,
    datePublished: `2017`,
    resume: `"Ma mère est morte. Mon père est mort. David Bowie est mort. Ce ne sont pas uniquement de mauvaises nouvelles."
    À un an d'intervalle, Anne, Hélène et Émilie perdent leur mère, puis leur père. Entre les deux, David Bowie lui aussi disparaît. Dans l'enfance d'Hélène, la " soeur du milieu ", le chanteur a eu une importance toute particulière, dont le souvenir soudain ressurgit. Alors, elle commence à raconter... Sur les thèmes inépuisables de la force et de la complexité des liens familiaux, de la place de chaque enfant dans sa fratrie, voici un roman d'une déconcertante et magnifique sincérité.`,
    image: img1 ,
    buyLink: `https://livre.fnac.com/a10624010/Sonia-David-David-Bowie-n-est-pas-mort#omnsearchpos=3`,
  },
  {
    id: 9,
    title: `Le-Monde-de–M-`,
    name: `Le Monde de –M-`,
    editeur: `Le Seuil`,
    datePublished: `2005`,
    resume: `Derrière la lettre « M » se cache le petit-fils d’Andrée Chedid, le fils de Louis Chedid, un musicien, un chanteur, un artiste. Mais aussi l’une des vedettes les plus importantes de la chanson française d’aujourd’hui qui vend des centaines de milliers de disques et qui remplit les salles de concert...sans céder à la vulgarité du show bizz ! Le Monde de M c’est la lente maturité d’un artiste - ses influences, ses amitiés.`,
    image: img9,
    buyLink: `https://www.babelio.com/livres/David-Le-monde-de-M/48907`,
  },
  {
    id: 8,
    title: `Vogue-à-la-Mer`,
    name: `Vogue à la Mer`,
    editeur: `Ramsay`,
    datePublished: `2008`,
    resume: `A l'occasion du 4ème festival international de la photographie de mer organisé à Vannes du 18 avril au 18 mai 2008, Vogue plonge dans ses archives pour donner à voir les clichés des plus grands photographes de mode inspirés par le bord de mer pour le magazine : George Hoyningen-Huene, Peter Lindbergh, Henry Clarke,...`,
    image: img8,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Vogue+%C3%A0+la+Mer%2C+2008&sft=1&sa=0`,
  },
  {
    id: 7,
    title: `Vogue-Covers`,
    name: `Vogue Covers`,
    editeur: `Ramsay`,
    datePublished: `2015`,
    resume: ``,
    image: img7,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Vogue+Covers%2C+2015&sft=1&sa=0`,
  },
  {
    id: 6,
    title: `Cest-le-Printemps`,
    name: `C’est le Printemps`,
    editeur: `La Martinière`,
    datePublished: `2015`,
    resume: `Coffret 3 ouvrages : Du grand art, Un modèle de mode, Un mode d'avance.
    Icône du grand magasin parisien et incarnation d’un luxe et d’une modernité à la française, le Printemps constitue depuis des générations un haut lieu de la mode, de la beauté et du style.`,
    image: img6,
    buyLink: `https://livre.fnac.com/a8858387/Sonia-Rachline-C-est-le-Printemps-De-1865-a-demain-l-histoire-du-grand-magasin-parisien#omnsearchpos=6`,
  },
  {
    id: 5,
    title: `Karl-Lagerfeld-deA-à-Z`,
    name: `Karl Lagerfeld de A à Z`,
    editeur: `Gallimard`,
    datePublished: `2019`,
    resume: `C comme Chanel, E comme éventail, P comme publicité, Y comme Yves Saint Laurent... Sous la forme ludique d'un abécédaire, cet ouvrage brosse le portrait du créateur de génie qu'était Karl Lagerfeld.`,
    image: img5,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Karl+Lagerfeld+de+A+%C3%A0+Z%2C+2019&sft=1&sa=0`,
  },
  {
    id: 4,
    title: `Lido-Plumes-stass-et-Emotions`,
    name: `Lido, Plumes stass et Emotions`,
    editeur: `Flammarion `,
    datePublished: `2021`,
    resume: `Glamour parisien et fascinante histoire : entrez dans la légende du Lido, le plus prestigieux des cabarets !`,
    image: img4,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Lido%2C+Plumes+stass+et+Emotions%2C+2021&sft=1&sa=0`,
  },
  {
    id: 3,
    title: `Claude-Brouet-Journaliste-de-mode`,
    name: `Claude Brouet, Journaliste de mode`,
    editeur: `Regard`,
    datePublished: `2022`,
    resume: `Claude Brouet a consacré sa vie à la mode. Et la mode, elle, l'a depuis longtemps consacrée " grande Dame ", voire " papesse " de la profession. Le fait est que son exceptionnel parcours l'a conduite des salons Haute-Couture (Chanel, Elsa Schiaparelli, Fath) où travaillait sa mère, jusqu'au rôle de directrice du style d'Hermès, en passant par la direction mode des deux plus grands magazines féminins de l'après-guerre, Elle puis Marie-Claire.
    Désireuse de transmettre, elle fait revivre ici un demi-siècle de style, époque exceptionnelle qui vit démarrer, puis s'affirmer les plus grands créateurs français, exploser le prêt-à-porter et révolutionner le vêtement comme l'allure des femmes. Un temps également où la presse féminine, au faîte de son indépendance tenait un rôle majeur et quasi exclusif en terme d'information et de prescription.
    Connue pour son immense culture du vêtement, reconnue pour son goût très sûr en matière d'élégance et d'épure, Claude Brouet évoque à coup de souvenirs, d'anecdotes, d'images fortes, de réflexions, de gestes choisis, de mots toujours précis et d'un esprit formidablement vivace cinquante années de chic à Paris, côté papier glacé aussi bien que côté coulisses.
    Enthousiasmé par ce projet, Jean-Paul Gaultier, l'un de ses " fans ", a quant à lui accepté d'en rédiger la préface.`,
    image: img3 ,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Claude+Brouet%2C+Journaliste+de+mode%2C+2022&sft=1&sa=0`,
  },

 




  {
    id: 10,
    title: `Melissa-Marco-Palmieri`,
    name: `Melissa - Marco Palmieri`,
    editeur: `Gallimard Jeunesse`,
    datePublished: `2010`,
    resume: `Melissa, une petite chienne, raconte son quotidien et ses expériences à l'hôtel de la gazelle d'Or, au Maroc, où elle a vécu la grande majorité de sa vie. Le ton est simple, direct. C'est l'innocence pleine de bon sens du regard de Melissa qui donne le ton (faussement) naïf de l'ouvrage et doit inciter le lecteur à s'interroger sur le monde tel qu'il est...`,
    image: img10,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Melissa+-+Marco+Palmieri%2C+2010&sft=1&sa=0`,
  },
  {
    id: 11,
    title: `Mélancolique-Rodéo-Jean-Michel-Jarre`,
    name: `Mélancolique Rodéo - Jean Michel Jarre`,
    editeur: `Robert Laffont`,
    datePublished: `2019`,
    resume: `De Jean-Michel Jarre on connaît le musicien, pionnier de l'électro à l'influence majeure sur la jeune génération, et inventeur de concerts-spectacles devant des foules records. Mais on ne connaît pas le cheminement du petit garçon lyonnais qui bricolait des magnétophones devenu star planétaire. La vie de ce fils d'une grande résistante et d'un père multi-oscarisé est un roman qu'aucun romancier n'aurait pu imaginer : sans cesse bousculée par l'inattendu. À l'image de ces Mémoires...`,
    image: img11,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=M%C3%A9lancolique+Rod%C3%A9o+-+Jean+Michel+Jarre%2C+2019&sft=1&sa=0`,
  },

  
  {
    id: 15,
    title: `Collaborations-vingt-ans-de-systeme-de-mode`,
    name: `Vingt ans de système de mode`,
    editeur: `IFM-Regard`,
    datePublished: `2008`,
    resume: `À l'occasion de ses vingt ans, l'Institut Français de la Mode fait le point sur les évolutions d'un système de la mode riche et complexe, dont les stratégies et enjeux sont autant de modèles pour l'ensemble des industries de création. Ecrit par l'ensemble du corps professoral et des experts de l'Ifm, cet ouvrage comprend cinq chapitres principaux : la mode et la création, la marque et l'image, la distribution et la vie du point de vente, la mondialisation du secteur, et enfin, les transversalités et croisements entre mode, art, design, parfum, gastronomie ou art de vivre.`,
    image: img15,
    buyLink: `https://livre.fnac.com/a2407787/Collectif-Mode-Fashion-20-ans-de-systeme-de-mode-bilingue`,
  },
  {
    id: 14,
    title: `Collaborations-Maison-Martin-Margiela`,
    name: `Maison Martin Margiela`,
    editeur: `Rizzoli`,
    datePublished: `2009`,
    resume: `Graduating from Antwerp’s Royal Academy of Fine Arts in the 1980s, Martin Margiela (and his contemporaries in the Antwerp Six) transformed global fashion with his aggressive restatement of traditional fashion design and a polemical approach to luxury trends. Working first with the house of Gaultier, Margiela absorbed the radical design of Japanese deconstruction, making it wholly his own with the founding of his own label in 1988...`,
    image: img14,
    buyLink: `https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=Maison+Martin+Margiela%2C+2009&sft=1&sa=0`,
  },
  {
    id: 13,
    title: `Collaborations-Marithé+François-Girbaud`,
    name: `Marithé+François Girbaud`,
    editeur: `La Martinière`,
    datePublished: `2012`,
    resume: `Reconnus comme les révolutionnaires du jean, Marithé et François Girbaud n'ont eu de cesse de réinventer ce vêtement, depuis leurs débuts dans les années 1960, jusqu'à aujourd'hui. Dès leur rencontre, Marithé Bachellerie et François Girbaud ont l'idée de laver et relaver jusqu'à l'usure de la fibre les jeans dans la laverie Saint-Jean à Saint-Germain-des-Près, donnant ainsi naissance à la technique du délavage. Forts de ce succès, Marithé et François Girbaud continuent à percer dans cette voie mettant de côté leurs rêves...`,
    image: img13,
    buyLink: `https://livre.fnac.com/a4615101/Farid-Chenoune-Marithe-et-Francois-Girbaud`,
  },
  {
    id: 12,
    title: `Collaborations-What-Is-Left-Unspoken-Love`,
    name: `What Is Left Unspoken, Love`,
    editeur: `DelMonico Books & High Museum of Art`,
    datePublished: `2022`,
    resume: `This volume features more than 35 diverse and multigenerational artists, exploring themes that grapple with some of the most firmly rooted concepts of love, including the union of two people and their co-belonging in a shared destiny, the ties that bind family and friends, and loving practice that comes from action, intention and commitment to promote the worth and well-being of community.`,
    image: img12,
    buyLink: `https://www.artbook.com/9781636810737.html`,
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
        <div className="lg:flex p-8 min-h-screen">
          <div className="flex flex-col justify-center items-center text-red-600 space-y-4 text-xl max-w-3xl">
            <h2 className="text-4xl">{selectedBook.name}</h2>
            <p className="">Éditeur: {selectedBook.editeur}</p>
            <p className="">Date de publication: {selectedBook.datePublished}</p>
            <p className="md:px-6 lg:text-2xl">{selectedBook.resume}</p>
            <div className="md:flex md:space-x-5 space-y-6 md:space-y-0 justify-center items-center">
              <button onClick={() => setSelectedBook(null)} className="flex justify-center items-center bg-sky-900 rounded-full px-4 py-2"><ArrowLeftCircleIcon className="h-10 text-slate-50"/> Retour à la liste des livres</button>
              <a href={selectedBook.buyLink} target="_blank" rel="noreferrer" className="flex justify-center items-center px-6 py-2 bg-yellow-500 rounded-full hover:animate-pulse">Lien d'achat du livre <ArrowRightCircleIcon className="h-10 text-teal-600 animate-spin" /> </a>
            </div>
            
          </div>
          <div className="p-8 flex justify-center items-center">
            <img src={selectedBook.image} alt={selectedBook.name}
              className="rounded-xl max-h-[80%] w-full"/>
          </div>
        </div>
      ) : (
        <div className="text-red-600">
          <h2 className="text-center tracking-widest text-4xl lg:text-6xl py-10">Publications</h2>
          {Object.values(groupedBooks).map(group => (
          <div className=''>
            <h3 className='text-3xl md:text-4xl text-center'>{group.author.name}</h3>
            <div className="flex justify-center items-center text-xl">
              <ul className='p-8 space-y-2'>
                {group.books.map(book => (
                  <li key={book.id}>
                    <Link
                      onClick={() => setSelectedBook(book)}
                      to={`/publications/${book.title}`}
                      className="hover:border-b hover:scale-105 hover:text-red-500 md:flex justify-center items-center">
                        {book.name}, {book.datePublished}
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