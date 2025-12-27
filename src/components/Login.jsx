import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import FontAwesome from "./FontAwesome";
import Button from "./Button";

function Login() {
  return (
    <NavLink to="/login">
      <Button className="md:text-md focus: hover flex space-x-1 rounded-lg bg-blue-500 p-3 tracking-wide text-blue-100 lg:text-2xl">
        <FontAwesome icon={faUser} size="s" />

        <span>Login</span>
      </Button>
    </NavLink>
  );
}

export default Login;
