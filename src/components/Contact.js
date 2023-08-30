import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import Footer from "./Footer";

export default function Contact() {
  const handleFileChange = (event) => {
    const input = event.target;
    const labelText = "Aucun fichier choisi";
    const labelElement = input.previousElementSibling;

    if (input.files && input.files.length > 0) {
      labelElement.textContent = ""; // Masquer le texte
    } else {
      labelElement.textContent = labelText;
    }
  };
  return (
    <div>
      {/* First Section */}
      <div className="flex flex-col justify-start space-y-2 mt-20 pl-12 items-start">
        <span className="text-8xl">Nous joindre</span>
        <span className="text-3xl">Prenons un café</span>
      </div>
      {/* Contact */}
      <div className="flex w-full mt-44 pl-12 pb-44">
        <div className="flex flex-col space-y-8 w-1/2 justify-normal items-start">
          <div className="flex flex-col text-lg">
            <span>Nous envoyez un e-mail :</span>
            <span className="font-medium">Contact@caauri.com</span>
          </div>
          <div className="flex flex-col text-lg">
            <span>Nous sommes basés :</span>
            <span className="font-medium">
              01 BP 194 Abidjan, 01 Rue Alphonse Daudet
            </span>
          </div>
          <div className="flex flex-col text-lg">
            <span>Téléphone portable :</span>
            <span className="font-medium">(+225) 07 08 02 80 80</span>
          </div>
        </div>
        <div className="w-1/2 pr-16">
          <form action="" method="post" className="flex flex-col space-y-12">
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Votre nom
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Votre adresse mail
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-lg">
                Société
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div className="flex flex-col space-y-8">
              <label htmlFor="" className="font-medium text-lg">
                Votre projet concerne
              </label>
              <Input variant="static" size="lg" color="black" />
            </div>
            <div className="border-b border-black">
              <label
                htmlFor=""
                className="font-medium text-lg flex mb-4 space-x-8"
              >
                <span>Joindre un fichier</span>
                <span>
                  <input
                    type="file"
                    class="block w-full text-sm text-black font-normal
        file:border-0
      file:text-base file:font-normal
      file:bg-[#D9D9D9]
      hover:file:bg-[#c3c3c3]
    "
                  />
                </span>
              </label>
            </div>
            <span className="w-[250px] h-[29px] group">
              <div className="mt-5 flex gap-5 hover:flex hover:justify-center hover:items-center hover:gap-0 py-4 hover:bg-black w-[152px] rounded-full transition-all px-2   hover:text-white hover:rounded-l-full hover:rounded-r-full">
                <div className="text-xl">Envoyer</div>
                <div className="bg-black rounded-b-full w-[29px]  transition-all flex items-center hover-bg-none justify-center rounded-l-full">
                  <img src="/logo/frame.svg" alt="" />
                </div>
              </div>
            </span>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
