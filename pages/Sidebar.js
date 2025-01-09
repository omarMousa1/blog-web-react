import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { SidebarContent } from "../components/SidebarContent";
import { Backdrop } from "../components/Backdrop";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div>
        {isOpen && <Backdrop toggleSidebar={toggleSidebar} />}
        <NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full z-20 bg-gray-900 text-white w-64 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </>
  );
};
