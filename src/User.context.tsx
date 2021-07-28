import { createContext } from "react";
import { User } from "./Models/User";

interface UserContextData {
  user?: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextData>({
  user: undefined,
  setUser: () => {},
});

export default UserContext;
