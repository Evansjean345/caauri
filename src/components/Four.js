import React from "react";
import Footer from "./Footer";

const items = [
  {
    id: 1,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Site internet",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi .",
  },
  {
    id: 2,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Application web",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio .",
  },
  {
    id: 3,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Strategie",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio .",
  },
  {
    id: 4,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Strategie",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi ",
  },
  {
    id: 5,
    imgSource:
      "https://images.ctfassets.net/hrltx12pl8hq/4JoZeyjxvb2Aofqy9Dx64i/01af3d870ba303df84a55ed7bd527b03/royalty-free-stock-photos-images-2023-shutterstock_1123967720-lr.jpg",
    title: "Site internet",
    content:
      " amet consectetur adipisicing elit. Maxime quae harum minima, vero commodi alias aspernatur labore nisi optio magni expedita! Maiores optio modi ",
  },
];

export default function Four() {
  return (
    <div>
      {/* first Section */}
      <div className="w-full">
        <p className="w-full mt-20 flex items-center justify-center  text-7xl">
          CAAURI CONSULTING :
          <br />
          plateforme de gestions interne des
          <br />
          employés
        </p>
        <div className="flex w-full mt-20">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-xl pr-32 bg-red-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illo dolor debitis accusantium maiores sunt nulla odit aliquam sit
            perferendis, tempora voluptatum pariatur sapiente cum excepturi fuga
            perferendis, tempora voluptatum pariatur sapiente cum excepturi fuga
            consequatur error architecto!
          </div>
        </div>
      </div>
      {/* Second section */}
      <img src="/images/plats.png" alt="" className="w-full px-28 mt-32" />
      <div className="w-full flex justify-between mt-10">
        <div className="w-[45%] bg-red-50 px-44 flex flex-col justify-center  font-semibold text-2xl">
          <p>Caauri consulting</p>
          <span className="text-base font-normal bg-fuchsia-200 mt-4">
            (role du client) Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Id temporibus possimus repudiandae minima
          </span>
          <p className="mt-8">Industrie</p>
          <span className="text-base font-normal bg-fuchsia-200 mt-1">
            Saas
          </span>
          <p className="mt-8">Service que nous avons fourni</p>
          <ul className="font-normal text-base mt-2 leading-6 list-disc list-inside">
            <li>Refonte site web</li>
            <li>Stratégie</li>
            <li>Expérience utilisateur</li>
            <li>Image de la marque</li>
          </ul>
          <br />
          <br />
          <p className="mt-8 flex pb-20 text-4xl underline underline-offset-8">
            Voir le site
            <img src="/icon/arrow.svg" alt="" className="mt-2" />
          </p>
        </div>
        <div className="w-[55%] px-12 flex-col flex bg-green-50 pr-24 font-semibold text-2xl text-start">
          <p>PROBLEMATIQUE</p>
          <span className="text-base mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem!
            Mollitia error, aperiam labore deleniti culpa eos neque cumque
            consequuntur quidem?
          </span>
          <span className="text-base mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
          <p className="mt-6">STRATEGIE DE L'AGENCE</p>
          <span className="text-base mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
          <span className="text-base mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            rem at dolorum, alias ullam libero assumenda laboriosam dolorem! rem
            at dolorum, alias ullam libero assumenda laboriosam dolorem! at
            dolorum, alias ullam libero assumenda laboriosam dolorem! Mollitia
            error, aperiam labore deleniti culpa eos neque cumque consequuntur
            quidem?
          </span>
        </div>
      </div>
      {/* Thrid section */}
      <div className="flex w-full mt-16 gap-x-16 px-20">
        <div className="w-1/2">
          <img src="/images/plats.png" alt="" />
        </div>
        <div className="w-1/2">
          <img src="/images/plats.png" alt="" />
        </div>
      </div>
      {/* Caroussel section */}
      <div className="w-full flex-col flex items-center justify-center mt-28 bg-red-50">
        <span className="text-7xl w-full  font-meduim text-center">
          CE QUE LE CLIENT A DIT
        </span>
        <p className="text-xl  font-normal px-96 mt-4">
          `` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          corporis fugiat illum enim. Laudantium, omnis vitae. Adipisci, magnam.
          Commodi voluptatem asperiores sed, enim non facilis tenetur Commodi
          voluptatem asperiores sed, enim non facilis tenetur consequuntur ipsum
          ad odio. ``
        </p>
        <div className="flex w-full mt-4">
          <div className="w-[31%] flex justify-end bg-green-100">
            <img src="/images/cadre.png" alt="" />
          </div>
          <div className="w-[69%] bg-blue-200 pl-6">
            <span className="font-semibold">Carine N'Guessan</span>
            <br />
            <br />
            <span className="leading-none">
              Responsable de l'ingénerie
              <br />
              de caauri consulting
            </span>
          </div>
        </div>
      </div>
      {/* Carousels div */}
      <div className="w-full flex justify-between mt-10 text-lg px-12">
        <div className="w-1/2 font-semibold text-2xl pt-2">
          D'autres travaux
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="mt-5 flex gap-2 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
            <div className="font-thin">Tous les travaux</div>
            <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
              <img src="/logo/frame.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* carousels items */}
      <div
        className="carousel carousel-center w-full  p-4 mt-6
       space-x-4"
      >
        {items.map((item) => (
          <div
            className={`carousel-item flex group   transition-transform flex-col w-[420px] h-[470px] px-8 relative`}
          >
            <img
              src={item.imgSource}
              alt=""
              className="w-full z-30 h-full rounded-lg cursor-pointer  group-hover:scale-95 transition-all"
            />
            <span className="z-40 top-10 left-16 absolute cursor-pointer group-hover:scale-75 transition-all bg-white w-[150px] h-[50px] flex items-center justify-center rounded-full border border-black">
              {item.title}
            </span>
            <span className="font-semibold text-xl mt-6">
              Caauri consulting
            </span>
            <p className="mt-2 font-normal">{item.content}</p>
          </div>
        ))}
      </div>
      {/* Pub */}
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
