import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/images/logo/logoReact.svg";
import { Breadcrumbs } from "./Breadcrumbs";
import logo2 from "../assets/images/avatar/avatar-man1.svg";

export const SidebarContent = ({ toggleSidebar }) => {
  return (
    <div className="p-4">
      <Link to="/">
        <div className="flex flex-col justify-center items-center">
          <div className="border-gray-600 border-2 rounded-full w-12 h-12 overflow-hidden">
            <img src={logo2} alt="logo" className="object-contain" />
          </div>
          <h1 className="border-gray-600 border-b-4 rounded-lg px-1 shadow-sm shadow-black italic">
            OMAR MOUSA
          </h1>
        </div>
      </Link>
      <Breadcrumbs />
      <div className="flex justify-end mb-4">
        <button className="text-slate-500" onClick={toggleSidebar}>
          Close
        </button>
      </div>
      <hr />
      <nav className="flex flex-col gap-y-4 mt-5">
        <NavLink to={"tictactoe"}>TicTacToe</NavLink>
        <NavLink to={"wordle"}>Wordle</NavLink>
        <NavLink to={"todo"}>Todo List</NavLink>
        <NavLink to={"weather"}>Weather</NavLink>
      </nav>
    </div>
  );
};
