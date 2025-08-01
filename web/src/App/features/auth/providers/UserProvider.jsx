import { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { user, isLoggedIn, checkedAuthState } = useAuth();
  return (
    <UserContext.Provider value={{ user, isLoggedIn, checkedAuthState }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
