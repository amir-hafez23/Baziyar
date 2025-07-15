import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-steamBg border-b border-steamPanel">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-steamAccent"
        >
          MySteam
        </h1>
        <nav className="space-x-6 text-sm font-semibold">
          <NavLink to="/store" className={({ isActive }) =>
            isActive ? "text-steamAccent" : "hover:text-steamAccent"
          }>
            Store
          </NavLink>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
}
