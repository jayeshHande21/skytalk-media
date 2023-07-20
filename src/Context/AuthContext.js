import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const loginHandler = async () => {
    try {
      const userResponse = await axios.post("/api/auth/login");
      if (userResponse.status === 200) {
        console.log(userResponse);
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
