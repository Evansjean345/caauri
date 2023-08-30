import React from "react";
import Footer from "./Footer";

export default function Three() {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center text-center text-8xl my-32 flex-col items-center">
        <p>
          <span>Les</span>&nbsp;<span>travaux</span>&nbsp;
          <span>que nous avons</span>
        </p>
        <p>
          <span>réalisés</span>&nbsp;<span>jusqu'à présent</span>
        </p>
      </div>
      {/* button section */}
      <div className="pl-24 mt-24">
        <span className="text-3xl pl-2">Catégories</span>
        <ul className="flex space-x-6 mt-3 list-outside">
          <li>
            <div className="bg-black font-medium text-white w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Tous les projets
            </div>
          </li>
          <li>
            <div className="border-black font-medium text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Stratégie
            </div>
          </li>
          <li>
            <div className="border-black font-medium text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Branding
            </div>
          </li>
          <li>
            <div className="border-black font-medium text-black border w-[170px] flex items-center justify-center h-[60px] rounded-full text-xl">
              Digital
            </div>
          </li>
        </ul>
      </div>
      {/* button presentation */}
      <div className="pl-24 mt-28">
        <span className="text-5xl pl-2">TOUTES LES OEUVRES</span>
      </div>
      <br />
      <div className="px-24">
        <div className="border border-black"></div>
      </div>
      <div className="w-full px-24 flex">
        <div className="w-1/2 flex flex-col mt-8 bg-red-50">
          <ul className="flex space-x-6 mt-3 list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="mt-10 text-4xl font-semibold">Lorem ipsum</span>

          <p className="mt-12 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc flex flex-col space-y-1 list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="flex mt-20 justify-start space-x-2">
            <span className="text-3xl">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 mt-8">
          <img src="/images/img_tec.png" alt="" />
        </div>
      </div>
      {/*2 */}
      <div className="px-24 mt-20">
        <div className="border border-black"></div>
      </div>
      <div className="w-full px-24 flex">
        <div className="w-1/2 flex flex-col mt-8 bg-red-50">
          <ul className="flex space-x-6 mt-3 list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="mt-10 text-4xl font-semibold">Lorem ipsum</span>

          <p className="mt-12 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc flex flex-col space-y-1 list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="flex mt-20 justify-start space-x-2">
            <span className="text-3xl">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 mt-8">
          <img src="/images/img_tec.png" alt="" />
        </div>
      </div>
      {/*3 */}
      <div className="px-24 mt-20">
        <div className="border border-black"></div>
      </div>
      <div className="w-full px-24 flex">
        <div className="w-1/2 flex flex-col mt-8 bg-red-50">
          <ul className="flex space-x-6 mt-3 list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="mt-10 text-4xl font-semibold">Lorem ipsum</span>

          <p className="mt-12 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc flex flex-col space-y-1 list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="flex mt-20 justify-start space-x-2">
            <span className="text-3xl">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 mt-8">
          <img src="/images/img_tec.png" alt="" />
        </div>
      </div>
      {/*4 */}
      <div className="px-24 mt-20">
        <div className="border border-black"></div>
      </div>
      <div className="w-full px-24 flex">
        <div className="w-1/2 flex flex-col mt-8 bg-red-50">
          <ul className="flex space-x-6 mt-3 list-outside">
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
            <li>
              <div className="border-black font-medium text-black border w-[110px] flex items-center justify-center h-[40px] rounded-full text-base">
                Stratégie
              </div>
            </li>
          </ul>

          <span className="mt-10 text-4xl font-semibold">Lorem ipsum</span>

          <p className="mt-12 text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            voluptatum aliquam! Eius quis modi, non accusamus voluptas
            consectetur sapiente. Ex dolor aliquam quo itaque facilis corporis
            id aspernatur magnam perspiciatis.
          </p>

          <ul className="list-disc flex flex-col space-y-1 list-inside mt-12 pl-4 text-3xl font-light">
            <li>Conception d'applications mobiles</li>
            <li>Conception d'applications Web</li>
            <li>Conception de la page de destination</li>
            <li>Marque</li>
            <li>Système de conception</li>
            <li>Recherche UX</li>
            <li>Stratégie</li>
          </ul>

          <div className="flex mt-20 justify-start space-x-2">
            <span className="text-3xl">VOIR L'ETUDE DE CAS</span>
            <img src="/icon/arrow_empty.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 mt-8">
          <img src="/images/img_tec.png" alt="" />
        </div>
      </div>
      <div className="w-full mt-32 pb-12 flex items-center justify-center flex-col bg-red-200">
        <span className="text-6xl font-meduim text-center">
          Débloquez votre prochaine étape de
          <br />
          croissance avec Caauri !
        </span>
        <span className="text-2xl font-normal mt-12 text-center">
          Nous utilisons la statégie , la créativité et l'ingénierie pour
          fournir des
          <br />
          résultats mésurables à fort impact pour votre entreprise. Exlporez
          <br />
          le marketing de niveau supérieur avec un pionnet du marketing <br />
          numérique qui garantit un rendement maximal des investissements
        </span>
        <span>
          <div className="mt-5 flex gap-5 hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
            <div>Discutons</div>
            <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
              <img src="/logo/frame.svg" alt="" />
            </div>
          </div>
        </span>
      </div>
      {/**Footer */}
      <Footer />
    </div>
  );
}
