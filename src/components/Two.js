import React from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
const styles = {
  container: {
    background: `linear-gradient(0deg, #0000009a 0%, #0000009a 100%), url(https://s3-alpha-sig.figma.com/img/e10b/b6a8/a07526a073011cd7adaf9388164bdfe7?Expires=1694995200&Signature=QjfvSAuvvmR8KdF6pSwpfGECH7tPHgsKL3ELFLqHk3gy6TZZIa8kRAqmPCG3De0wTumHGQ7XtkK-i0B2vZYbvcuzQeUyfMHgofUGRm6mJJ6qek6GT1Pz3Z4J9ijpvyB0rZh2AtrKrgi0H~BzSbv1lXfMIf7B7PJEp-A82ShQolUm012jwISHdRQ4jkl00Lbc~LhKrwwNaDUVPQEf2QRYqKLGStRF06eFJnPSk3qA2-VV~XXu7fUG87q~nYJkDydTq3S4EM2qiVkIlPJxG3ZmQlF0qDMt3CQKVx-cR~upWs-h76Hksr9HTYILD~2d2daFdd99IlTzFQBRiQLjp1nspA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
};

export default function Two() {
  return (
    <div className="bg-white text-black">
      {/* first Section */}
      <div className="pt-40 sm:pt-56 flex flex-col">
        <div className="w-full px-8 text-black text-2xl font-semibold sm:font-normal sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl">
          Tout commence
          <br />
          Par <br />
          compétences
        </div>
        <div className="flex w-full md:mt-20 mt-16">
          <div className="w-1/2 "></div>
          <div className="w-full md:px-0 px-8 md:pl-0  sm:px-24 md:w-1/2 font-medium sm:font-normal text-sm md:text-4xl md:pr-32 text-black">
            Agence curieuse, toujours en train de s'adapter et évoluant avec le
            temps, et c'est ce qui fait nos créations vraiment spécial.
          </div>
        </div>
        <div className="flex my-28 gap-3 items-center justify-center">
          <span className="bg-[#D9D9D9] border border-[#9a9191] flex items-center justify-center rounded-full h-[35px] w-[35px] sm:w-[45px] sm:h-[45px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.4904 2.69262L11.3932 20.1924M11.3932 20.1924L19.3118 12.3612M11.3932 20.1924L3.56206 12.2738"
                stroke="#666666"
                stroke-width="2.33333"
              />
            </svg>
          </span>
          <span className="text-sm">Explorer</span>
        </div>
      </div>
      {/* Second section */}
      <div>
        <div className="w-full h-[50vh] sm:h-[100vh]">
          <img
            src="/images/mockup.jpg"
            alt=""
            className="max-w-full h-full ml-auto mr-auto block"
          />
        </div>
      </div>
      {/** Four section */}
      <div className="bg-black h-[100vh] sm:h-[140vh]">
        <div className="flex justify-between sm:px-16 px-3 py-12">
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs font-thin sm:text-sm text-white sm:pl-2">
              CLIENTELE
            </span>
            <span className="sm:text-6xl text-white mt-8 text-2xl">+50</span>
          </div>
          <div className="flex flex-col pl-5 sm:pl-0 justify-center items-center">
            <span className="text-xs sm:text-sm font-thin  text-white sm:pl-4">
              PROJETS
            </span>
            <span className="sm:text-6xl text-2xl text-white mt-8">+150</span>
          </div>
          <div className="flex flex-col font-thin  justify-center items-center">
            <span className="text-xs sm:text-sm text-white sm:pl-2">
              CLIENTS STAISFAITS
            </span>
            <span className="sm:text-6xl text-2xl text-white mt-8">100%</span>
          </div>
        </div>
        <div className="flex mt-44 text-white flex-col justify-center items-center">
          <div className="sm:text-xl">Nous sommes expert en</div>
          <div className="text-5xl lg:text-8xl mt-8 font-semibold text-center">
            Communication
            <br />
            digitale
          </div>
          <div className="flex items-center justify-center mt-10 sm:mt-20">
            inclus
          </div>
          <div className="flex gap-10 sm:gap-[100px] mt-8 sm:mt-16 justify-between">
            <div>
              <ul className="flex flex-col gap-y-3">
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-y-3">
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
                <li className="font-medium sm:text-xl">identitité de marque</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Five Section */}
      <div className="sm:h-[120vh] h-[100vh] mt-20">
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-1/2 flex flex-col">
            <span className="px-8 text-black text-2xl font-semibold sm:font-normal sm:text-4xl md:text-5xl lg:text-6xl  xl:text-8xl">
              Web & <br />
              Développement
            </span>
            <span className="mt-6 px-8 sm:font-medium font-normal text-sm md:text-xl  text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              voluptas magnam beatae doloribus architecto nisi odit consequuntur
              sit error rerum, provident eius maxime non, porro natus fugiat
              inventore voluptatem a.
            </span>
          </div>
          <div className="sm:w-1/2 px-8 py-8 sm:py-0 sm:px-0 h-[431px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/06eb/17d3/bd41d8efd0be9dba35553e67536d6df7?Expires=1694995200&Signature=Nj8BqiNtY1x-UaCAAcECyuN6D6WV7VKm8EuP0HrnZymX0s2-MUBVeX1L-tuvfo4VQwuIKv8kh7dkkokocPVQ2GPBOMRM4aXdSPIXIyg4z3AbydvyL-3JsbTKgsq59jNjkJ1TND3pV4dlKebqb1EaO6Hh2-j7tDQo7fg54~LtGyWKywgoHYZH-ohxOIPTVa2zqJirFdlJ-AzmMe5IZUevYGy5wN4TlbycedVFC-IVtq-y9lC9nigUXNo31jLcq2fYbRMdfR7ZLdQaNUQc~ckDY~KWXu98JzZa5ecfeG0X2kqSbUK8FyPpKe0xyq-jnK-UtpSOS3B2awh-PjYmQtc5mA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className=" max-w-full h-full rounded-3xl  ml-auto mr-auto block"
            />
          </div>
        </div>
        <div className="flex mt-6 sm:mt-20 gap-6 px-8 sm:gap-12 justify-evenly">
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">01</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[gray] mt-2 bg-[gray] border w-full rounded-3xl">
              <div className="border-black w-[30%] rounded-3xl border-2"></div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">02</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[gray] mt-2 bg-[gray] border w-full rounded-3xl">
              <div className="border-black w-[30%] rounded-3xl border-2"></div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">03</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[gray] mt-2 bg-[gray] border w-full rounded-3xl">
              <div className="border-black w-[30%] rounded-3xl border-2"></div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col ">
            <span className="font-medium sm:text-base text-xs">04</span>
            <p className="mt-2 font-medium sm:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis cupiditate consectetur
            </p>
            <div className="border-[gray] mt-2 bg-[gray] border w-full rounded-3xl">
              <div className="border-black w-[30%] rounded-3xl border-2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Formation */}
      <div
        className="w-full h-[100vh] first-letter:mt-4"
        style={styles.container}
      >
        <div className="flex justify-center items-center">
          <span className="text-5xl font-bold lg:pb-20 xl:pt-16 pt-16">
            Formation
          </span>
        </div>
        <div className="w-full flex pt-44 2xl:pt-12">
          <div className="w-1/4 flex border-r  flex-col justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl  text-xs text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs  md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r  justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs  text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs  md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col border-r justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs  md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center h-[233px] p-1 md:p-7">
            <span className="md:text-2xl text-xs text-center md:text-start font-semibold">
              CONCEPTION WEB
            </span>
            <p className="mt-8 text-white text-xs md:text-base lg:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobis, deleniti ut, similique inventore ullam modi quas,
              perspiciatis cumque nemo perferendis repudiandae odio totam.
              Adipisci eos repudiandae distinctio dolorum possimus?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center pt-24 md:pt-56 lg:pt-24 xl:pt-24 2xl:pt-24  items-center">
          <span className="group">
            <div className="mt-5 flex gap-5 hover:flex hover:justify-center cursor-pointer hover:items-center hover:gap-0 py-4 group-hover:bg-white   transition-all px-2   group-hover:text-black rounded-l-full rounded-r-full hover:rounded-l-full hover:rounded-r-full">
              <div className="text-white group-hover:text-black">Discutons</div>
              <div className="bg-white  rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                <img src="/icon/arrow_black.svg" alt="" />
              </div>
            </div>
          </span>
        </div>
      </div>
      {/* Section 4 */}
      {/*
    
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
      </div> */}
      {/* Pub */}
      <Prefooter />
      <Footer />
    </div>
  );
}
