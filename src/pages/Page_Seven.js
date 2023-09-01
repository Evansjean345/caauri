import React, { useState } from "react";
import Navbar from "../Navbar";
import Seven from "../components/Seven";

export default function Page_Seven() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Seven className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
