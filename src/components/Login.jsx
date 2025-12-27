import { NavLink, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import FontAwesome from "./FontAwesome";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogoutClick() {
    if (isAuthenticated) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  }
  // function handleLogoutClick() {
  //   if (isAuthenticated) {
  //     logout();
  //     navigate("/");
  //   }
  // }
  return (
    <>
      <Button
        type="button"
        className="md:text-md focus: hover flex space-x-1 rounded-lg bg-blue-500 p-3 capitalize tracking-wide text-blue-100 lg:text-2xl"
        onClick={handleLogoutClick}
      >
        <FontAwesome icon={faUser} size="s" />

        <span>{isAuthenticated ? "logout" : "login"}</span>
      </Button>
      {/* {isAuthenticated ? (
        <Button
          type="button"
          className="md:text-md focus: hover flex space-x-1 rounded-lg bg-blue-500 p-3 tracking-wide text-blue-100 lg:text-2xl"
          onClick={handleLogoutClick}
        >
          <FontAwesome icon={faUser} size="s" />

          <span>Logout</span>
        </Button>
      ) : (
        <NavLink to="/login">
          <Button className="md:text-md focus: hover flex space-x-1 rounded-lg bg-blue-500 p-3 tracking-wide text-blue-100 lg:text-2xl">
            <FontAwesome icon={faUser} size="s" />

            <span>Login</span>
          </Button>
        </NavLink>
      )} */}
    </>
  );
}

export default Login;
