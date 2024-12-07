"use client";
import Image from "next/image";
// imported Image
import EnFlagImg from "@/assets/images/flag/en.png";
import LogoTile from "@/assets/images/titleLogo.png";
import DrawerParent from "@/components/(header)/drawer/DrawerParent";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full p-3 flex items-center justify-between relative">
      <div className="p-2">
        <DrawerParent />
      </div>
      <div>
        <Image src={LogoTile} alt="sabzafrang" className="w-40" />
      </div>
      <div>
        <Link href={"/en"} className="flex gap-1 px-2">
          <Image
            src={EnFlagImg}
            alt="sabzafrang"
            width={30}
            className="w-5 h-4"
          />
          <p className="text-sm">EN</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
