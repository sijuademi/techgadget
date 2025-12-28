import Nav from "./Nav";
import Login from "./Login";
import FontAwesome from "./FontAwesome";
import Logo from "./Logo";
import Search from "./Search";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

function Navbar() {
  const { cartItems } = useSelector((store) => store);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleCartClick(e) {
    if (!isAuthenticated) {
      e.preventDefault();
      alert("Please log in to access your cart");
      navigate("/login");
    } else {
      navigate("/cart");
    }
  }

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-gray-200 bg-white px-4 py-3 md:justify-between md:space-x-12 md:px-12 lg:space-x-5 lg:px-6 xl:mx-0 xl:px-0">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="hidden grow md:block">
        <Nav />
      </div>
      <div className="hidden lg:block">
        <Search />
      </div>
      <Button
        className="ease relative text-blue-500 transition-colors duration-300 hover:text-blue-200"
        onClick={handleCartClick}
      >
        <FontAwesome icon="cart-shopping" />
        <sup className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {cartItems.length}
        </sup>
      </Button>
      <Login />
    </div>
  );
}

export default Navbar;
