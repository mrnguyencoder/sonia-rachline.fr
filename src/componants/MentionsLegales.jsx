import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FiPlus } from 'react-icons/fi';

function MentionsLegales() {
  return (
    <section className="text-slate-100 h-screen">
      <h2 className="text-center p-10 ">Mentions légales</h2>

            {/* Disclosure begin */}
            <div className="shadow-sm rounded">
              <div className='rounded-2xl p-4'>
                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>1. Informations légales</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  <p className="">Conformément aux dispositions des articles 6-III et 19 de la Loi pour la Confiance dans l'Économie Numérique, nous vous informons que :</p>
                  <p className="">Le présent site web est édité par SONIA RACHLINE , dont le siège est situé 4, rue Lallier 75009 Paris - 0685421993 - srachine@orange.fr , Siret : 49858433300021 APE : 741G</p>
                  <p className="">Le responsable de la publication du site web est : SONIA RACHLINE</p>
                  <p className="">Développé par
                    <a
                      href="https://nguyencoder.com/"
                      rel='noreferrer' target="_blank"
                      className="text-[#61DBFB] hover:text-[#3c873a] pl-3">
                      nguyendev
                    </a> 
                  </p>
                  <p className="">L'hébergeur est : Hostinger International Ltd. a Cyprus private limited company, legal address, 61 Lordou Vironos st. 6023 Larnaca, the Republic of Cyprus</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>2. Limitation de responsabilité</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  <p>Le client reconnaît avoir pris connaissance des présentes conditions d'utilisation et s'engage à les respecter. </p>
                  <p>Le client du site internet soniarachline.fr reconnaît avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu'elle est en parfait état de fonctionnement.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>3. Cookies</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  <p>Le client est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation. Le cookie est un bloc de données qui ne permet pas d'identifier les utilisateurs mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet d'informer de la présence de cookie et éventuellement, de la refuser.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>4. Propriété intellectuelle</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                  <p>La structure générale ainsi que les logiciels, textes, images animées ou non, son savoir-faire et tous les autres éléments composant le site sont la propriété exclusive de SoniaRachline.fr .</p>
                  <p>Toute représentation totale ou partielle de ce site par quelque personne que ce soit, sans l'autorisation expresse de SoniaRachline.fr est interdite et constituerait une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.</p>
                  <p className="">Il en est de même des bases de données figurant, le cas échéant sur le site web qui sont protégées par les dispositions de la loi du 1er juillet 1998 portant transposition dans le Code de la propriété intellectuelle de la directive du 11 mars 1996 relative à la protection juridique des bases de données, et dont SoniaRachline.fr est producteur. Les marques des partenaires de SoniaRachline.fr, ainsi que les logos figurant sur le site sont des marques déposées.</p>
                  <p>Toute reproduction totale ou partielle de ces marques ou de ces logos effectués à partir des éléments du site sans l'autorisation expresse de SoniaRachline.fr est donc prohibée au sens du Code de la propriété intellectuelle.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>


                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>5. Hyperliens</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
                 <p>soniarachline.fr ne saurait être responsable de l'accès par les utilisateurs via les liens hypertextes mis en place dans le cadre du site internet en direction d'autres ressources présentes sur le réseau.</p>
                  </Disclosure.Panel>
                </>
                  )}
                </Disclosure>

                <Disclosure>
                {({ open }) => (
                <>
                  <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-green-700 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <p className='text-base lg:text-xl'>6. Droit applicable – Compétence juridictionnelle</p>
                    <FiPlus className={`${
                          open ? 'rotate-45 transform' : ''
                        } text-3xl text-blue-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-slate-50 p-4 text-sm lg:text-xl">
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