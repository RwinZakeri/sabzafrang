import Layout from "@/components/layout/admin/Layout";
import "../../globals.css";
import Footer from "@/components/layout/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
