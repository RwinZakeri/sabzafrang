"use client";

import { Burgur } from "@/assets/icon/svgExporte";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";

const DrawerParent = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    console.log("use drawer parent (: ");
    setIsShow(false);
  }, [path]); // Close the drawer when the path changes

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
