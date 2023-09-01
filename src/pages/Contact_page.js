import React, { useState } from "react";
import Navbar from "../Navbar";
import Contact from "../components/Contact";

export default function Contact_page() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Contact className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
