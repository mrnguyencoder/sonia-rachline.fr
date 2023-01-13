import React from 'react';


function PublicationDetails() {
    detail = [
        {
            name: `David Bowie n’est pas mort`,
            editeur: `Robert Laffont`,
            resume: `" Ma mère est morte. Mon père est mort. David Bowie est mort. Ce ne sont pas uniquement de mauvaises nouvelles. "
            À un an d'intervalle, Anne, Hélène et Émilie perdent leur mère, puis leur père. Entre les deux, David Bowie lui aussi disparaît. Dans l'enfance d'Hélène, la " soeur du milieu ", le chanteur a eu une importance toute particulière, dont le souvenir soudain ressurgit.`,
            img: boob1,
        },

    ]
  return (
    <section>
        <ul className="">
            {detail.map((item) => (
                <li key={item.name} className="">
                    <h3 className="">{item.name}</h3>
                    <p className="">{item.editeur}</p>
                    <p className="">{item.resume}</p>
                    <img src={item.img} alt="" />
                </li>
            ))}
        </ul>
    </section>
  )
}

export default PublicationDetails