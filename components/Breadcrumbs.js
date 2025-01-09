import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb} className="flex items-center">
          <Link to={currentLink} className="text-gray-600">
            {crumb}
          </Link>
          {index < array.length - 1 && (
            <span className="mx-2 text-gray-800">{">"}</span>
          )}
        </div>
      );
    });

  return (
    <div className="max-w-[1200px] mx-auto my-5 flex text-gray-800">
      {crumbs}
    </div>
  );
};
