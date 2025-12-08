import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/shareds/navbar/Navbar";
import Footer from "@/shareds/footer/Footer";

const Layout = () => {
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
