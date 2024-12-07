"use client";
import EnFlagImg from "@/assets/images/flag/en.png";
import LogoTile from "@/assets/images/titleLogo.png";
import DrawerParent from "@/components/(header)/drawer/DrawerParent";
import db from "@/db/db.json";
import type { Header, HeaderItem } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { header }: Header = db;

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
      <div className="hidden md:flex">
        {header?.map((head: HeaderItem) => (
          <div
            key={head?.id || head?.title}
            className="px-4 relative cursor-pointer text-textGary group hover:after:block after:w-full after:h-1 after:bg-primaryGreen after:hidden after:absolute  after:bottom-0 after:left-0"
          >
            {head?.linkAddress ? (
              <Link
                className="h-[50px] leading-[50px]"
                href={head?.linkAddress}
              >
                {head?.title}
              </Link>
            ) : (
              <span className="h-[50px] leading-[50px]">{head?.title}</span>
            )}

            {/* Submenu */}
            {!!head?.subMenu && (
              <div className="w-48 hidden group-hover:block absolute top-full z-[999] shadow-md ">
                {head?.subMenu.map((subMenu) => (
                  <div key={subMenu?.id || subMenu?.title} className="z-[999]">
                    <Link
                      href={subMenu?.linkAddress || "#"}
                      className="block bg-primaryWhite p-2 w-full hover:headerActive"
                    >
                      {subMenu?.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

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
