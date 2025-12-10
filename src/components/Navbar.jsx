import Nav from "./Nav";
import Login from "./Login";
import FontAwesome from "./FontAwesome";
import Logo from "./Logo";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 flex items-center justify-between bg-white px-4 py-3 md:justify-between md:space-x-12 md:px-12 lg:space-x-5 lg:px-6 xl:mx-0 xl:px-0">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="hidden grow md:block">
        <Nav />
      </div>
      <div className="hidden lg:block">
        <Search />
      </div>
      <div className="text-blue-500">
        <FontAwesome type="solid">cart-shopping</FontAwesome>
      </div>
      <Login />
    </div>
  );
}

export default Navbar;
