import React from 'react';
import book1 from '../assets/book1.jpeg';


function PublicationDetails() {
    const detail = [
        {
            name: `David Bowie n’est pas mort`,
            editeur: `Robert Laffont`,
            resume: `" Ma mère est morte. Mon père est mort. David Bowie est mort. Ce ne sont pas uniquement de mauvaises nouvelles. "
            À un an d'intervalle, Anne, Hélène et Émilie perdent leur mère, puis leur père. Entre les deux, David Bowie lui aussi disparaît. Dans l'enfance d'Hélène, la " soeur du milieu ", le chanteur a eu une importance toute particulière, dont le souvenir soudain ressurgit.`,
            img: book1,
        },

    ]
  return (
    <section>
        <ul className="">
            {detail.map((item) => (
                <li key={item.name} className="text-red-600 text-center p-10">
                    <h3 className="text-3xl">{item.name}</h3>
                    <p className="">{item.editeur}</p>
                    <p className="text-xl">{item.resume}</p>
                    <a
                        href="https://github.com/mrnguyencoder/unemaintendue-conseils.fr"
                        rel='noreferrer' target="_blank"
                        className="py-2 px-4 border-2 rounded-2xl text-xl my-6"
                        >
                        Acheter en ligne
                    </a>
                    <img src={item.img} alt="" className='p-8 rounded-2xl' />
                </li>
            ))}
        </ul>
    </section>
  )
}

export default PublicationDetails