import React from "react";

export const Backdrop = ({ toggleSidebar }) => {
  return (
    <div
      onClick={toggleSidebar}
      className="fixed h-full w-full backdrop-blur-sm"
    ></div>
  );
};
