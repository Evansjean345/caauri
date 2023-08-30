import React from "react";
import "../App.css";
import Footer from "./Footer";

export default function SectionAmime() {
  return (
    <div>
      <iframe
        id="iframe-trailer"
        className="w-full"
        height="500"
        src="https://www.dailymotion.com/embed/video/x33a1ra"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
        allowfullscreen="true"
      ></iframe>

      {/*partie 2 */}
      <div className="w-full mt-6 flex flex-wrap bg-white relative">
        <div className="w-[60%] bg-red-300 ">
          <div className="flex flex-col py-4 px-12">
            <strong className="font-thin text-4xl">CAAURI CONSULTING</strong>
            <strong className="font-extralight mt-2 mb-4">
              AGENCE DE PUBLICITE DIGITALE
            </strong>
            <p className="font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
              rerum vero recusandae, facilis unde? Excepturi vitae eos, officia
              numquam nesciunt voluptatum. Accusamus soluta unde cumque,
              dignissimos quae repellendus recusandae.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              explicabo exercitationem, officiis vero voluptate delectus, ab
              quibusdam iusto natus veritatis repellendus aut iste minima
              dolores sit earum beatae laborum soluta!
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis blanditiis dicta reiciendis? In necessitatibus explicabo
              ea natus totam esse perspiciatis minima laboriosam, dolore dolorem
              eius exercitationem excepturi veniam aperiam? Laudantium!
            </p>
            <strong className="w-full flex items-center justify-center font-thin my-4">
              VOUS FOURNIR 100% DE SATISFACTION
            </strong>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              cumque esse asperiores voluptatum quasi tenetur molestias eos
              saepe reiciendis, culpa atque labore magnam accusantium neque
              iusto vero aliquid nam aspernatur.
            </p>
            <ul className="mt-4 font-thin list-disc">
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
              <li>Lorem ipsum dolor, sit amet </li>
            </ul>
            {/* nos services */}
            <strong className="w-full mt-28 font-thin text-2xl flex items-center justify-center">
              NOS SERVICES
            </strong>
            <img
              // data-aos="zoom-out-right"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="500"
              // data-aos-offset="500"
              // animate-bounce transition duration-700 ease-in-out
              src="/images/mac_img.png"
              alt=""
              className="bg-white h-full w-full"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="bg-blue-500 flex w-full justify-end text-end items-end leading-none px-16">
            2019 <br />
            creation de caauri consulting
          </div>
          {/*roll up */}
          <div>
            <img src="/images/roll-up.png" alt="" />
          </div>
          <br />
          <div className="bg-blue-500 flex w-full justify-end text-end items-end leading-none px-16">
            2019 <br />
            creation de caauri consulting
          </div>
          {/* div absolute */}
          <div className="absolute bg-black top-[3230px] z-50 w-full items-center justify-center text-white  flex flex-col h-[300px]">
            <div>
              <span className="z-[60] font-semibold text-2xl">Google</span>{" "}
              <span className="z-[60] font-thin text-2xl">
                business profile
              </span>
            </div>
            <div className="mt-4 font-thin text-2xl flex gap-x-2">
              <span>4.O</span>{" "}
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star_empty.svg" alt="" className="h-6 mt-1" />
              </span>
            </div>
            <div className="mt-5 font-thin text-xs text-white">
              note globale sur avis clients sur note fiche
            </div>
            <div className="border text-xs border-[#FFD700] w-[180px] mt-6 py-2 rounded-[60px] text-black flex items-center justify-center">
              <div className="bg-[#FFD700] w-[160px] h-[50px] flex rounded-[60px] items-center justify-center">
                {" "}
                partagez-nous <br /> votre experience
              </div>
            </div>
          </div>
          <div className="bg-white mt-[1150px] ">
            <img src="/images/ipad.png" alt="" />
          </div>
        </div>
        <div className="w-[2%] flex flex-col items-center z-40  pt-20">
          <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#424445] border border-[#424445] h-[335px]"></div>
          <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#424445] border border-[#424445] h-[705px] rotate-[-4.5deg]  ml-14"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-50" />
          <div className="bg-[#424445] border border-[#424445] h-[535px] rotate-[11.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28 z-50" />
          <div className="bg-[#424445] border border-[#424445] h-[735px] rotate-[-8.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-50" />
          <div className="bg-[#424445] border border-[#424445] h-[235px] rotate-[25.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28  z-50" />
          <div className="bg-[#424445] border border-[#424445] h-[1035px] mr-[310px] rotate-[10.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-50 mr-[505px]" />
          <div className="bg-[#424445] border border-[#424445] h-[735px] mr-[310px] rotate-[-15.2deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-50 mr-[108px]" />
          <div className="bg-[#424445] border border-[#424445] h-[335px] mr-[108px] mt-2"></div>
          <img src="/icon/circle.svg" alt="" className="z-50 mr-[108px]" />
        </div>
        <div className="w-[38%] flex flex-col">
          <div className="bg-red-500 h-[97px] relative flex items-end leading-none px-4">
            1990 <br /> creation d'internet
          </div>
          <div className="bg-blue-500 flex h-[365px] items-end leading-none px-4">
            2019 <br />
            creation de caauri consulting
          </div>
          <div className="bg-green-500 flex-col flex h-[700px]  items-center justify-end">
            <div className="flex h-[1/2] w-full  justify-end">
              <img src="/icon/logo_none.png" alt="" />
            </div>
            <div className="h-1/2 text-end z-30 flex flex-end w-full bg-blue-200 items-end sm:mr-96">
              2019 <br />
              creation de caauri consulting
            </div>
          </div>
          <div className="bg-gray-500 flex-col flex h-[550px]  items-center justify-end">
            <img src="/images/outdoor.png" alt="" className="h-full w-full" />
          </div>
          <div className="bg-red-500 h-[750px] flex items-end leading-none px-12">
            1990 <br /> creation d'internet
          </div>
          <div className="bg-green-900 absolute top-[3850px] right-[400px] text-5xl mr-32 font-thin">
            Lorem, ipsum
          </div>
          <div className="bg-green-300 mt-[1600px]">
            <span className="text-4xl font-thin">Lorem ipsum </span>
            <br />
            <span className="text-3xl font-thin">Lorem ipsum </span>
            <br />
            <p className="mt-6 pr-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              voluptate, corrupti maiores corporis asperiores dicta expedita,
              doloremque, esse architecto alias aut. Expedita recusandae nihil
              culpa asperiores aut sed fugit minima.
            </p>
          </div>
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
          <div className="mt-5 hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 flex gap-5 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
            <div>Discutons</div>
            <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
              <img src="/logo/frame.svg" alt="" />
            </div>
          </div>
        </span>
      </div>
      <Footer />
    </div>
  );
}
