import { Sidebar } from "./Sidebar";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-30">
      <Sidebar />
    </header>
  );
};
