import React from 'react';
import { Link } from 'react-router-dom';



function Publications() {

  return (
    <section className="">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-xl text-center text-slate-50 p-10 md:p-20 lg:p-30">
        <div className="space-y-3 rotate-2 p-8">
          <h2 className="text-red-600 text-4xl py-4">Sonia David</h2>
          <Link to="/PublicationDetails/" className="">David Bowie n’est pas mort, Robert Laffont, 2017</Link>
          <p className="">Les petits succès sont un désastre, Robert Laffont, 2012</p>
        </div>
        <div className="space-y-3 -rotate-2 p-8">
          <h2 className="text-red-600 text-4xl py-4">Sonia Rachline</h2>
          <p className="">Claude Brouet, Journaliste de mode, éditions du Regard, 2022</p>
          <p className="">Lido, Plumes stass et Emotions, Flammarion 2021</p>
          <p className="">Karl Lagerfeld de A à Z, Gallimard, 2019</p>
          <p className="">C’est le Printemps la Martinière, 2015</p>
          <p className="">Vogue Covers, Ramsay, 2015</p>
          <p className="">Vogue à la Mer, Ramsay, 2008</p>
          <p className="">Le Monde de –M-, Le Seuil, 2005</p>
        </div>
        <div className="space-y-3 rotate-2 p-8">
          <h2 className="text-red-600 text-4xl py-4">Ghostwriting</h2>
          <p className="">Melissa - Marco Palmieri, Gallimard Jeunesse, 2010</p>
          <p className="">Mélancolique Rodéo - Jean Michel Jarre, Robert Laffont 2019</p>
        </div>
        <div className="space-y-3 -rotate-2 p-8">
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