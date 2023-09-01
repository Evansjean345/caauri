import React, { useState } from "react";
import Navbar from "../Navbar";
import Four from "../components/Four";

export default function Page_Four() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Four className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
