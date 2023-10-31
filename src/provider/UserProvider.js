import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);
const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);

  //when the page loads, check if the user is logged in
  useEffect(() => {
    const userName = Cookies.get("userName");
    const id = Cookies.get("id");
    const size = Cookies.get("size");

    if (userName && id && size) {
      setUserState({ id, userName, size });
    }
  }, []);

  const login = (user) => {
    Cookies.set("userName", user.userName, { expires: 1 });
    Cookies.set("id", user.id, { expires: 1 });
    Cookies.set("size", user.size, { expires: 1 });
    setUserState(user);
  };

  const logout = () => {
    Cookies.remove("userName");
    Cookies.remove("id");
    Cookies.remove("size");
    setUserState(null);
  };
  return (
    <UserContext.Provider
      value={{
        userState,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useAuth = () => {
  return useContext(UserContext);
};
