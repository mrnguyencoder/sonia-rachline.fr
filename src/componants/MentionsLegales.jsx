import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FiPlus } from 'react-icons/fi';

function MentionsLegales() {
  return (
    <section className="text-gray-100">
      <h2 className="text-center p-10 text-3xl">Mentions légales</h2>

            {/* Disclosure begin */}
            <div className="py-4 md:py-20">
              <div className='p-6 md:px-20 lg:px-30'>
                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>Informations légales</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p className="">Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l""Utilisateur", du site https://soniarachline.fr , ci-après le "Site", les présentes mentions légales.</p>
                  <p className="">La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.</p>
                  <p className="">Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl capitalize'>L'editeur</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p>L’édition et la direction de la publication du Site est assurée par Sonia RACHLINE, domiciliée 4, rue Lallier 75009 Paris, dont le numéro de téléphone est 0685421993,Siret : 49858433300021 APE : 741G et l'adresse e-mail srachine@orange.fr.</p>
                  <p className="">Le site Web est codé et développé par Van Duy NGUYEN,numéro de téléphone est 0782885224 siteweb: https://nguyencoder.com/, numero siren auto-entrepreneur:  </p>
                  <p>ci-après l'"Editeur".</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>L'hebergeur</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p>L'hébergeur du Site est la société Hostinger International Ltd., dont legal address, 61 Lordou Vironos st. 6023 Larnaca, the Republic of Cyprus , avec adresse mail de contact: fr@hostinger.com</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>Accès au site</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
                  <p>En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>Collecte des données</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                 <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>Propriété intellectuelle</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p>La structure générale ainsi que les logiciels, textes, images animées ou non, son savoir-faire et tous les autres éléments composant le site sont la propriété exclusive de SoniaRachline.fr .</p>
                  <p>Toute représentation totale ou partielle de ce site par quelque personne que ce soit, sans l'autorisation expresse de SoniaRachline.fr est interdite et constituerait une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.</p>
                  <p className="">Il en est de même des bases de données figurant, le cas échéant sur le site web qui sont protégées par les dispositions de la loi du 1er juillet 1998 portant transposition dans le Code de la propriété intellectuelle de la directive du 11 mars 1996 relative à la protection juridique des bases de données, et dont soniarachline.fr est producteur. Les marques des partenaires de soniarachline.fr, ainsi que les logos figurant sur le site sont des marques déposées.</p>
                  <p>Toute reproduction totale ou partielle de ces marques ou de ces logos effectués à partir des éléments du site sans l'autorisation expresse de soniarachline.fr est donc prohibée au sens du Code de la propriété intellectuelle.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-5 flex w-full justify-between rounded-t-xl bg-red-600 px-4 py-2 text-left text-sm font-medium text-gray-50 hover:bg-red-700">
                    <p className='text-xl md:text-2xl lg:text-3xl'>Droit applicable – Compétence juridictionnelle</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-gray-100`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-lg md:text-xl lg:text-2xl">
                  <p>Tout litige en relation avec l'utilisation du site soniarachline.fr est soumis au droit français. Le client reconnaît la compétence exclusive des tribunaux compétents de Paris.</p>
                  </Disclosure.Panel>
                </>

                  )}
                </Disclosure>

              </div>
            </div>
            {/* Disclosure finished */}

    </section>
  )
}

export default MentionsLegales