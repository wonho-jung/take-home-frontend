import React, { useState } from "react";
import { headingStyles } from "../shared/designSystem";
import { CreateUser, loginUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/UserProvider";

const SignInOutForm = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [requestError, setRequestError] = useState(null);
  const [isSignIn, isSetSignIn] = useState(false);

  const SignInUPHandler = async (event) => {
    setRequestError(null);
    event.preventDefault();
    try {
      if (isSignIn) {
        const response = await loginUser(userName);
        auth.login({
          userName: response.data.userName,
          id: response.data.userID,
          size: response.data.size,
        });
        navigate("/dashboard");
      } else {
        const response = await CreateUser(userName);

        auth.login({
          userName: response.data.userName,
          id: response.data.userID,
          size: response.data.size,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      setRequestError(error.response.data?.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <form
          onSubmit={SignInUPHandler}
          className="flex flex-col w-[350px] bg-blue-400 px-10 py-12 rounded"
        >
          {requestError && <p className="text-red-800">{requestError}</p>}
          <h2 className={`${headingStyles.h2} mb-2`}>
            {isSignIn ? "Sign In" : "Sign up"}
          </h2>
          <p>
            {isSignIn ? "Crate a new account?" : "Already have an account?"}
            {"  "}
            <span
              className="cursor-pointer underline"
              onClick={() => {
                isSetSignIn(!isSignIn);
                setRequestError(null);
              }}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>{" "}
          </p>
          <label className="block mb-2" htmlFor="userName">
            User name
          </label>
          <input
            className="mb-4 bg-blue-100 rounded p-2 outline-none"
            type="text"
            value={userName}
            id="userName"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="p-2 bg-blue-600 rounded" type="submit">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInOutForm;
