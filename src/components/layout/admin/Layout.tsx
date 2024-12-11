import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="h-screen w-96 bg-red-500"></div>
      {children}
    </div>
  );
};

export default Layout;
