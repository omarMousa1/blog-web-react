import React from "react";
import { Header } from "../pages/Header";
import { Outlet } from "react-router-dom";
export const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
