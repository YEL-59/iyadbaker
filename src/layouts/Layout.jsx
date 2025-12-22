import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "@/shareds/navbar/Navbar";
import Footer from "@/shareds/footer/Footer";
import { useUserInfo } from "@/hook/auth.hook";

const Layout = () => {
  const { data: userInfo, isError } = useUserInfo();

  useEffect(() => {
    if (userInfo) {
      // Create a streamlined user object to store
      const user = userInfo.data || userInfo; // Handle potential API response wrapper
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [userInfo]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
