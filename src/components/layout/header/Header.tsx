"use client";
import Image from "next/image";
// imported Image
import EnFlagImg from "@/assets/images/flag/en.png";
import LogoTile from "@/assets/images/titleLogo.png";
import DrawerParent from "@/components/(header)/drawer/DrawerParent";
import db from "@/db/db.json";
import type { Header, HeaderItem } from "@/types/type";
import Link from "next/link";

const Header = () => {
  const { header }: Header = db;
  return (
    <header className="w-full md:container p-3 flex items-center justify-between relative">
      {/* mobile navs */}
      <div className="p-2 md:hidden">
        <DrawerParent />
      </div>
      <div>
        <Image src={LogoTile} alt="sabzafrang" className="w-40" />
      </div>
      {/* pc navs */}
      <div className="flex">
        {header?.map((head: HeaderItem) => (
          <div
            key={head?.id}
            className="px-4 bg-emerald-300 h-[50px] leading-[50px]"
          >
            <p>
              <Link href={head?.linkAddress || ""}>{head.title}</Link>
            </p>
          </div>
        ))}
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
