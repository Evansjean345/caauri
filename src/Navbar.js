import React, { useState } from "react";

export default function Navbar({ onMenuChange }) {
  const [menu, setMenu] = useState(true);
  const changeMenu = () => {
    setMenu(!menu);
    onMenuChange(!menu);
  };
  return (
    <div
      style={{
        backdropFilter: "blur(7.5px)",
        background: " rgba(255, 255, 255, 0.20)",
      }}
      className="fixed w-full z-50 "
    >
      <div className="w-full flex z-50 justify-between">
        <div className="w-1/2">
          <img src="/images/logo.png" alt="" className="h-24" />
        </div>
        <div className="w-1/2 transition-all relative  flex justify-end gap-4 pr-8">
          <div
            className={
              menu ? "mt-8 cursor-pointer text-black font-medium" : "hidden"
            }
            onClick={changeMenu}
          >
            Menu
          </div>
          <div
            className={
              menu
                ? "rounded-full mt-6 border cursor-pointer h-12 border-black"
                : "hidden"
            }
            onClick={changeMenu}
          >
            <img src="/images/menu.png" alt="" className="h-12" />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div
        className={
          menu
            ? "hidden"
            : "absolute z-50 top-0 sm:right-[24px]  sm:top-[24px] sm:rounded-3xl sm:shadow-2xl bg-white w-[100%] h-[100vh] sm:w-[441px] sm:h-[658px]"
        }
      >
        <div className="bg-white w-full flex items-center mt-12 sm:px-6 justify-between">
          <div className="w-1/2 ">
            <span className="sm:block hidden text-[#888]">
              Pharmacie azur,Angré
            </span>
            <img
              src="/images/logo.png"
              alt=""
              className="h-20 sm:hidden block"
            />
          </div>
          <div className="w-1/2 gap-x-1 sm:pr-0 pr-4 flex justify-end">
            <div
              className="mt-4 font-semibold text-xl cursor-pointer"
              onClick={changeMenu}
            >
              Retour
            </div>
            <img
              onClick={changeMenu}
              className="cursor-pointer hidden sm:block"
              src="/logo/back.svg"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="60"
              viewBox="0 0 31 30"
              fill="none"
              className="sm:hidden block cursor-pointer"
              onClick={changeMenu}
            >
              <rect
                x="1"
                y="0.5"
                width="29"
                height="29"
                rx="14.5"
                stroke="black"
                stroke-opacity="0.8"
              />
              <path
                d="M9 9L21 21M9 21L21 9"
                stroke="black"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mt-16 px-2 sm:px-12 flex flex-col">
          <ul>
            <li className="text-3xl font-base sm:font-semibold">Accueil</li>
            <li className="text-3xl font-thin sm:font-semibold mt-2">
              Caaurimuquez
            </li>
            <li className="text-3xl font-thin sm:font-semibold mt-2">
              Portfolio
            </li>
            <li className="text-3xl font-thin sm:font-semibold mt-2">Blog</li>
            <li className="text-3xl font-thin sm:font-semibold mt-2">
              Carriere
            </li>
            <li className="text-3xl font-thin sm:font-semibold mt-2">
              Contact
            </li>
          </ul>
        </div>
        <div className="bg-white mt-20 flex w-full">
          <div className="w-1/2 flex sm:justify-end flex-col justify-start   sm:items-center">
            <span>
              <div className="mt-8 cursor-pointer flex w-[200px] gap-1 py-4 hover:flex hover:items-center hover:justify-center hover:gap-0 hover:bg-black  transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                <div>contact@caauri.com</div>
                <div className="bg-black rounded-b-full w-6  transition-all flex items-center justify-center rounded-l-full">
                  <img src="/logo/frame.svg" alt="" />
                </div>
              </div>
            </span>
            <span className="block sm:hidden ml-2 text-[#888]">
              Pharmacie azur,Angré
            </span>
          </div>
          <div className="w-1/2 flex justify-end pr-12">
            <ul>
              <li>
                <img
                  src="/icon/faceboock.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px]"
                />
              </li>
              <li>
                <img
                  src="/icon/twitter.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
              <li>
                <img
                  src="/icon/instagram.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
              <li>
                <img
                  src="/icon/in.svg"
                  alt=""
                  className="border border-[#272727B2] rounded-full flex items-center justify-center w-[24px] h-[24px] mt-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
