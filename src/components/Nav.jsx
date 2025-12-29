import { NavLink } from "react-router-dom";

import CategoryDropdown from "./CategoryDropdown";

function Nav() {
  return (
    <nav className="w-full">
      <ul className="md:text-md w-full items-center justify-around p-0 md:flex lg:text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? "border-b-2 border-blue-500 pb-1" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? "border-b-2 border-blue-500 pb-1" : ""
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <CategoryDropdown />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
