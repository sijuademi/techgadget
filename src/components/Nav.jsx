import { NavLink } from "react-router-dom";
import FontAwesome from "./FontAwesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useFetchData } from "../hooks/useFetchData";
import { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";

function Nav() {
  const [selectCategory, setSelectCategory] = useState(false);
  const { data: products } = useFetchData("products");

  function handleSortCategory() {
    setSelectCategory(!selectCategory);
  }
  console.log(selectCategory);

  // const relatedProducts = products.filter();
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
          {/* <Button
            className="flex cursor-pointer items-center gap-1 hover:text-blue-600"
            onClick={handleSortCategory}
          >
            Categories{" "}
            <span>
              <FontAwesome icon={faAngleDown} size="xs" />
            </span>
          </Button> */}
          {/* <label htmlFor="categories">Categories</label> */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
