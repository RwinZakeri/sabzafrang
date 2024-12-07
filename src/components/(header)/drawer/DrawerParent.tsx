"use client";

import { Burgur } from "@/assets/icon/svgExporte";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";

const DrawerParent = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    setIsShow(false);
  }, []);
  
  return (
    <>
      <div onClick={() => setIsShow((prev) => !prev)}>
        <Burgur />
      </div>
      <Drawer isShow={isShow} />
    </>
  );
};

export default DrawerParent;
