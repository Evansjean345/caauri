import React from "react";
import Footer from "./Footer";

export default function Five() {
  return (
    <div>
      {/* first Blog */}
      <div className="flex w-full mt-32">
        <div className="text-7xl w-1/2 pl-2 flex justify-start ">
          CAAURI BLOG
        </div>
        <div className="w-1/2 text-3xl pl-16 flex justify-center">
          Apprenez de nous, laissez vous divertir ou
          <br />
          inspirez
        </div>
      </div>
      <div className="flex flex-col mt-32">
        <div className="w-full flex">
          <span className="text-2xl font-medium w-1/2 flex pl-24 justify-start">
            A LA UNE{" "}
          </span>
          <span className="w-1/2"></span>
        </div>
        <div className="flex justify-center px-24 relative">
          <img src="/images/bot.png" alt="" />
          <div className="absolute flex flex-col left-24 top-12">
            <span className=" text-4xl  text-white z-20">KMS EXPRESS</span>
            <span className="text-3xl mt-2 text-white z-20">
              13/12/2023 &nbsp; |Contenu | il y a 1 min
            </span>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 gap-x-4 px-24">
          <div className="w-1/2 flex flex-col">
            <img src="/images/bot.png" alt="" />
            <div className="flex flex-col mt-4">
              <span className="text-3xl font-medium">
                IA : DES CONSEILS SIMPLES POUR UTILISER L'IA <br /> COMME UN
                PROFESIONNEL
              </span>
              <span className="mt-4 text-2xl">21/12/2023 | Contenu</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <img src="/images/bot.png" alt="" />
            <div className="flex flex-col mt-4">
              <span className="text-3xl font-medium">
                IA : DES CONSEILS SIMPLES POUR UTILISER L'IA <br /> COMME UN
                PROFESIONNEL
              </span>
              <span className="mt-4 text-2xl">21/12/2023 | Contenu</span>
            </div>
          </div>
        </div>
      </div>
      {/* pub */}
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
          <div className="mt-5 flex hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 gap-5 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
            <div>Discutons</div>
            <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
              <img src="/logo/frame.svg" alt="" />
            </div>
          </div>
        </span>
      </div>
      {/* */}
      <Footer />
    </div>
  );
}
