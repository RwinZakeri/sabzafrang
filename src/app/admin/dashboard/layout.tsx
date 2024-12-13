import AdminLayout from "@/components/layout/admin/AdminLayout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: { team: string }; // Adjusted type
}) {
  return (
    <AdminLayout>
      {/* Wrapping the content with AdminLayout */}
      {children}
    </AdminLayout>
  );
}
