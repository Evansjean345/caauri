import React from "react";
import Footer from "./Footer";

export default function Six() {
  return (
    <div className="bg-white text-black">
      {/* first section */}
      <div className="mt-24">
        <div className="flex justify-center px-24 pt-32  relative">
          <img src="/images/bot.png" alt="" />
        </div>
        <div className="w-full mt-2 flex">
          <span className="text-2xl font-medium w-1/2 flex pl-24 justify-start">
            A LA UNE &nbsp; &nbsp; ----- &nbsp; &nbsp; Yurii Verkalets
          </span>
          <span className="w-1/2"></span>
        </div>
      </div>
      <span className="text-xl font-medium px-24 flex justify-start mt-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        quibusdam adipisci fuga aspernatur veritatis vitae optio veniam, fugit
      </span>
      <p className="text-base flex justify-start px-24 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consequatur facilis blanditiis quisquam ad voluptate tenetur pariatur
        odio. Est illo assumenda soluta consequuntur fuga autem, beatae neque
        doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Autem consequatur facilis blanditiis
        quisquam ad voluptate tenetur pariatur odio. Est illo assumenda soluta
        consequuntur fuga autem, beatae neque doloremque ducimus alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
        facilis blanditiis quisquam ad voluptate tenetur pariatur odio. Est illo
        assumenda soluta consequuntur fuga autem, beatae neque doloremque
        ducimus alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem consequatur facilis blanditiis quisquam ad voluptate tenetur
        pariatur odio. Est illo assumenda soluta consequuntur fuga autem, beatae
        neque doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Autem consequatur facilis blanditiis
        quisquam ad voluptate tenetur pariatur odio. Est illo assumenda soluta
        consequuntur fuga autem, beatae neque doloremque ducimus alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
        facilis blanditiis quisquam ad voluptate tenetur pariatur odio. Est illo
        assumenda soluta consequuntur fuga autem, beatae neque doloremque
        ducimus alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem consequatur facilis blanditiis quisquam ad voluptate tenetur
        pariatur odio. Est illo assumenda soluta consequuntur fuga autem, beatae
        neque doloremque ducimus alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem consequatur facilis blanditiis quisquam ad
        voluptate tenetur pariatur odio. Est illo assumenda soluta consequuntur
        fuga autem, beatae neque doloremque ducimus alias.
      </p>
      <div className="w-full mt-20 flex pb-96">
        <span className="text-2xl font-medium w-1/2 space-x-3 flex pl-24 justify-start">
          <img src="/icon/arrow_left.svg" alt="" className="mt-2" />{" "}
          <span>retour au blog</span>
        </span>
        <span className="w-1/2"></span>
      </div>
      <Footer />
    </div>
  );
}
