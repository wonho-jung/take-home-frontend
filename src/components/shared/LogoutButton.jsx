import React from "react";
import { useAuth } from "../../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <button
      className="text-sm sm:text-base 	 bg-blue-500
      px-4 py-2 rounded text-white  h-[40px]"
      onClick={() => {
        auth.logout();
        navigate("/");
      }}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
