"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface formInfo {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [userForm, setUserForm] = useState<formInfo>({
    email: "",
    password: "",
  });

  const router = useRouter(); // Use the useRouter hook for navigation

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const updatedForm: formInfo = {
      email: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    if (!updatedForm.email) {
      console.log("Please enter an email");
      return;
    }

    setUserForm(updatedForm);
    console.log("Form submitted:", updatedForm);

    // Navigate to the dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              ایمیل
            </label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="ایمیل خود را وارد کنید"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-primaryGreen focus:outline-none focus:border-primaryGreen"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              پسسورد
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="پسوورد خود را وارد کنید"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-primaryGreen focus:outline-none focus:border-primaryGreen"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primaryGreen rounded-md hover:bg-primaryGreen/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:ring-offset-2"
          >
            ورود
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          اکانت ندارین؟
          <a href="/signup" className="text-primaryGreen hover:underline">
            ثبت نام
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
