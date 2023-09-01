import React, { useState } from "react";
import SectionAmime from "../components/SectionAmime";
import Navbar from "../Navbar";

export default function Anime_page() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <SectionAmime className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
