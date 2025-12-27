import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const [email, setEmail] = useState("techgadget@gmail.com");
  const [password, setPassword] = useState("password");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const label = "md:self-center md:text-xl xl:text-2xl";
  const input =
    "rounded-xl border border-gray-200 px-4 py-2 text-stone-400 md:px-6 md:py-3 flex-1";

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  console.log(isAuthenticated);

  useEffect(
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate],
  );
  return (
    <main className="flex justify-center py-[20%]">
      <form onSubmit={handleSubmit} className="h-min w-max">
        <div className="flex flex-col gap-2 pb-2 md:flex-row md:pb-6">
          <label htmlFor="email" className={label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={input}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label htmlFor="password" className={label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={input}
          />
        </div>
        <div className="mt-6">
          <Button
            className="hover w-full rounded-xl bg-blue-500 p-3 py-2 text-xl font-semibold text-white"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
