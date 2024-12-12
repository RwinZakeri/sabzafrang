"use client";

import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  const isLoggedIn = false;

  if (!isLoggedIn) {
    router.push("/admin/dashboard/login");
    return null; // Ensure nothing is rendered while redirecting
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default AdminDashboard;