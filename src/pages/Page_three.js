import React, { useState } from "react";
import Navbar from "../Navbar";
import Three from "../components/Three";

export default function Page_three() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Three className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
