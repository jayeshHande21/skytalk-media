import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);

  return (
    <div>
      <h2 style={{}}>Here is THe Login Page</h2>

      <button onClick={() => loginHandler("Adarsh", "Balika")}>LOGIN</button>
    </div>
  );
};
