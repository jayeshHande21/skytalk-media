import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const loginHandler = async (username, password) => {
    const testCreds = {
      username: "username",
      password: "password",
    };
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(testCreds),
      });

      console.log(response);
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        const { foundUser, encodedToken } = response.data;
        console.log("User Response:", foundUser);
        console.log("Encoded Token:", encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
