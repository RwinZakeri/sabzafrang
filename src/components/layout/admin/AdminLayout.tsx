"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  // console.log(path.split("/")[3] === "craeteSlide");
  // console.log(path.split("/")[3]);
  // console.log(path);
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-primaryGreen ">
          {/* Replace with your sidebar content */}
          <nav>
            <ul>
              <li>
                <Link
                  className={`w-full px-2 py-2 text-lg hover:text-primaryWhite ${
                    path.split("/")[3] === undefined &&
                    "bg-[#297e6d] text-primaryWhite"
                  } hover:bg-[#297e6d] block`}
                  href={"/admin/dashboard"}
                >
                  داشبورد
                </Link>
              </li>
              <li>
                <Link
                  className={`w-full px-2 py-2 text-lg hover:text-primaryWhite ${
                    path.split("/")[3] === "craeteSlide" &&
                    "bg-[#297e6d] text-primaryWhite"
                  } hover:bg-[#297e6d] block`}
                  href={"/admin/dashboard/craeteSlide"}
                >
                  ایجاد اسلاید
                </Link>
              </li>
              <li>
                <Link
                  className={`w-full px-2 py-2 text-lg hover:text-primaryWhite ${
                    path.split("/")[3] === "createGroup" &&
                    "bg-[#297e6d] text-primaryWhite"
                  } hover:bg-[#297e6d] block`}
                  href={"/admin/dashboard/createGroup"}
                >
                  ایجاد گروه
                </Link>
              </li>
              <li>
                <Link
                  className={`w-full px-2 py-2 text-lg hover:text-primaryWhite ${
                    path.split("/")[3] === "createAlbum" &&
                    "bg-[#297e6d] text-primaryWhite"
                  } hover:bg-[#297e6d] block`}
                  href={"/admin/dashboard/createAlbum"}
                >
                  ایجاد البوم
                </Link>
              </li>
              <li>
                <Link
                  className={`w-full px-2 py-2 text-lg hover:text-primaryWhite ${
                    path.split("/")[3] === "createResume" &&
                    "bg-[#297e6d] text-primaryWhite"
                  } hover:bg-[#297e6d] block`}
                  href={"/admin/dashboard/createResume"}
                >
                  ایجاد رزمه
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>

      <ToastContainer />
    </>
  );
};

export default AdminLayout;
