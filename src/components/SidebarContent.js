import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logoReact.svg";
import { Breadcrumbs } from "./Breadcrumbs";

export const SidebarContent = ({ toggleSidebar }) => {
  return (
    <div className="p-4">
      <img src={logo} alt="logo" />
      <Breadcrumbs />
      <div className="flex justify-end mb-4">
        <button className="text-slate-500" onClick={toggleSidebar}>
          Close
        </button>
      </div>
      <hr />
      <nav className="flex flex-col gap-y-4 mt-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"tictactoe"}>TicTacToe</NavLink>
        <NavLink to={"wordle"}>Wordle</NavLink>
        <NavLink to={"todo"}>Todo List</NavLink>
        <NavLink to={"weather"}>Weather</NavLink>
      </nav>
    </div>
  );
};
