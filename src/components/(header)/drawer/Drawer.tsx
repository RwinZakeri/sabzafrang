"use client";
import { ChevronDownIcon } from "@/assets/icon/svgExporte";
import db from "@/db/db.json";
import type { Header } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Drawer = ({ isShow }: { isShow: boolean }) => {
  const path = usePathname();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Track the open accordion ID
  const { header }: Header = db;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    setIsMounted(true); // Set to true after component mounts
  }, []);

  if (!isMounted) return null;

  const handleAccordionClick = (id: string) => {
    // If the clicked accordion is already open, close it, else open it
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <nav
      className={`${
        isShow ? "block absolute z-[999] " : "hidden"
      } w-full bg-gray-100 left-0 top-full`}
    >
      {header?.map((head) => (
        <div
          key={head?.id}
          className={`w-full font-light  ${
            path === head?.linkAddress ? "headerActive " : "text-textGary"
          }`}
        >
          <div
            className={`text-sm w-full overflow-hidden ${
              openAccordion === String(head?.id) ? "h-auto" : "h-[43px]"
            }`}
          >
            <p
              className="w-full h-full leading-[27px] px-5 py-2 cursor-pointer"
              onClick={() => handleAccordionClick(String(head?.id))}
            >
              <Link
                className="w-full flex items-center gap-1 "
                href={head?.linkAddress || ""}
              >
                {head?.title}
                {head.subMenu && (
                  <div
                    className={`transition-transform ${
                      openAccordion === String(head?.id) ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronDownIcon width={20} />
                  </div>
                )}
              </Link>
            </p>
            {head?.subMenu &&
              openAccordion === String(head?.id) &&
              head.subMenu.map((subMenu) => (
                <div
                  key={subMenu.id}
                  className={`bg-primaryWhite text-textGary ${
                    path === subMenu?.linkAddress && "bg-[#17aa8f] text-white"
                  } `}
                >
                  <p className="px-5 py-2 w-full">
                    <Link className="w-full block" href={subMenu?.linkAddress}>
                      {subMenu?.title}
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Drawer;
