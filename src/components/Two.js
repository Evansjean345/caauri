import React from "react";
import Footer from "./Footer";
const styles = {
  container: {
    background: `linear-gradient(0deg, #0000009a 0%, #0000009a 100%), url(https://s3-alpha-sig.figma.com/img/e10b/b6a8/a07526a073011cd7adaf9388164bdfe7?Expires=1693785600&Signature=PDnCBudIoK4JSSw3CdGWokflHnOLgNhHVCEZrGyToM~zNgNjKpgXWVZuPWBiOAbXVJG3~S~JpjlbDAthJb3ADsEfspB-TtZfNmfmDYg5E6b2VE99Uux7Lzxx9BUpkjlFUj5Ng23yMsMlMNhbZ2VpsFzXO4BGI3nknsNTKwPyduFxo5qgX~vspUuU-zdZG35Lbmw4KKHC6Y7hHK~RsxHsvKjuvYLH1bWy4GawBJYPm4hVeTLr83kDF3~CfJ2L1FMCic0VU3hTSJpyAoOHN7zx6Ny2MxDtiMfJlxexlVtwODg5lwgUbYc-KJs~1NrIqpylJRLST-Lp2EfMwBewWsut1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
    backgroundRepeat: "no-repeat",
  },
};

export default function Two() {
  return (
    <div className="bg-white text-black">
      {/* First section */}
      <div className="justify-center flex flex-col">
        <span className="text-7xl mt-16 w-full font-meduim bg-red-50 pb-12  flex justify-center">
          Nous aidons les marques à <br />
          être plus performante
          <br />& impactante
        </span>
        <span className="flex justify-center mt-12">
          <img src="/icon/arrow_circle.svg" alt="" className="w-8 h-8 my-2" />
        </span>
        <span className="flex justify-center font-medium text-xl">
          Nous travaillons sur 4 secteur clés
        </span>
      </div>
      {/* 1 */}
      <div className="flex justify-center items-center w-full mt-44">
        <div className="flex justify-center items-center flex-col w-full">
          <img src="/icon/line.svg" alt="" className="w-1 h-72" />
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-gradient-to-r from-[#F2B749] to-[#FF9A62] rounded-[100px] font-bold">
            1
          </div>
          <span className="mt-16 text-6xl font-medium">
            Communication Digitale
          </span>
          <p className="text-2xl mt-12 w-full flex items-center justify-center text-center px-56">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolores? Nihil unde rerum nobis modi suscipit optio, praesentium
            temporibus in blanditiis tempora veritatis culpa qui officia itaque
            impedit vitae accusantium!
          </p>
        </div>
      </div>
      {/* section 1 */}
      <div className="w-full flex mt-10">
        <div className="w-1/2 bg-blue-300 flex justify-center">
          {" "}
          <img src="/images/image_one.png" alt="" />
        </div>
        <div className="w-1/2 bg-red-400">
          <div className="flex space-x-5">
            <span className="bg-white">
              <img
                src="/icon/compass.svg"
                alt=""
                className="w-[60px] h-[60px]"
              />
            </span>
            <span className="text-2xl mt-3 font-medium">
              Trouvez vôtre positionnement
            </span>
          </div>
          <p className="text-xl mt-6 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptas nostrum? Harum odio eius deserunt voluptate labore magni
            voluptatem omnis atque! Dolore exercitationem praesentium ratione
            tempora totam quis beatae assumenda.
          </p>
          {/* */}
          <div className="flex space-x-5 mt-8">
            <span className="bg-white">
              <img src="/icon/pen.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl mt-3 font-medium">
              Une identité verbale et visuelle
            </span>
          </div>
          <p className="text-xl mt-6 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptas nostrum? Harum odio eius deserunt voluptate labore magni
            voluptatem omnis atque! Dolore exercitationem praesentium ratione
            tempora totam quis beatae assumenda.
          </p>
          {/* */}
          <div className="flex space-x-5 mt-8">
            <span className="bg-white">
              <img src="/icon/way.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl mt-3 font-medium">
              Des lignes directrices claires pour votre marketing
            </span>
          </div>
          <p className="text-xl mt-6 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptas nostrum? Harum odio eius deserunt voluptate labore magni
            voluptatem omnis atque! Dolore exercitationem praesentium ratione
            tempora totam quis beatae assumenda.
          </p>
          {/* */}
          <ul className="flex list-inside space-x-2 mt-8">
            <li>
              <div className="bg-white text-black w-[90px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                DESIGN
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[90px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                MARQUE
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[300px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                DEVELOPPEMENT DE CONTENU
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[250px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                STRATEGIE DE CONTENU
              </div>
            </li>
          </ul>
          <ul className="flex list-inside space-x-2 mt-2">
            <li>
              <div className="bg-white text-black w-[250px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                CREATION GRAPHIQUE
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[250px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                CREATION GRAPHIQUE
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[90px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                MARQUE
              </div>
            </li>
            <li>
              <div className="bg-white text-black w-[90px] h-[35px] border border-black flex justify-center text-lg  items-center rounded-full">
                MARQUE
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 2 */}
      <div className="flex justify-center items-center w-full mt-10">
        <div className="flex justify-center items-center flex-col w-full">
          <img src="/icon/line.svg" alt="" className="w-1 h-72" />
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-gradient-to-r from-[#F2B749] to-[#FF9A62] rounded-[100px] font-bold">
            2
          </div>
          <span className="mt-16 text-6xl font-medium">Web & Développemnt</span>
          <p className="text-2xl mt-12 w-full flex items-center justify-center text-center px-56">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolores? Nihil unde rerum nobis modi suscipit optio, praesentium
            temporibus in blanditiis tempora veritatis culpa qui officia itaque
            impedit vitae accusantium!
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex w-full mt-10">
        <div className="w-[47.5%] bg-red-500 flex flex-col items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/06eb/17d3/bd41d8efd0be9dba35553e67536d6df7?Expires=1693785600&Signature=e6~Fokga~jB4pSvIwoXQpP0Tin5kjkshx~~L8NeHDixIejnhMAprFDE7V4iaaXrD07bN-bq~~zpjbJvu2hVy4XudsqB3A5LswjcoNTZM23GQXVAcmXBnMU24hlAKcNQXOWF9l4Vu8j02eG2sSVoiWDFmAB9P5bhOlRpQln1WTCmcwUWI3YkvfgP-mZqBRPCk29tmNOwUNrMLPMRqKH9MKekb~bIaem~IXQaxD-CMKpf6wfX425Eb40Ului1W1RJRBjH1JkmTjoKzh7bWHSl9y4H2esmIJXfUq6y12Fxw6-oJKDl2G8VOLdujheomdHQ-OnPS~w8hQhXO~LHfaC4R8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[448px] h-[312px] rounded-3xl mt-52 ml-56"
          />

          <div className="flex items-start justify-start flex-col pl-60 mt-12">
            <span className="bg-white">
              <img src="/icon/plan.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl pt-4 font-medium">Plannification</span>
            <p className="text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, voluptas nostrum? Harum odio eius deserunt voluptate
              labore magni voluptatem omnis atque! Dolore exercitationem
              praesentium ratione tempora totam quis beatae assumenda.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/06eb/17d3/bd41d8efd0be9dba35553e67536d6df7?Expires=1693785600&Signature=e6~Fokga~jB4pSvIwoXQpP0Tin5kjkshx~~L8NeHDixIejnhMAprFDE7V4iaaXrD07bN-bq~~zpjbJvu2hVy4XudsqB3A5LswjcoNTZM23GQXVAcmXBnMU24hlAKcNQXOWF9l4Vu8j02eG2sSVoiWDFmAB9P5bhOlRpQln1WTCmcwUWI3YkvfgP-mZqBRPCk29tmNOwUNrMLPMRqKH9MKekb~bIaem~IXQaxD-CMKpf6wfX425Eb40Ului1W1RJRBjH1JkmTjoKzh7bWHSl9y4H2esmIJXfUq6y12Fxw6-oJKDl2G8VOLdujheomdHQ-OnPS~w8hQhXO~LHfaC4R8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[448px] h-[312px] rounded-3xl mt-32 ml-56"
          />
          <div className="flex items-start justify-start flex-col pl-60 mt-12">
            <span className="bg-white">
              <img src="/icon/plan.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl pt-4 font-medium">Plannification</span>
            <p className="text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, voluptas nostrum? Harum odio eius deserunt voluptate
              labore magni voluptatem omnis atque! Dolore exercitationem
              praesentium ratione tempora totam quis beatae assumenda.
            </p>
          </div>
        </div>

        <div className="w-[5%] bg-green-400 flex  flex-col items-center">
          <svg
            width="2"
            height="210"
            viewBox="0 0 2 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Line 18"
              d="M0 209.044C0 209.458 0.335786 209.794 0.75 209.794C1.16421 209.794 1.5 209.458 1.5 209.044H0ZM0 0.957031L0 209.044H1.5L1.5 0.957031L0 0.957031Z"
              fill="url(#paint0_linear_723_3787)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_723_3787"
                x1="-0.00011627"
                y1="0.999996"
                x2="0.000296838"
                y2="198"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stop-color="(90deg rgba(123, 123, 123, 0.20) 0%, rgba(115, 115, 115, 0.30) 13.13%, rgba(108, 108, 108, 0.60) 24.87%, #000 100%)"
                  stop-opacity="0.15"
                />
                <stop
                  offset="0.0812183"
                  stop-color="(90deg rgba(123, 123, 123, 0.20) 0%, rgba(115, 115, 115, 0.30) 13.13%, rgba(108, 108, 108, 0.60) 24.87%, #000 100%)"
                  stop-opacity="0.2"
                />
                <stop
                  offset="0.204315"
                  stop-color="(90deg rgba(123, 123, 123, 0.20) 0%, rgba(115, 115, 115, 0.30) 13.13%, rgba(108, 108, 108, 0.60) 24.87%, #000 100%)"
                  stop-opacity="0.25"
                />
                <stop
                  offset="1"
                  stop-color="(90deg rgba(123, 123, 123, 0.20) 0%, rgba(115, 115, 115, 0.30) 13.13%, rgba(108, 108, 108, 0.60) 24.87%, #000 100%)"
                />
              </linearGradient>
            </defs>
          </svg>
          {/* circle */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <circle cx="6" cy="6.99854" r="5.5" stroke="#F2B749" />
          </svg>
          {/* circle */}
          <div className="border border-dashed border-black w-[1px] h-72"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <circle cx="6" cy="6.99854" r="5.5" stroke="#F2B749" />
          </svg>
          {/* circle */}
          <div className="border border-dashed border-black w-[1px] h-72"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <circle cx="6" cy="6.99854" r="5.5" stroke="#F2B749" />
          </svg>
          <div className="border border-dashed border-black w-[1px] h-72"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <circle cx="6" cy="6.99854" r="5.5" stroke="#F2B749" />
          </svg>
          <div className="border border-dashed border-black w-[1px] h-[450px]"></div>
          <div className="border border-dashed border-[#F2B749] w-[1px] h-44"></div>
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-gradient-to-r from-[#F2B749] to-[#FF9A62] rounded-[100px] font-bold">
            3
          </div>
        </div>
        <div className="w-[47.5%] flex flex-col bg-blue-400">
          <div className="flex flex-col pr-56">
            <span className="bg-white mt-52">
              <img src="/icon/plan.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl pt-4 font-medium">Plannification</span>
            <p className="text-xl mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, voluptas nostrum? Harum odio eius deserunt voluptate
              labore magni voluptatem omnis atque! Dolore exercitationem
              praesentium ratione tempora totam quis beatae assumenda.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/892d/2bdb/a57e3579c34ddf9fa113b311a0ab0567?Expires=1693785600&Signature=YcSE~AK6KENInvgdx31T0YNc3DqjzBpMG7HvAJ3Q6uEjlhTxNkpKQFKOpb6TAKTaKrWW4arqQGOElO8EHSnuyVqU2MhGShdCzF2m0h9oL13UMBOWd~jxsxbqOTwFUza-Tz1e4GYt2z29ebPB6PVP3SGcVIdjBrZC3QDWtNcs34rBmrZeWR0~2g-crFPIO63XeyqYTmkOObSvaXhaZQkN5I0Pa5n7zYzfvmtgKWtVFe0eT9Wd8aaa4-yCB3GBtErVCARXaFqg~YUodev6Nd9KTncTZhBWZiFR3To5Br-tKvoobnFSHpynyyeo-014xDz8xezGI7YGv6qwBAzRMqKWDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[448px] rounded-3xl h-[312px] mt-24"
          />
          <div className="flex flex-col pr-56">
            <span className="bg-white mt-20">
              <img src="/icon/plan.svg" alt="" className="w-[60px] h-[60px]" />
            </span>
            <span className="text-2xl pt-4 font-medium">Plannification</span>
            <p className="text-xl mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, voluptas nostrum? Harum odio eius deserunt voluptate
              labore magni voluptatem omnis atque! Dolore exercitationem
              praesentium ratione tempora totam quis beatae assumenda.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/892d/2bdb/a57e3579c34ddf9fa113b311a0ab0567?Expires=1693785600&Signature=YcSE~AK6KENInvgdx31T0YNc3DqjzBpMG7HvAJ3Q6uEjlhTxNkpKQFKOpb6TAKTaKrWW4arqQGOElO8EHSnuyVqU2MhGShdCzF2m0h9oL13UMBOWd~jxsxbqOTwFUza-Tz1e4GYt2z29ebPB6PVP3SGcVIdjBrZC3QDWtNcs34rBmrZeWR0~2g-crFPIO63XeyqYTmkOObSvaXhaZQkN5I0Pa5n7zYzfvmtgKWtVFe0eT9Wd8aaa4-yCB3GBtErVCARXaFqg~YUodev6Nd9KTncTZhBWZiFR3To5Br-tKvoobnFSHpynyyeo-014xDz8xezGI7YGv6qwBAzRMqKWDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[448px] rounded-3xl h-[312px] mt-24"
          />
        </div>
      </div>
      {/* 3 team section */}
      <div
        className="w-full h-[788px] bg-cover mt-4
       bg-no-repeat"
        style={styles.container}
      >
        <div className="flex justify-center items-center">
          <span className="text-5xl font-bold mt-8">Formation</span>
        </div>
        <div className="w-full flex mt-44">
          <div className="w-1/4 flex border-r  flex-col justify-center items-center h-[233px] p-7">
            <span className="text-2xl font-semibold">CONCEPTION WEB</span>
            <p className="mt-8 text-white text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r  justify-center items-center h-[233px] p-7">
            <span className="text-2xl font-semibold">CONCEPTION WEB</span>
            <p className="mt-8 text-white text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r justify-center items-center h-[233px] p-7">
            <span className="text-2xl font-semibold">CONCEPTION WEB</span>
            <p className="mt-8 text-white text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center h-[233px] p-7">
            <span className="text-2xl font-semibold">CONCEPTION WEB</span>
            <p className="mt-8 text-white text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-24 items-center">
          <span className="group">
            <div className="mt-5 flex gap-5 hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 group-hover:bg-white   transition-all px-2   group-hover:text-black rounded-l-full rounded-r-full hover:rounded-l-full hover:rounded-r-full">
              <div className="text-white group-hover:text-black">Discutons</div>
              <div className="bg-white  rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                <img src="/icon/arrow_black.svg" alt="" />
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex justify-center items-center flex-col w-full mt-4">
        <img src="/icon/line.svg" alt="" className="w-1 h-44" />
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-gradient-to-r from-[#F2B749] to-[#FF9A62] rounded-[100px] font-bold">
          4
        </div>
      </div>
      {/*4 */}
      <div className="w-full flex flex-col items-start justify-start mt-20 pl-20">
        <span className="text-5xl font-bold">Event pro</span>
        <p className="flex justify-start items-start text-start mt-8 w-[450px] bg-red-50 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          provident vero suscipit perspiciatis nesciunt nam? Repellendus dolorum
          architecto eius minus blanditiis exercitationem, laudantium qui ullam
          cum veniam, id magnam similique?
        </p>
        <ul className="flex mt-8">
          <li>
            <div className="flex space-x-2">
              <div className="w-[10px] h-[10px] mt-2 rounded-[100px] bg-black"></div>
              <span>Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start w-96 bg-red-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <div className="w-[10px] h-[10px] mt-2 rounded-[100px] bg-black"></div>
              <span>Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start w-96 bg-red-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <div className="w-[10px] h-[10px] mt-2 rounded-[100px] bg-black"></div>
              <span>Event Corporate</span>
            </div>
            <span className="text-xs mt-2 flex items-start justify-start w-96 bg-red-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores laudantium accusamus dolor itaque placeat ab
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center flex-col w-full mt-20">
        <img src="/icon/line.svg" alt="" className="w-1 h-44" />
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
      <Footer />
    </div>
  );
}
