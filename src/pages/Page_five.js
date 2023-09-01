import React, { useState } from "react";
import Navbar from "../Navbar";
import Five from "../components/Five";

export default function Page_five() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Five className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
