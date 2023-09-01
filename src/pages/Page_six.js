import React, { useState } from "react";
import Navbar from "../Navbar";
import Six from "../components/Six";

export default function Page_six() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange}/>
      <Six className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
