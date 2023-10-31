import React, { useEffect, useState } from "react";
import { PageLayout, headingStyles } from "../../shared/designSystem";
import ImgCard from "./ImgCard";
import { updateUserSize } from "../../../utils/api";
import { useAuth } from "../../../provider/UserProvider";
import Cookies from "js-cookie";

const T_SHIRT_SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

const ShirtForm = () => {
  const auth = useAuth();
  const [tShirtSize, setTShirtSize] = useState(null);
  const [requestError, setRequestError] = useState(null);

  const sizeChangeHandler = async (size) => {
    try {
      const response = await updateUserSize(auth.userState.id, size);
      if (response.status === 200) {
        Cookies.set("size", size);

        setTShirtSize(size);
      }
    } catch (error) {
      setRequestError(error.response.data?.message);
    }
  };
  useEffect(() => {
    auth.userState?.size && setTShirtSize(auth.userState.size);
  }, [auth]);

  return (
    <PageLayout>
      <div className="text-center">
        <h2 className={headingStyles.h2}>Choose your size</h2>
        {requestError && <p className="text-red-400">{requestError}</p>}
        <div className="flex flex-wrap justify-center">
          {T_SHIRT_SIZE.map((size) => (
            <ImgCard
              key={size}
              size={size}
              sizeChangeHandler={sizeChangeHandler}
              tShirtSize={tShirtSize}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ShirtForm;
