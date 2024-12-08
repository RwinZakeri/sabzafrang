"use client";
import EnFlagImg from "@/assets/images/flag/en.png";
import LogoTile from "@/assets/images/titleLogo.png";
import DrawerParent from "@/components/(header)/drawer/DrawerParent";
import NavBarPcResponsive from "@/components/(header)/navBarPcResponsive/navBarPcResponsive";
import type { Header } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full md:container p-3 flex items-center justify-between relative">
      {/* Mobile navigation */}
      <div className="p-2 md:hidden">
        <DrawerParent />
      </div>

      {/* Logo */}
      <div>
        <Image src={LogoTile} alt="sabzafrang" className="w-40" />
      </div>

      {/* PC Navigation */}
      <NavBarPcResponsive />

      {/* Language Selector */}
      <div>
        <Link href="/en" className="flex gap-1 px-2">
          <Image
            src={EnFlagImg}
            alt="English Language"
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
