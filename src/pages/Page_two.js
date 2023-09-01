import React, { useState } from "react";
import Navbar from "../Navbar";
import Two from "../components/Two";

export default function Page_two() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };
  return (
    <div>
      <Navbar onMenuChange={handleMenuChange} />
      <Two className={menu ? "" : "blur-[7.5px]"} />
    </div>
  );
}
