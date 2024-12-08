import db from "@/db/db.json";
import type { HeaderItem } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Ensure the JSON structure of db is typed properly
interface DbType {
  header: HeaderItem[];
}

const NavBarPcResponsive = () => {
  const { header } = db as DbType; // Cast the imported JSON to match the expected type
  const path = usePathname();
  return (
    <>
      <div className="hidden md:flex">
        {header?.map((head: HeaderItem) => (
          <div
            key={head?.id || head?.title}
            className={`px-4 relative cursor-pointer text-textGary group hover:after:block after:w-full after:h-1 after:bg-primaryGreen ${
              path === head.linkAddress ? "after:block" : "after:hidden"
            }  after:absolute  after:bottom-0 after:left-0`}
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
              <div className="w-48 hidden  group-hover:block absolute top-full z-[999] shadow-md ">
                {head?.subMenu.map((subMenu) => (
                  <div key={subMenu?.id || subMenu?.title} className="z-[999]">
                    <Link
                      href={subMenu?.linkAddress || "#"}
                      className={`block p-2 w-full hover:headerActive ${
                        path === subMenu.linkAddress
                          ? "bg-primaryGreen text-primaryWhite"
                          : " bg-primaryWhite"
                      }`}
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
    </>
  );
};

export default NavBarPcResponsive;
