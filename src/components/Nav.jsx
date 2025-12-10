import { NavLink } from "react-router-dom";
import FontAwesome from "./FontAwesome";

function Nav() {
  return (
    <nav className="w-full">
      <ul className="md:text-md w-full items-center justify-around p-0 md:flex lg:text-xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Shop</NavLink>
        </li>
        <li>
          <button className="flex cursor-pointer items-center gap-1 hover:text-blue-600">
            Categories{" "}
            <span>
              <FontAwesome type="solid" size="xs">
                angle-down
              </FontAwesome>{" "}
            </span>
          </button>
        </li>
        {/* <label htmlFor="categories">Categories</label>
          <select name="product categories" id="categories">
            <option value="1">Phones</option>
            <option value="2">Laptop</option>
            <option value="3">Smartwatch</option>
            <option value="4">Monitor</option>
            <option value="5">Keyboard</option>
          </select> */}
      </ul>
    </nav>
  );
}

export default Nav;
