import { createContext } from "react";
import { AuthUser } from "./Models/AuthUser";

interface UserContextData {
  user?: AuthUser;
  setUser: (user: AuthUser) => void;
}

const UserContext = createContext<UserContextData>({
  user: undefined,
  setUser: () => {},
});

export default UserContext;
