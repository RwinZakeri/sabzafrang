import Layout from "@/components/layout/admin/Layout";
import "../../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Layout>
        <body>{children}</body>
      </Layout>
    </html>
  );
}
