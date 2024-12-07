import Layout from "@/components/layout/Layout";
import localFont from "next/font/local";
import "./globals.css";

// local fonts
const iranSansNum = localFont({
  src: [
    {
      path: "../assets/font/IRANSansWebFaNum-Medium.woff2",
    },
    {
      path: "../assets/font/IRANSansWebFaNum-Medium.woff",
    },
    {
      path: "../assets/font/IRANSansWebFaNum-Medium.ttf",
    },
    {
      path: "../assets/font/IRANSansWebFaNumLight.ttf",
    },
    {
      path: "../assets/font/IRANSansWebFaNumLight.woff2",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSansNum.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
